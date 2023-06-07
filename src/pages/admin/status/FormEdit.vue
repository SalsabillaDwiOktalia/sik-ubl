<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Input Karyawan
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'inputStatusAdmin'}"/>
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

      },
      status: null,
      listStatus: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get(`status/get/${this.$route.params.id}`)
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.form = res.data.data
          }
        })
    },
    onSubmit () {
      this.$axios.put(`status/update/${this.$route.params.id}`, {
        gaji_pokok: Number(this.form.gaji_pokok),
        keterangan: this.form.keterangan
      }).then(res => {
        if (this.$parseResponse(res.data)) {
          this.$router.back()
        }
      })
    },
    getStatus () {
      this.$axios.get('/status/getall')
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.listStatus = res.data.data
          }
        })
    }
  }
}
</script>
