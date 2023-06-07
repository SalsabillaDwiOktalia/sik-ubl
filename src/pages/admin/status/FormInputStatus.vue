<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Input Pimpinan Unit
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'statusAdmin'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input label="Nama Status" v-model="form.nama_status" />
          <q-input label="Gaji Pokok" v-model="form.gaji_pokok" />
          <q-input label="Keterangan" v-model="form.keterangan" />
          <q-btn label="Submit Status" color="primary" unelevated type="submit" />
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
        nama_status: null,
        gaji_pokok: null,
        keterangan: null

      }
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('/status/create', this.form)
        .then(res => {
          if (this.$parseResponse(res.data)) {
            this.$router.back()
          }
        })
    }
  }
}
</script>
