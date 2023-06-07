<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Input Karyawan
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'inputJabatanAdmin'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input label="Kode Jabatan" disable v-model="form.kode_jabatan" />
          <q-input label="Nama Jabatan" v-model="form.nama_jabatan" />
          <q-input label="Keterangan" v-model="form.keterangan" />
          <q-btn label="Submit Karyawan" color="primary" unelevated type="submit" />
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
        kode_jabatan: null,
        nama_jabatan: null,
        keterangan: null

      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get(`jabatan/get/${this.$route.params.kode}`)
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.form = res.data.data
          }
        })
    },
    onSubmit () {
      this.$axios.put(`jabatan/update/${this.$route.params.kode}`, {
        nama_jabatan: this.form.nama_jabatan,
        keterangan: this.form.keterangan
      }).then(res => {
        if (this.$parseResponse(res.data)) {
          this.$router.back()
        }
      })
    }
  }
}
</script>
