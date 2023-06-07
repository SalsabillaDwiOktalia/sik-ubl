<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Tambah Tugas
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'inputJabatanAdmin'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-select
            label="Jabatan Pemberi Tugas"
            v-model="id_jabatan_pimpinan_unit"
            :options="listId_jabatan_pimpinan_unit"
            option-value="kode_jabatan"
            :option-label="r => `${r.nama_jabatan} (${r.keterangan})`"
          />
          <q-select
            label="Ditujukan Ke"
            v-model="kepalaBiro"
            :options="listKepalaBiro"
            option-value="id_jabatan_karyawan"
            :option-label="r => `${r.nama_jabatan} ${r.nama_unit_kerja} (${r.nama_karyawan})`"
          />
          <q-input label="Judul Tugas" v-model="form.judul_tugas" />
          <q-input label="Deskripsi Tugas" v-model="form.deskripsi_tugas" />
          <q-input label="Deadline" v-model="form.deadline" @click="$refs.deadline.show()" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" ref="deadline" transition-hide="scale">
                  <q-date v-model="form.deadline" @click="$refs.deadline.hide()">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
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
        judul_tugas: null,
        id_kepala_biro: null,
        id_jabatan_pimpinan_unit: null,
        deadline: null
      },
      lampiran: null,
      kepalaBiro: null,
      id_jabatan_pimpinan_unit: null,
      listKepalaBiro: [],
      listId_jabatan_pimpinan_unit: []
    }
  },
  created () {
    this.getKepalaBiro()
    this.getId_jabatan_pimpinan_unit()
  },
  methods: {
    onSubmit () {
      this.$showLoading()
      this.form.id_kepala_biro = this.kepalaBiro.id_jabatan_karyawan
      this.form.id_jabatan_pimpinan_unit = this.id_jabatan_pimpinan_unit.id_jabatan_karyawan
      const formData = new FormData()
      formData.append('data', JSON.stringify(this.form))
      formData.append('lampiran', this.lampiran)
      this.$axios.post('/tugas_pimpinanunit/create', formData)
        .finally(() => this.$hide())
        .then(res => {
          if (this.$parseResponse(res.data)) {
            this.$router.back()
          }
        })
    },
    getKepalaBiro () {
      this.$axios.get('jabatan_karyawan/get-kepala-biro')
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.listKepalaBiro = res.data.data
          }
        })
    },
    getId_jabatan_pimpinan_unit () {
      this.$axios.get(`karyawan/get-jabatan/by-level/${this.$getProfile().id_karyawan}`)
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            const data = res.data.data
            this.listId_jabatan_pimpinan_unit = data
            if (data.length > 0) {
              this.id_jabatan_pimpinan_unit = data[0]
            }
          }
        })
    }
  }
}
</script>
