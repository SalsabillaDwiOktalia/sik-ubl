<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Input Karyawan
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'inputKaryawanAdmin'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input label="Nama Karyawan" v-model="form.nama_karyawan" />
          <q-select
            label="Status"
            v-model="status"
            :options="listStatus"
            option-value="id_status"
            option-label="nama_status"
          />
          <q-input label="NIDN" v-model="form.nidn" />
          <q-input label="Tanggal Lahir" v-model="form.tanggal_lahir" @click="$refs.tanggalLahir.show()" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" ref="tanggalLahir" transition-hide="scale">
                  <q-date v-model="form.tanggal_lahir" @click="$refs.tanggalLahir.hide()">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input label="Tanggal Masuk Kerja" v-model="form.tanggal_masuk_kerja" @click="$refs.tanggalMasukKerja.show()" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" ref="tanggalMasukKerja" transition-hide="scale">
                  <q-date v-model="form.tanggal_masuk_kerja" @click="$refs.tanggalMasukKerja.hide()">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
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
        nama_karyawan: null,
        status: null,
        nidn: null,
        tanggal_lahir: null,
        tanggal_masuk_kerja: null

      },
      status: null,
      listStatus: []
    }
  },
  created () {
    this.getStatus()
  },
  methods: {
    onSubmit () {
      this.$showLoading()
      this.form.status = this.status.id_status
      this.$axios.post('/karyawan/create', this.form)
        .finally(() => this.$hide())
        .then(res => {
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
