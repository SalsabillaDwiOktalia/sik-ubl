<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Input Karyawan
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'jabatanAdmin'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input label="Kode Jabatan" v-model="form.kode_jabatan" />
          <q-input label="Nama Jabatan" v-model="form.nama_jabatan" />
          <q-input label="Tunjangan Jabatan" v-model="form.tunjangan_jabatan" />
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
        tunjangan_jabatan: null,
        keterangan: null

      }
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('/jabatan/create', this.form)
        .then(res => {
          if (this.$parseResponse(res.data)) {
            this.$router.back()
          }
        })
    }
  }
}
</script>
