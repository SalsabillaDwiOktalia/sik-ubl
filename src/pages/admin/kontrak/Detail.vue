<template>
  <q-page padding>
    <q-card flat v-if="data">
      <q-card-section>
        <div class="text-h5">Detail Kontrak</div>
          <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <list-item
                label="no_sk"
                :value="data.no_sk"
              />
              <list-item
                label="tgl_kontrak"
                :value="data.tgl_kontrak"
              />
              <list-item
                label="Ket.Revisi"
                :value="data.ket_revisi ?? '-'"
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
        title="Riwayat Kontrak"
        :rows="rows"
        :columns="columns"
        :loading="loading"
        row-key="name"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="id_karyawan" :props="props">
                {{ props.row.karyawan.nama_karyawan }}
              </q-td>
            <q-td key="status" :props="props">
              <q-badge :color="status[props.row.status].color" class="q-pa-xs">
                {{ status[props.row.status].label }}
              </q-badge>
            </q-td>
            <q-td key="tgl_habis_kontrak" :props="props">
              {{ $parseDate(props.row.created_at).fullDate }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      columns: [
        { name: 'id_kontrak', align: 'left', label: 'ID Kontrak', field: 'id_kontrak' },
        { name: 'id_karyawan', align: 'left', label: 'ID Karyawan', field: 'id_karyawan' },
        { name: 'no_sk', align: 'left', label: 'No. SK', field: 'no_sk' },
        { name: 'tgl_kontrak', align: 'left', label: 'Tanggal Kontrak', field: 'tgl_kontrak' },
        { name: 'tgl_habis_kontrak', align: 'left', label: 'Habis Kontrak', field: 'tgl_habis_kontrak' },
        { name: 'jenis_kontrak', align: 'left', label: 'Jenis Kontrak', field: 'jenis_kontrak' },
        { name: 'status', align: 'left', label: 'Status', field: 'status' },
        { name: 'ket_kontrak', align: 'left', label: 'Keterangan', field: 'ket_kontrak' }
      ],
      rows: [],
      filter: null
    }
  }
}
</script>
