<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Input Penilaian Karyawan
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'inputPenilaian'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <div class="text-h6">Kemampuan Kepemimpinan</div>
          <div>Kemampuan dalam mempengaruhi, memotivasi dan mengarahkan ornag lain untuk mencapai tujuan bersama</div>
          <div class="q-gutter-sm">
            <q-radio v-model="form.kepemimpinan" val="Kurang" label="Kurang" />
            <q-radio v-model="form.kepemimpinan" val="Cukup" label="Cukup" />
            <q-radio v-model="form.kepemimpinan" val="Baik" label="Baik" />
            <q-radio v-model="form.kepemimpinan" val="Baik Sekali" label="Baik Sekali" />
          </div>
          <div class="text-h6">Keterampilan Komunikasi</div>
          <div>Kemampuan dalam berkomunikasi baik secara verbal maupun non verbal </div>
          <div class="q-gutter-sm">
            <q-radio v-model="form.komunikasi" val="Kurang" label="Kurang" />
            <q-radio v-model="form.komunikasi" val="Cukup" label="Cukup" />
            <q-radio v-model="form.komunikasi" val="Baik" label="Baik" />
            <q-radio v-model="form.komunikasi" val="Baik Sekali" label="Baik Sekali" />
          </div>
          <div class="text-h6">Kemandirian</div>
          <div>Kemampuan dalam berkerja secara mandiri</div>
          <div class="q-gutter-sm">
            <q-radio v-model="form.kemandirian" val="Kurang" label="Kurang" />
            <q-radio v-model="form.kemandirian" val="Cukup" label="Cukup" />
            <q-radio v-model="form.kemandirian" val="Baik" label="Baik" />
            <q-radio v-model="form.kemandirian" val="Baik Sekali" label="Baik Sekali" />
          </div>
          <div class="text-h6">Kehadiran</div>
          <div>Tingkat kehadiran</div>
          <div class="q-gutter-sm">
            <q-radio v-model="form.kehadiran" val="Kurang" label="Kurang" />
            <q-radio v-model="form.kehadiran" val="Cukup" label="Cukup" />
            <q-radio v-model="form.kehadiran" val="Baik" label="Baik" />
            <q-radio v-model="form.kehadiran" val="Baik Sekali" label="Baik Sekali" />
          </div>
          <q-btn label="Submit Penilaian" color="primary" unelevated type="submit" />
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
