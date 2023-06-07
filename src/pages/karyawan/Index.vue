<template>
  <q-page padding>
    index all karyawan
    <div class="row q-col-gutter-x-md">
      <div class="col-md-4 col-sm-6 col-xs-12" v-for="(j, i) in jabatans" :key="i">
        <q-card flat>
          <q-card-section>
            <div class="text-h6 q-mb-md">{{ j.jabatan.nama_jabatan }}</div>
            <div class="q-mb-md">{{ j.jabatan.keterangan }}</div>
            <q-btn :to="{name: j.jabatan.route_name}" label="Lihat Menu" unelevated class="full-width" color="primary"/>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      jabatans: []
    }
  },
  created () {
    this.getjabatan()
  },
  methods: {
    getjabatan () {
      this.$axios.get(`karyawan/get-jabatan/${this.$getProfile().id_karyawan}`)
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.jabatans = res.data.data.jabatan_karyawan
          }
        })
    }
  }
}
</script>
