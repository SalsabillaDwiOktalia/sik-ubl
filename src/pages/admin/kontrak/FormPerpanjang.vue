<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Perpanjang Kontrak
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'kontrakAdmin'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input label="Nomor SK" v-model="form.no_sk" />
          <q-input label="Tanggal Kontrak" v-model="form.tgl_kontrak" @click="$refs.tglkontrak.show()" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" ref="tglkontrak" transition-hide="scale">
                  <q-date v-model="form.tgl_kontrak" @update:model-value="$refs.tglkontrak.hide();hitungHabis()">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input label="Habis Kontrak" readonly v-model="form.tgl_habis_kontrak"/>
          <q-btn label="Submit Data" color="primary" unelevated type="submit" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
/* eslint-disable */
const model = () => {
  return {
    id_karyawan: null,
    id_kontrak: null,
    no_sk: null,
    tgl_kontrak: null,
    tgl_habis_kontrak: null
  }
}
export default {
  data () {
    return {
      form: model(),
      status: null,
      listStatus: [],
      listKategori: [],
      kategori: null
    }
  },
  methods: {
    history () {
      // this.$showLoading()
      this.form.id_karyawan = this.$route.params.id
      this.form.id_kontrak = this.$route.params.id_kontrak

      this.$axios.post('/kontrak/history', this.form)
        .finally(() => this.$hide())
        .then(res => {
          console.log("Berhasil")
          // if (this.$parseResponse(res.data)) {
          //   this.$router.back()
          // }
        })
    },
    onSubmit () {
      this.$showLoading()
      this.form.id_karyawan = this.$route.params.id
      this.form.id_kontrak = this.$route.params.id_kontrak

      this.$axios.post('/kontrak/perpanjang', this.form)
        .finally(() => this.$hide())
        .then(res => {
          if (this.$parseResponse(res.data)) {
            this.history()
            this.$router.back()
          }
        })
    },
    hitungHabis () {
      const tgl = new Date(this.form.tgl_kontrak)
      this.form.tgl_habis_kontrak = `${tgl.getFullYear() + 2}/${tgl.getMonth() + 1}/${tgl.getDate()}`
    }
  }
}
</script>
