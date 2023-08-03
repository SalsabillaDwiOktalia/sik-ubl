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
        title="Pilih Tahun Ajaran"
        icon="settings"
        :done="step > 1"
        label="priode"
      >
        <q-form ref="step1Form">
          <q-select
            v-model="tahunAjaran"
            :options="listTahunAjaran"
            option-label="label"
            option-value="id_master_tahun_ajaran"
            label="Pilih Tahun Ajaran"
          />
        </q-form>

        <q-stepper-navigation>
          <q-btn @click="validateStep('step1Form', 2)" color="primary" label="Continue" />
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
            :columns="columnPendidikan"
            class="my-table"
          >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="kegiatan" :props="props">
                  {{ props.row.kegiatan }}
                </q-td>
                <q-td key="buktiKegiatan" :props="props">
                  {{ props.row.buktiKegiatan }}
                </q-td>
                <q-td key="batasMaksimal" :props="props">
                  {{ props.row.batasMaksimal }}
                </q-td>
                <q-td key="sks" :props="props">
                  {{ props.row.sks }}
                </q-td>
                <q-td key="lampiran" :props="props">
                  <q-file outlined v-model="props.row.lampiran" v-if="props.row.adaLampiran">
                    <template v-slot:prepend>
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </q-form>

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" />
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
        <q-table
          flat
          title="Kegiatan"
          :rows="penelitian"
          :columns="columnPendidikan"
          class="my-table"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="kegiatan" :props="props">
                {{ props.row.kegiatan }}
              </q-td>
              <q-td key="buktiKegiatan" :props="props">
                {{ props.row.buktiKegiatan }}
              </q-td>
              <q-td key="batasMaksimal" :props="props">
                {{ props.row.batasMaksimal }}
              </q-td>
              <q-td key="sks" :props="props">
                {{ props.row.sks }}
              </q-td>
              <q-td key="lampiran" :props="props">
                <q-file outlined v-model="props.row.lampiran" v-if="props.row.adaLampiran">
                  <template v-slot:prepend>
                    <q-icon name="attach_file" />
                  </template>
                </q-file>
              </q-td>
            </q-tr>
          </template>
        </q-table>

        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" label="Continue" />
          <q-btn flat @click="step -= 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>

      </q-step>

      <q-step
        :name="4"
        title="Pengabdian"
        icon="add_comment"
        :done="step > 3"
      >

        <q-stepper-navigation>
          <q-btn color="primary" label="Continue"  @click="step += 1"/>
          <q-btn flat @click="step -= 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="5"
        title="Penjunjang"
        icon="add_comment"
        :done="step > 4"
      >
        Penunjang
        <q-stepper-navigation>
          <q-btn color="primary" label="Continue" @click="step += 1"/>
          <q-btn flat @click="step -= 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="6"
        title="Last Step"
        icon="add_comment"
        :done="step > 5"
      >
        Pastikan data yang anda masukan benar .........
        <q-stepper-navigation>
          <q-btn color="primary" label="Finish" @click="onSubmit"/>
          <q-btn flat @click="step -= 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-page>
</template>
<script>
import * as BKD from './BKD'
export default {
  data () {
    return {
      tahunAjaran: null,
      listTahunAjaran: [],
      BKD,
      step: 1,
      columnPendidikan: [
        { name: 'kegiatan', align: 'left', label: 'Kegiatan', field: 'kegiatan ' },
        { name: 'buktiKegiatan', align: 'left', label: 'Bukti Kegiatan', field: 'buktiKegiatan ' },
        { name: 'batasMaksimal', align: 'left', label: 'Batas Maksimal', field: 'batasMaksimal ' },
        { name: 'sks', align: 'left', label: 'sks', field: 'sks ' },
        { name: 'lampiran', align: 'left', label: 'lampiran', field: 'lampiran ' }
      ],
      pendidikan: [],
      penelitian: []
    }
  },
  created () {
    this.getTahunAjaran()
    this.getData()
  },
  methods: {
    onSubmit () {
      const allData = {
        jawaban: {
          id_karyawan: Number(this.$getProfile().karyawan.id_karyawan),
          id_master_tahun_ajaran: this.tahunAjaran.id_master_tahun_ajaran
        },
        detail: [
          ...this.pendidikan,
          ...this.penelitian
        ].map(r => {
          return {
            id: r.id,
            lampiran: r.lampiran
          }
        })
      }
      const formData = new FormData()
      for (const data of allData.detail) {
        if (data.lampiran) {
          formData.append(`${data.id}`, data.lampiran)
        }
      }
      formData.append('data', JSON.stringify(allData))
      this.$axios.post('bkd', formData)
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
      this.$axios.get('bkd')
        .then(res => {
          const data = res.data.data
          this.pendidikan = data.pendidikan.map(r => {
            return {
              ...r,
              lampiran: null
            }
          })

          this.penelitian = data.penelitian.map(r => {
            return {
              ...r,
              lampiran: null
            }
          })
        })
    },
    getTahunAjaran () {
      this.$axios.get('tahun-ajaran')
        .then(res => {
          this.listTahunAjaran = res.data.data
          this.tahunAjaran = this.listTahunAjaran.find(r => Number(r.status_ajaran) === 1)
        })
    }
  }
}
</script>
