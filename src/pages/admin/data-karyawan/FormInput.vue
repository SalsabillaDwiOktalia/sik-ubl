<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Input Karyawan
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'dataKaryawanAdmin'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input label="Nama Karyawan" v-model="form.nama" />
          <q-input label="Alamat" v-model="form.alamat" />
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
        nama: null,
        alamat: null
      }
    }
  },
  methods: {
    onSubmit () {
      alert('form telah diinput')
    }
  }
}
</script>
