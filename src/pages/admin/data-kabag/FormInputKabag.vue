<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Input Kabag
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'datakabagAdmin'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input label="Nama Kepala Bagian" v-model="form.namakepalabagian" />
          <q-input label="NIDN" v-model="form.nidn" />
          <q-input label="Biro" v-model="form.biro" />
          <q-input label="Alamat" v-model="form.alamat" />
          <q-input label="No HP" v-model="form.nohp" />
          <q-btn label="Submit Kabag" color="primary" unelevated type="submit" />
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
        namakepalabagian: null,
        nidn: null,
        biro: null,
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
