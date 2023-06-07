<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Input Pimpinan Unit
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'dataPimpinanAdmin'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input label="Nama Pimpinan" v-model="form.namapimpinan" />
          <q-input label="NIDN" v-model="form.nidn" />
          <q-input label="jabatan" v-model="form.jabatan" />
          <q-input label="Alamat" v-model="form.alamat" />
          <q-input label="No HP" v-model="form.nohp" />
          <q-btn label="Submit Pimpinan" color="primary" unelevated type="submit" />
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
        namapimpinan: null,
        nidn: null,
        jabatan: null,
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
