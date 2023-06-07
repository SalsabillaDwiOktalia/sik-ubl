<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Input Karyawan
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'dataKontrakAdmin'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input label="Nama Karyawan" v-model="form.nama" />
          <q-input label="Tanggal Lahir" v-model="form.tgllahir" />
          <q-input label="Jenis Kelamin" v-model="form.gender" />
          <q-input label="Alamat" v-model="form.alamat" />
          <q-input label="NIK" v-model="form.nik" />
          <q-input label="No. Tlpn" v-model="form.notlp" />
          <q-input label="Pendidikan Terakhir" v-model="form.pendidikanterakhir" />
          <q-input label="Tanggal Masuk Kerja" v-model="form.tglmasukkerja" />
          <q-input label="Kontrak Kerja" v-model="form.kontrakkerja" />
          <q-input label="Divisi Kerja" v-model="form.divisi" />
          <q-input label="Gaji" v-model="form.gaji" />
          <q-input label="Keterangan" v-model="form.keterangan" />
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
        tgllahir: null,
        gender: null,
        alamat: null,
        nik: null,
        notlp: null,
        pendidikanterakhir: null,
        tglmasukkerja: null,
        kontrakkerja: null,
        divisi: null,
        gaji: null,
        keterangan: null
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
