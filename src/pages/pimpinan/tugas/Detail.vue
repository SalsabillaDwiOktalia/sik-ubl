<template>
  <q-page padding>
    <q-card flat v-if="data">
      <q-card-section>
        <div class="text-h5">Detail Tugas</div>
          <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <list-item
                label="Judul Tugas"
                :value="data.judul_tugas"
              />
              <list-item
                label="Deskripsi"
                :value="data.deskripsi_tugas"
              />
              <list-item
                label="Ket.Revisi"
                :value="data.ket_revisi ?? '-'"
              />
              <list-item
                label="Unit Kerja"
                :value="data.jabatan_karyawan_master_tugas_id_kepala_biroTojabatan_karyawan.unit_kerja_jabatan_karyawan_unit_kerjaTounit_kerja.nama_unit_kerja"
              />
            </div>
            <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <list-item
                label="Deadline"
                :value="data.deadline"
              />
              <list-item
                label="Lampiran"
                useSlot
              >
              <template #mySlot>
                <q-btn label="Lampiran" no-caps color="primary" flat outline :href="`${$baseLampiran}${data.lampiran}`" type="a" target="_blank" />
               </template>
              </list-item>

              <list-item
                label="Status"
                useSlot
              >
               <template #mySlot>
                <q-badge :color="statusTugas[data.status].color" class="q-pa-xs">
                  {{ statusTugas[data.status].label }}
                </q-badge>
               </template>
              </list-item>

              <!-- :value="data.file_hasil" -->
              <list-item
                label="Hasil Tugas"
                :useSlot="true"
              >
                <template #mySlot>
                  <q-btn label="Lihat File" no-caps :disable="data.file_hasil === null" color="primary" flat outline :href="`${$baseLampiran}${data.file_hasil}`" type="a" target="_blank" />
                </template>
              </list-item>
            </div>
          </div>
      </q-card-section>
    </q-card>
    <q-table
        class="q-mt-md"
        flat
        bordered
        title="Riwayat Tugas"
        :rows="rows"
        :columns="columns"
        :loading="loading"
        row-key="name"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="status_tugas" :props="props">
              <q-badge :color="statusTugas[props.row.status_tugas].color" class="q-pa-xs">
                {{ statusTugas[props.row.status_tugas].label }}
              </q-badge>
            </q-td>
            <q-td key="hasil_tugas" :props="props">
              <q-btn label="Lihat File" :disable="props.row.hasil_tugas === null" color="primary" unelevated outline :href="`${$baseLampiran}${props.row.hasil_tugas}`" type="a" target="_blank" />
            </q-td>
            <q-td key="keterangan" :props="props">
             {{ props.row.keterangan ?? '-' }}
            </q-td>
            <q-td key="tgl" :props="props">
              {{ $parseDate(props.row.created_at).fullDate }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
  </q-page>
</template>
<script>
import listItem from './ListItem.vue'
import statusTugas from 'src/helper/ListStatusTugasPimpinanUnit'
export default {
  components: {
    listItem
  },
  data () {
    return {
      statusTugas,
      rows: [],
      data: null,
      loading: false,
      columns: [
        { name: 'status_tugas', align: 'left', label: 'Status', field: 'status_tugas' },
        { name: 'hasil_tugas', align: 'left', label: 'Hasil Tugas', field: 'hasil_tugas' },
        { name: 'keterangan', align: 'left', label: 'Keterangan Revisi', field: 'keterangan' },
        { name: 'tgl', align: 'left', label: 'Tanggal', field: 'tgl' }
      ]
    }
  },
  created () {
    this.getdata()
  },
  methods: {
    getdata () {
      this.$axios.get(`tugas_pimpinanunit/detail/${this.$route.params.id}`)
        .then(res => {
          console.log(res)
          if (this.$parseResponse(res.data, false)) {
            this.rows = res.data.data.history_status
            this.data = res.data.data
            this.loading = false
          }
        })
    }
  }
}
</script>
