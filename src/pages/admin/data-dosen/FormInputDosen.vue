<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Input Karyawan
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'dataDosenAdmin'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input label="Nama Dosen" v-model="form.namadosen" />
          <q-input label="NIDN" v-model="form.nidn" />
          <q-input label="Fakultas" v-model="form.fakultas" />
          <q-input label="Alamat" v-model="form.alamat" />
          <q-input label="No HP" v-model="form.nohp" />
          <q-btn label="Submit Dosen" color="primary" unelevated type="submit" />
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
        namadosen: null,
        nidn: null,
        fakultas: null,
        alamat: null,
        nohp: null
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
