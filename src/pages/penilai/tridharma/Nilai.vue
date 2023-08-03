<template>
  <q-page padding>
    <q-stepper
      v-model="step"
      vertical
      color="primary"
      flat
      animated
    >
      <q-step
        :name="1"
        title="Data Dosen"
        icon="settings"
        :done="step > 1"
        label="priode"
      >
        <div v-if="dataJawaban">
          <div class="row">
            <div class="col-12">Nama</div>
            <div class="col-12 text-bold text-h6">{{ dataJawaban.karyawan.nama_karyawan }}</div>
          </div>
        </div>
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Pelaksanaan Pendidikan"
        icon="create_new_folder"
        :done="step > 2"
      >
        <q-form @submit="onSubmit" ref="step2Form">
          <q-table
            flat
            title="Kegiatan"
            :rows="pendidikan"
            :columns="column"
            class="my-table"
          >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="kegiatan" :props="props">
                  {{ props.row.masterbkd.kegiatan }}
                </q-td>
                <q-td key="buktiKegiatan" :props="props">
                  {{ props.row.buktiKegiatan }}
                </q-td>
                <q-td key="batasMaksimal" :props="props">
                  {{ props.row.batasMaksimal }}
                </q-td>
                <q-td key="sks" :props="props">
                  {{ props.row.masterbkd.sks }}
                </q-td>
                <q-td key="lampiran" :props="props">
                  <q-btn flat :disable="!props.row.lampiran" label="Lihat File" type="a" target="_blank" :href="`${$baseURL}bkd/${props.row.lampiran}`"/>
                </q-td>
                <q-td key="terima" :props="props">
                  <q-checkbox v-model="props.row.verified" :label="props.row.verified ? 'Diterima' : 'Ditolak'" />
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </q-form>

        <q-stepper-navigation>
          <q-btn @click="step += 1" color="primary" label="Continue" />
          <!-- <q-btn @click="step = 4" color="primary" label="Continue" /> -->
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="penelitian"
        icon="assignment"
        :done="step > 2"
      >
      <q-form @submit="onSubmit" ref="step2Form">
          <q-table
            flat
            title="Kegiatan"
            :rows="penelitian"
            :columns="column"
            class="my-table"
          >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="kegiatan" :props="props">
                  {{ props.row.masterbkd.kegiatan }}
                </q-td>
                <q-td key="buktiKegiatan" :props="props">
                  {{ props.row.buktiKegiatan }}
                </q-td>
                <q-td key="batasMaksimal" :props="props">
                  {{ props.row.batasMaksimal }}
                </q-td>
                <q-td key="sks" :props="props">
                  {{ props.row.masterbkd.sks }}
                </q-td>
                <q-td key="lampiran" :props="props">
                  <q-btn flat :disable="!props.row.lampiran" label="Lihat File" type="a" target="_blank" :href="`${$baseURL}bkd/${props.row.lampiran}`"/>
                </q-td>
                <q-td key="terima" :props="props">
                  <q-checkbox v-model="props.row.verified" :label="props.row.verified ? 'Diterima' : 'Ditolak'" />
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </q-form>

        <q-stepper-navigation>
          <q-btn @click="step += 1" color="primary" label="Continue" />
          <q-btn flat @click="step -= 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="4"
        title="Pengabdian"
        icon="add_comment"
      >
        pengabdian

        <q-stepper-navigation>
          <q-btn @click="step += 1" color="primary" label="Continue" />
          <q-btn flat @click="step -= 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="5"
        title="Create an ad"
        icon="add_comment"
      >
        Penunjang

        <q-stepper-navigation>
          <q-btn @click="onSubmit" color="primary" label="Finish" />
          <q-btn flat @click="step -= 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      step: 2,
      column: [
        { name: 'kegiatan', align: 'left', label: 'Kegiatan', field: 'kegiatan ' },
        { name: 'buktiKegiatan', align: 'left', label: 'Bukti Kegiatan', field: 'buktiKegiatan ' },
        { name: 'batasMaksimal', align: 'left', label: 'Batas Maksimal', field: 'batasMaksimal ' },
        { name: 'sks', align: 'left', label: 'sks', field: 'sks ' },
        { name: 'lampiran', align: 'left', label: 'Lampiran', field: 'lampiran ' },
        { name: 'terima', align: 'left', label: 'Terima', field: 'terima ' }
      ],
      pendidikan: [],
      penelitian: [],
      dataJawaban: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    onSubmit () {
      this.$axios.post(`bkd/nilai/${this.$route.params.id}`, {
        pendidikan: this.pendidikan

      })
        .then(res => {
          this.$parseResponse(res.data)
        })
    },
    validateStep (formRef, nextStep) {
      if (this.$refs[formRef].validate()) {
        this.step = nextStep
      }
    },
    getData () {
      this.$axios.get(`bkd/jawaban/${this.$route.params.id}`)
        .then(res => {
          const data = res.data.data
          this.dataJawaban = data.jawaban
          this.pendidikan = data.pendidikan.map(r => {
            return {
              ...r,
              verified: Boolean(r.verified)
            }
          })

          this.penelitian = data.penelitian.map(r => {
            return {
              ...r,
              verified: Boolean(r.verified)
            }
          })
        })
    }
  }
}
</script>
