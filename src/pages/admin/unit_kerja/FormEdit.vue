<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Input Unit Kerja
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'inputUnitKerjaAdmin'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input label="ID Unit Kerja" disable v-model="form.id_unit_kerja" />
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
        id_unit_kerja: null,
        nama_unit_kerja: null,
        keterangan: null

      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get(`unit_kerja/get/${this.$route.params.id}`)
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.form = res.data.data
          }
        })
    },
    onSubmit () {
      this.$axios.put(`unit_kerja/update/${this.$route.params.id}`, {
        nama_unit_kerja: this.form.nama_unit_kerja,
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
