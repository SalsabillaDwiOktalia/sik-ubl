<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Input Karyawan
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'karyawanAdmin'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input label="Nama Karyawan" v-model="form.nama_karyawan" :rules="[  val => val && val.length > 0 || 'Nama Karyawan tidak boleh 0 / kosong !']"/>
          <q-select
            label="Status"
            v-model="form.status"
            :options= opsiStatus
          />
          <!-- <div>{{ this.form.status }}</div> -->
          <div v-if="this.form.status == 'dosen'">
            <q-input label="NIDN" v-model="form.nidn" :rules="[  val => val && val.length > 0 || 'NIDN tidak boleh 0 / kosong !']" />
          </div>

          <!-- <div v-if="this.status == 'karyawan'">

          </div> -->
          <!-- <div v-if="this.status == 'dosen'">

          </div>
          <div>{{ this.status.nama_status }}</div> -->
          <q-select
            label="Kategori"
            v-model="kategori"
            :options="listKategori"
            option-value="id_kategori"
            option-label="nama_kategori"
            @update:model-value="hitung()"
          />
          <q-input label="Tanggal Lahir" v-model="form.tanggal_lahir" @click="$refs.tanggalLahir.show()" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" ref="tanggalLahir" transition-hide="scale">
                  <q-date v-model="form.tanggal_lahir" @update:model-value="$refs.tanggalLahir.hide();hitung()">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input label="Tanggal Masuk Kerja" v-model="form.tanggal_masuk_kerja" @click="$refs.tanggalMasukKerja.show()" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" ref="tanggalMasukKerja" transition-hide="scale">
                  <q-date v-model="form.tanggal_masuk_kerja" @update:model-value="$refs.tanggalMasukKerja.hide();hitung()">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input readonly label="Tanggal Pensiun" v-model="form.tgl_pensiun" />
          <q-input label="NIK" v-model="form.nik" :rules="[  val => val && val.length > 0 || 'NIK tidak boleh 0 / kosong !']"/>
          <q-input label="Alamat" v-model="form.alamat" type="textarea" :rules="[  val => val && val.length > 0 || 'Alamat tidak boleh 0 / kosong !']"/>
          <div>
            <q-select
            label="Jenis Kelamin"
            v-model="form.jenis_kelamin"
            :options="opsiJenisKelamin"
            :rules="[  val => val && val.length > 0 || 'Jenis Kelamin tidak boleh 0 / kosong !']"
          />
          </div>
          <div>
            <q-select
            label="Agama"
            v-model="form.agama"
            :options="opsiAgama"
            :rules="[  val => val && val.length > 0 || 'Agama tidak boleh 0 / kosong !']"
          />
          </div>
          <q-input label="Nomor Telpon" v-model="form.no_tlpn" type="number" :rules="[  val => val && val.length > 0 || 'Nomor Telepon boleh 0 / kosong !']"/>
          <q-input label="Gaji Pokok" v-model="form.gaji_pokok" type="number" :rules="[  val => val && val.length > 0 || 'Gaji Pokok tidak boleh 0 / kosong !']"/>
          <!-- <q-input label="Nomor SK" v-model="form.no_sk" /> -->
          <q-btn label="Submit Karyawan" color="primary" unelevated type="submit" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
/* eslint-disable */
import karyawan from 'src/router/karyawan'
const model = () => {
  return {
    nama_karyawan: null,
    status: null,
    nidn: null,
    tanggal_lahir: '1996/06/22',
    tanggal_masuk_kerja: null,
    kategori: null,
    nik: null,
    alamat: null,
    jenis_kelamin: null,
    agama: null,
    gaji_pokok: null,
    no_tlpn: null
    // no_sk: null
  }
}
export default {
  data () {
    return {
      form: model(),
      jk: null,
      listStatus: [],
      listKategori: [],
      opsiStatus: [
        "karyawan",
        "dosen"
      ],
      opsiJenisKelamin: [
        "Laki-Laki",
        "Perempuan"
      ],
      opsiAgama: [
        "Islam",
        "Protestan",
        "Khatolik",
        "Buddha",
        "Hindu",
        "Konghuchu"
      ],
      kategori: null,
    }
  },
  created () {
    this.getStatus()
    this.getKategori()
  },
  methods: {
    onSubmit () {

      this.$showLoading()
      // console.log(this.form.status)
      if (this.form.status == "karyawan") {
        this.form.status = 2;
      }
      if (this.form.status == "dosen") {
        this.form.status = 3;
      }
      this.form.kategori = this.kategori.id_kategori
      this.$axios.post('/karyawan/create', this.form)
        .finally(() => this.$hide())
        .then(res => {
          // console.log(this.form)
          if (this.$parseResponse(res.data)) {
            this.$router.back()
          }
        })
    },
    getStatus () {
      this.$axios.get('/status/getall')
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.listStatus = res.data.data
          }
        })
    },
    getKategori () {
      this.$axios.get('/karyawan/kategori/get')
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.listKategori = res.data.data
          }
        })
    },
    hitung () {
      const kategori = Number(this.kategori?.id_kategori)
      const tanggalLahir = this.form.tanggal_lahir
      if (!(kategori === null || kategori === '' || tanggalLahir === null || tanggalLahir === '' || this.form.tanggal_masuk_kerja === '' || this.form.tanggal_masuk_kerja === null)) {
        const umur = this.calculateAge(tanggalLahir)

        if (kategori === 1) {
          if (umur > 45) {
            this.rejectUmur()
          } else {
            const sisaUmurKerja = 65 - umur
            const tahunPensiun = new Date().getFullYear() + sisaUmurKerja
            this.form.tgl_pensiun = `${tahunPensiun}/${new Date().getMonth() + 1}/${new Date().getDate()}`
          }
        } else if (kategori === 2) {
          if (umur < 22 || umur >= 35) {
            this.rejectUmur()
          } else {
            const umurAddMasaKerja = umur + 10
            if (umurAddMasaKerja <= 35) {
              const tahunPensiun = new Date(this.form.tanggal_masuk_kerja).getFullYear() + 10
              this.form.tgl_pensiun = `${tahunPensiun}/${this.getBulanTgl()}`
            } else {
              const lebihKerja = 35 - umur
              const tahunPensiun = new Date(this.form.tanggal_masuk_kerja).getFullYear() + lebihKerja
              this.form.tgl_pensiun = `${tahunPensiun}/${this.getBulanTgl()}`
            }
          }
        } else if (kategori === 3) {
          if (umur < 35 || umur > 44) {
            this.rejectUmur()
          } else {
            const umurAddMasaKerja = umur + 10
            if (umurAddMasaKerja <= 45) {
              const tahunPensiun = new Date(this.form.tanggal_masuk_kerja).getFullYear() + 10
              this.form.tgl_pensiun = `${tahunPensiun}/${this.getBulanTgl()}`
            } else {
              const lebihKerja = 45 - umur
              const tahunPensiun = new Date(this.form.tanggal_masuk_kerja).getFullYear() + lebihKerja
              this.form.tgl_pensiun = `${tahunPensiun}/${this.getBulanTgl()}`
            }
          }
        } else if (kategori === 4 || kategori === 5) {
          if (umur < 30 || umur > 49) {
            this.rejectUmur()
          } else {
            const umurAddMasaKerja = umur + 10
            if (umurAddMasaKerja <= 50) {
              const tahunPensiun = new Date(this.form.tanggal_masuk_kerja).getFullYear() + 10
              this.form.tgl_pensiun = `${tahunPensiun}/${this.getBulanTgl()}`
            } else {
              const lebihKerja = 50 - umur
              const tahunPensiun = new Date(this.form.tanggal_masuk_kerja).getFullYear() + lebihKerja
              this.form.tgl_pensiun = `${tahunPensiun}/${this.getBulanTgl()}`
            }
          }
        } else if (kategori === 6) {
          if (umur < 25 || umur > 39) {
            this.rejectUmur()
          } else {
            const umurAddMasaKerja = umur + 10
            if (umurAddMasaKerja <= 40) {
              const tahunPensiun = new Date(this.form.tanggal_masuk_kerja).getFullYear() + 10
              this.form.tgl_pensiun = `${tahunPensiun}/${this.getBulanTgl()}`
            } else {
              const lebihKerja = 40 - umur
              const tahunPensiun = new Date(this.form.tanggal_masuk_kerja).getFullYear() + lebihKerja
              this.form.tgl_pensiun = `${tahunPensiun}/${this.getBulanTgl()}`
            }
          }
        } else if (kategori === 7) {
          if (umur < 22 || umur > 29) {
            this.rejectUmur()
          } else {
            const umurAddMasaKerja = umur + 10
            if (umurAddMasaKerja <= 30) {
              const tahunPensiun = new Date(this.form.tanggal_masuk_kerja).getFullYear() + 10
              this.form.tgl_pensiun = `${tahunPensiun}/${this.getBulanTgl()}`
            } else {
              const lebihKerja = 30 - umur
              const tahunPensiun = new Date(this.form.tanggal_masuk_kerja).getFullYear() + lebihKerja
              this.form.tgl_pensiun = `${tahunPensiun}/${this.getBulanTgl()}`
            }
          }
        } else if (kategori === 8) {
          if (umur < 17 || umur > 24) {
            this.rejectUmur()
          } else {
            const umurAddMasaKerja = umur + 10
            if (umurAddMasaKerja <= 25) {
              const tahunPensiun = new Date(this.form.tanggal_masuk_kerja).getFullYear() + 10
              this.form.tgl_pensiun = `${tahunPensiun}/${this.getBulanTgl()}`
            } else {
              const lebihKerja = 25 - umur
              const tahunPensiun = new Date(this.form.tanggal_masuk_kerja).getFullYear() + lebihKerja
              this.form.tgl_pensiun = `${tahunPensiun}/${this.getBulanTgl()}`
            }
          }
        } else if (kategori === 9) {
          if (umur < 17 || umur > 49) {
            this.rejectUmur()
          } else {
            const umurAddMasaKerja = umur + 10
            if (umurAddMasaKerja <= 50) {
              const tahunPensiun = new Date(this.form.tanggal_masuk_kerja).getFullYear() + 10
              this.form.tgl_pensiun = `${tahunPensiun}/${this.getBulanTgl()}`
            } else {
              const lebihKerja = 50 - umur
              const tahunPensiun = new Date(this.form.tanggal_masuk_kerja).getFullYear() + lebihKerja
              this.form.tgl_pensiun = `${tahunPensiun}/${this.getBulanTgl()}`
            }
          }
        } else {
          this.form.uang_pensiun = 0
        }
      }
    },
    calculateAge (tglLahir) {
      const birthday = new Date(tglLahir)
      const today = new Date(`${this.form.tanggal_masuk_kerja} ${new Date().getHours()}:${new Date().getMinutes()}:00`)
      return Math.floor((today - birthday) / (365.25 * 24 * 60 * 60 * 1000))
    },
    rejectUmur () {
      this.$q.dialog({
        title: 'Peringatan',
        message: 'Usia tidak memenuhi syarat'
      }).onOk(() => {
        this.resetForm()
      })
    },
    getBulanTgl () {
      return `${new Date().getMonth() + 1}/${new Date().getDate()}`
    },
    resetForm () {
      this.form = model()
      this.kategori = null
      this.status = null
    }
  }
}
</script>
