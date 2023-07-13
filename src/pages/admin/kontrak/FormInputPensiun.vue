<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Input Pensiun
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'kontrakAdmin'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input label="Nomor SK" v-model="form.no_sk"/>
          <q-input v-if="dataKaryawan" label="Mulai Kerja" readonly v-model="tglMasuk" @click="$refs.tanggalMasukKerja.show()"/>
          <q-input label="Tanggal Kontrak" v-model="form.tgl_kontrak" @click="$refs.tglkontrak.show()" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" ref="tglkontrak" transition-hide="scale">
                  <q-date v-model="form.tgl_kontrak" @update:model-value="$refs.tglkontrak.hide();hitungHabis()">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input label="Habis Kontrak" readonly v-model="form.tgl_habis_kontrak"/>
          <q-select
            label="Keterangan Pensiun"
            v-model="form.ket_kontrak"
            :options="['Pensiun', 'Mengundarkan Diri', 'Habis Kontrak']"
            @update:model-value="hitungPesangon()"
          />
          <q-input label="Uang Pesangon" v-model="form.uang_pesangon" />
          <q-input label="Uang Penghargaan" v-model="form.uang_penghargaan" />
          <q-btn label="Submit Data" color="primary" unelevated type="submit" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
const model = () => {
  return {
    id_karyawan: null,
    id_kontrak: null,
    no_sk: null,
    tanggal_masuk_kerja: null,
    tgl_kontrak: null,
    tgl_habis_kontrak: null,
    ket_kontrak: null,
    uang_pesangon: 0,
    uang_penghargaan: 0
  }
}
export default {
  data () {
    return {
      form: model(),
      status: null,
      listStatus: [],
      listKategori: [],
      kategori: null,
      dataKaryawan: null,
      tglMasuk: null
    }
  },
  created () {
    this.getTglMasukKerja()
  },
  methods: {
    getTglMasukKerja () {
      this.$showLoading()
      this.$axios.get(`/karyawan/get/${this.$route.params.id}`)
        .finally(() => this.$hide())
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.dataKaryawan = res.data.data
            this.tglMasuk = this.$parseDate(res.data.data.tanggal_masuk_kerja).dateLocal
          }
        })
    },
    onSubmit () {
      this.$showLoading()
      this.form.id_karyawan = this.$route.params.id
      this.form.id_kontrak = this.$route.params.id_kontrak
      this.$axios.post('/kontrak/pensiun', this.form)
        .finally(() => this.$hide())
        .then(res => {
          if (this.$parseResponse(res.data)) {
            this.$router.back()
          }
        })
    },
    hitungHabis () {
      // const tgl = new Date(this.form.tgl_kontrak)
      this.form.tgl_habis_kontrak = this.form.tgl_kontrak
    },
    hitungPesangon () {
      const mulaiKerja = new Date(this.dataKaryawan.tanggal_masuk_kerja)
      const tglPensi = new Date(this.form.tgl_kontrak)
      const masaKerja = Math.floor((tglPensi - mulaiKerja) / (365.25 * 24 * 60 * 60 * 1000))
      // pensiun
      if (this.form.ket_kontrak === 'Pensiun' || this.form.ket_kontrak === 'Habis Kontrak') {
        // hitung penghargaan
        this.hitungPenghargaan(masaKerja)

        // hitung pesangon
        if (masaKerja < 1) {
          this.form.uang_pesangon = Number(this.dataKaryawan.gaji_pokok)
        } else if (masaKerja >= 1 && masaKerja <= 7) {
          this.form.uang_pesangon = Number(this.dataKaryawan.gaji_pokok) * (masaKerja + 1)
        } else {
          this.form.uang_pesangon = Number(this.dataKaryawan.gaji_pokok) * 9
        }
      } else if (this.form.ket_kontrak === 'Mengundarkan Diri') {
        this.hitungPenghargaan(masaKerja)
        this.form.uang_pesangon = 0
      } else {
        this.form.uang_pesangon = 0
        this.form.uang_penghargaan = 0
      }
    },
    hitungPenghargaan (masaKerja) {
      if (masaKerja < 3) {
        this.form.uang_penghargaan = 0
      } else if (masaKerja >= 3 && masaKerja < 6) {
        this.form.uang_penghargaan = Number(this.dataKaryawan.gaji_pokok) * 2
      } else if (masaKerja >= 6 && masaKerja < 9) {
        this.form.uang_penghargaan = Number(this.dataKaryawan.gaji_pokok) * 3
      } else {
        this.form.uang_penghargaan = Number(this.dataKaryawan.gaji_pokok) * 4
      }
    }
  }
}
</script>
