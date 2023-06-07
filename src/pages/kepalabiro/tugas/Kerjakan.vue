<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        kerjakan Tugas
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'tugasDariPimpinan'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
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
        status: 2,
        ket_revisi: null
      },
      lampiran: null
    }
  },
  methods: {
    onSubmit () {
      this.$showLoading()
      const formData = new FormData()
      formData.append('hasil_tugas', this.lampiran)
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
