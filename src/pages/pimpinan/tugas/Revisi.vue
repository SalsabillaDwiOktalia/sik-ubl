<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        kerjakan Tugas
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'tugasDariPimpinan'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input label="Keterangan Revisi" v-model="form.ket_revisi" />
          <q-btn label="Submit" color="primary" unelevated type="submit" />
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
        status: 4,
        ket_revisi: null
      }
    }
  },
  methods: {
    onSubmit () {
      this.$showLoading()
      const formData = new FormData()
      formData.append('data', JSON.stringify(this.form))
      this.$axios.put(`tugas_pimpinanunit/update/status/${this.$route.params.id}`, formData)
        .finally(() => this.$hide())
        .then(res => {
          if (this.$parseResponse(res.data)) {
            this.$router.back()
          }
        })
    }
  }
}
</script>
