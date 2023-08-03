<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        flat
        bordered
        title="BKD Dosen"
        :rows="rows"
        :columns="columns"
        :loading="loading"
        row-key="name"
      >
      <template v-slot:top-right>
          <!-- <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input> -->
          <div style="min-width: 200px;">
            <q-select
              label="Pilih Tahun Ajaran"
              class="full-width"
              v-model="tahunAjaran"
              :options="[]"
            />
          </div>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="nama_karyawan" :props="props">
              {{ props.row.karyawan.nama_karyawan }}
            </q-td>
            <q-td key="nilai_pendidikan" :props="props">
              {{ props.row.nilai_pendidikan ? Number(props.row.nilai_pendidikan).toFixed(2) : 0 }}%
            </q-td>
            <q-td key="nilai_penelitian" :props="props">
              {{ props.row.nilai_penelitian ?? '-' }}
            </q-td>
            <q-td key="nilai_pengabdian" :props="props">
              {{ props.row.nilai_pengabdian ?? '-' }}
            </q-td>
            <q-td key="nilai_penunjang" :props="props">
              {{ props.row.nilai_penunjang ?? '-' }}
            </q-td>
            <q-td key="sudahDinilai" :props="props">
              {{ props.row.sudahDinilai ? 'Sudah Dinilai' : 'Belum Dinilai' }}
            </q-td>
            <q-td key="keterangan" :props="props">
              {{ props.row.keterangan ?? '-' }}
            </q-td>
            <q-td key="aksi" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <!-- <q-btn @click="selesai(props.row.id_tugas, 4, 'meninjau tugas')" label="Tinjau Tugas" :disable="props.row.status !== 3" icon="close" outline color="negative"/>
                <q-btn label="Revisi" :disable="props.row.status !== 4" icon="close" outline color="negative" :to="{name: 'tugasRevisiPimpinan', params:{id:props.row.id_tugas}}" />
                <q-btn label="Selesai" @click="selesai(props.row.id_tugas,  5, '')" :disable="props.row.status !== 4" icon="done" outline color="positive"/> -->
                <q-btn label="Nilai" :to="{name: 'nilaiBKDPenilai', params: {id: props.row.id_jawaban_dosen}}" unelevated icon="info" color="primary" />
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
        { name: 'nama_karyawan', align: 'left', label: 'Nama Dosen', field: 'nama_karyawan' },
        { name: 'nilai_pendidikan', align: 'left', label: 'Nilai Pendidikan', field: 'nilai_pendidikan' },
        { name: 'nilai_penelitian', align: 'left', label: 'Nilai Penelitian', field: 'nilai_penelitian' },
        { name: 'nilai_pengabdian', align: 'left', label: 'Nilai Pengabdian', field: 'nilai_pengabdian' },
        { name: 'nilai_penunjang', align: 'left', label: 'Nilai Penunjang', field: 'nilai_penunjang' },
        { name: 'sudahDinilai', align: 'left', label: 'Sudah Dinilai', field: 'sudahDinilai' },
        { name: 'keterangan', align: 'left', label: 'Keterangan', field: 'keterangan' },
        { name: 'aksi', align: 'left', label: 'Aksi', field: 'aksi' }
      ],
      rows: [],
      filter: null,
      tahunAjaran: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.loading = true
      this.$axios.get('/bkd/jawaban/')
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.rows = res.data.data
            this.loading = false
          }
        })
    }
    // selesai (id, status, msg) {
    //   this.$q.dialog({
    //     title: 'Confirm',
    //     message: `Apakah anda yakin ${msg}?`,
    //     cancel: true,
    //     persistent: true
    //   }).onOk(() => {
    //     this.$showLoading()
    //     const formData = new FormData()
    //     formData.append('data', JSON.stringify({
    //       status,
    //       ket_revisi: null
    //     }))
    //     this.$axios.put(`tugas_pimpinanunit/update/status/${id}`, formData)
    //       .finally(() => this.$hide())
    //       .then(res => {
    //         if (this.$parseResponse(res.data)) {
    //           this.getData()
    //         }
    //       })
    //   })
    // }
  }
}
</script>
