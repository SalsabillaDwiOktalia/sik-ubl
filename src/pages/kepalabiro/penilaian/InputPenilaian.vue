<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Input Penilaian Karyawan
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'dashboardKepalaBiro'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <div>
            <q-select
            label="Periode Penilaian"
            v-model="form.periode_penilaian"
            :options="opsiPeriodePenilaian"
            :rules="[  val => val && val.length > 0 || 'Periode Penilaian  tidak boleh 0 / kosong !']"
          />
          </div>
          <q-input label="Tanggal Penilaian" v-model="form.tanggal_penilaian" @click="$refs.tanggal_penilaian.show()" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" ref="tanggalPenilaian" transition-hide="scale">
                  <q-date v-model="form.tanggal_penilaian" @update:model-value="$refs.tanggalPenilaian.hide();hitung()">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-select
            label="Pemberi Nilai"
            v-model="kepalaBiro"
            :options="listKepalaBiro"
            option-value="kode_jabatan"
            :option-label="r => `${r.nama_jabatan} (${r.nama_karyawan}) (${r.keterangan})`"
          />
          <q-select
            label="Ditujukan Ke"
            v-model="karyawan"
            :options="listkaryawan"
            option-value="id_karyawan"
            :option-label="r => `${r.nama_jabatan} ${r.nama_unit_kerja} (${r.nama_karyawan})`"
          />
          <q-btn label="Submit Karyawan" color="primary" unelevated type="submit" :to="{name: 'SubmitPenilaian'}" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      form: {
        judul_tugas: null,
        id_kepala_biro: null,
        id_jabatan_pimpinan_unit: null,
        tanggal_penilaian: null

      },
      lampiran: null,
      kepalaBiro: null,
      id_karyawan: null,
      listKepalaBiro: [],
      listkaryawan: []
    }
  },
  created () {
    this.getKepalaBiro()
    this.getId_jabatan_pimpinan_unit()
  },
  methods: {
    onSubmit () {
      this.$showLoading()
      this.form.id_kepala_biro = this.kepalaBiro.id_jabatan_karyawan
      this.form.id_karyawan = this.id_karyawan.id_jabatan_karyawan
      const formData = new FormData()
      formData.append('data', JSON.stringify(this.form))
      formData.append('lampiran', this.lampiran)
      this.$axios.post('/tugas_kepalabiro/create', formData)
        .finally(() => this.$hide())
        .then(res => {
          if (this.$parseResponse(res.data)) {
            this.$router.back()
          }
        })
    },
    getKepalaBiro () {
      this.$axios.get('jabatan_karyawan/get-kepala-biro')
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.listKepalaBiro = res.data.data
          }
        })
    },
    getId_jabatan_pimpinan_unit () {
      this.$axios.get(`karyawan/get-jabatan/by-level/${this.$getProfile().id_karyawan}`)
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            const data = res.data.data
            this.listId_jabatan_pimpinan_unit = data
            if (data.length > 0) {
              this.id_jabatan_pimpinan_unit = data[0]
            }
          }
        })
    }
  }
}
</script>
