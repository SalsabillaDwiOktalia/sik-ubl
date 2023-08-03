<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        Tambah Tugas
      </q-card-section>
      <q-btn class="q-ml-md" icon="arrow_back" unelevated color="primary" :to="{name: 'dashboardKepalaBiro'}"/>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-select
            label="Jabatan Pemberi Tugas"
            v-model="kepalaBiro"
            :options="listKepalaBiro"
            option-value="kode_jabatan"
            :option-label="r => `${r.nama_jabatan} (${r.keterangan})`"
          />
          <q-select
            label="Ditujukan Ke"
            v-model="karyawan"
            :options="listKaryawan"
            option-value="kode_jabatan"
            :option-label="r => `${r.karyawan.nama_karyawan}`"
          />
          <q-input label="Judul Tugas" v-model="form.judul_tugas" />
          <q-input label="Deskripsi Tugas" v-model="form.deskripsi_tugas" />
          <q-input label="Deadline" v-model="form.deadline" @click="$refs.deadline.show()" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" ref="deadline" transition-hide="scale">
                  <q-date v-model="form.deadline" @update:model-value="$refs.deadline.hide()">
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
/* eslint-disable */
import { defineComponent, ref } from 'vue'
export default {
  data () {
    return {
      form: {
        judul_tugas: null,
        id_kepala_biro: null,
        id_karyawan: null,
        deadline: null
      },
      id_jabatan_ : null,
      lampiran: null,
      listJabatanKaryawan: null,
      id_tugas: null,
      listKepalaBiro: [],
      listKaryawan: [],
      kepalaBiro: null,
      karyawan: null
    }
  },
  async created () {
    await this.getKepalaBiro()
    // this.getId_jabatan_pimpinan_unit()
    await this.getNama()
  },
  methods: {
    onSubmit () {
      this.$showLoading()
      this.form.id_kepala_biro = this.kepalaBiro.id_jabatan_karyawan
      this.form.id_karyawan = this.karyawan.id_jabatan_karyawan
      console.log(this.form)
      // const formData = new FormData()
      // formData.append('data', JSON.stringify(this.form))
      // formData.append('lampiran', this.lampiran)
      // this.$axios.post('kepala-biro/create', formData)
      //   .finally(() => this.$hide())
      //   .then(res => {
      //     if (this.$parseResponse(res.data)) {
      //       this.$router.back()
      //     }
      //   })
    },
    async getKepalaBiro () {
      await this.$axios.get('jabatan_karyawan/get-kepala-biro')
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.listKepalaBiro = res.data.data
            this.kepalaBiro = res.data.data[0]
          }
        })
    },
    async getNama () {
      await this.$axios.get(`kepala-biro/get-by-unit-kerja/${this.kepalaBiro.id_unit_kerja}`)
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.listKaryawan = res.data.data
          }
        })
    }
    // getId_jabatan_pimpinan_unit () {
    //   this.$axios.get(`karyawan/get-jabatan/by-level/${this.$getProfile().id_karyawan}`)
    //     .then(res => {
    //       if (this.$parseResponse(res.data, false)) {
    //         const data = res.data.data
    //         this.listId_jabatan_pimpinan_unit = data
    //         if (data.length > 0) {
    //           this.id_jabatan_pimpinan_unit = data[0]
    //         }
    //       }
    //     })
    // }
  }
}
</script>
