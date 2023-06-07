<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Input Unit Kerja
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'inputUnitKerjaAdmin'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input label="Nama Unit Kerja" v-model="form.nama_unit_kerja" />
          <q-input label="Keterangan" v-model="form.keterangan" />
          <q-btn label="Submit Unit Kerja" color="primary" unelevated type="submit" />
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
        nama_unit_kerja: null,
        keterangan: null

      }
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('/unit_kerja/create', this.form)
        .then(res => {
          if (this.$parseResponse(res.data)) {
            this.$router.back()
          }
        })
    }
  }
}
</script>
