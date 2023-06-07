<template>
  <q-page>
    <div class="q-pa-md">
      ini punya kepala biro
      <q-table
        flat bordered
        title="Tugas"
        :rows="rows"
        :columns="columns"
        :loading="loading"
        row-key="name"
      >
      <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="nama_karyawan" :props="props">
              {{ props.row.pimpinanUnit }}
            </q-td>
            <q-td key="judul_tugas" :props="props">
              {{ props.row.judul_tugas }}
            </q-td>
            <q-td key="deskripsi_tugas" :props="props">
              {{ props.row.deskripsi_tugas }}
            </q-td>
            <q-td key="ket_revisi" :props="props">
              {{ props.row.ket_revisi ?? '-' }}
            </q-td>
            <q-td key="nama_unit_kerja" :props="props">
              {{ props.row.nama_unit_kerja }}
            </q-td>
            <q-td key="deadline" :props="props">
              {{ props.row.deadline }}
            </q-td>
            <q-td key="lampiran" :props="props">
              <div class="row q-gutter-x-xs">
                <q-btn label="Lampiran" color="primary" unelevated outline :href="`${$baseLampiran}${props.row.lampiran}`" type="a" target="_blank" />
              </div>
            </q-td>
            <q-td key="status" :props="props">
              <q-badge :color="statusTugas[props.row.status].color" class="q-pa-xs">
                {{ statusTugas[props.row.status].label }}
              </q-badge>
            </q-td>
            <q-td key="aksi" :props="props">
              <div class="row q-gutter-x-md">
                <q-btn label="Kerjakan" :disable="!(props.row.status === 1 || props.row.status === 4)" unelevated icon="library_books" color="green" :to="{name:'kerjakanKepalaBiro', params:{id:props.row.id_tugas}}"/>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>
<script>
import statusTugas from 'src/helper/ListStatusTugasPimpinanUnit'
export default {
  data () {
    return {
      statusTugas,
      loading: false,
      columns: [
        { name: 'nama_karyawan', align: 'left', label: 'Tugas Dari', field: 'nama_karyawan ' },
        { name: 'judul_tugas', align: 'left', label: 'Judul Tugas', field: 'judul_tugas' },
        { name: 'deskripsi_tugas', align: 'left', label: 'Deskripsi', field: 'deskripsi_tugas' },
        { name: 'ket_revisi', align: 'left', label: 'Keterangan Revisi', field: 'ket_revisi' },
        { name: 'nama_unit_kerja', align: 'left', label: 'Unit Kerja', field: 'nama_unit_kerja' },
        { name: 'deadline', align: 'left', label: 'Deadline', field: 'deadline' },
        { name: 'lampiran', align: 'left', label: 'Lampiran', field: 'lampiran' },
        { name: 'status', align: 'left', label: 'Status', field: 'status' },
        { name: 'aksi', align: 'left', label: 'Aksi', field: 'aksi' }
      ],
      rows: [],
      filter: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.loading = true
      this.$axios.get(`/tugas_pimpinanunit/get/tugas-kepala-biro/${this.$getProfile().id_karyawan}`)
        .finally(() => { this.loading = false })
        .then(res => {
          // console.log(res)
          if (this.$parseResponse(res.data, false)) {
            this.rows = res.data.data
            this.loading = false
          }
        })
    }
  }
}
</script>
