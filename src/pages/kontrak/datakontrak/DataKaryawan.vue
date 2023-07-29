<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        <q-table
          :pagination="pagination"
          flat
          title="Karyawan"
          :rows="rows"
          :columns="columns"
          :loading="loading"
          :filter="filter"
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
              <q-td key="id_karyawan" :props="props">
                {{ props.row.id_karyawan }}
              </q-td>
              <q-td key="nama_karyawan" :props="props">
                {{ props.row.nama_karyawan }}
              </q-td>
              <q-td key="status" :props="props">
                {{ props.row.status_karyawan_statusTostatus.nama_status }}
              </q-td>
              <q-td key="gaji_pokok" :props="props">
                {{ $formatNumber(props.row.gaji_pokok) }}
              </q-td>
              <q-td key="nidn" :props="props">
                {{ props.row.nidn }}
              </q-td>
              <q-td key="nik" :props="props">
                {{ props.row.nik }}
              </q-td>
              <q-td key="jenis_kelamin" :props="props">
                {{ props.row.jenis_kelamin }}
              </q-td>
              <q-td key="agama" :props="props">
                {{ props.row.agama }}
              </q-td>
              <q-td key="alamat" :props="props">
                {{ props.row.alamat }}
              </q-td>
              <q-td key="no_tlpn" :props="props">
                {{ props.row.no_tlpn }}
              </q-td>
              <q-td key="kategori" :props="props">
                {{ props.row.kategori_karyawan.nama_kategori }}
              </q-td>
              <q-td key="tanggal_lahir" :props="props">
                {{ $parseDate(props.row.tanggal_lahir).fullDate }}
              </q-td>
              <q-td key="tanggal_masuk_kerja" :props="props">
                {{ $parseDate(props.row.tanggal_masuk_kerja).fullDate }}
              </q-td>
              <q-td key="tgl_pensiun" :props="props">
                {{ $parseDate(props.row.tgl_pensiun).fullDate }}
              </q-td>
              <q-td key="status" :props="props">
                <div v-if="props.row.kontrak.length === 0">
                  <q-badge color="positive">
                    Inputan Baru
                  </q-badge>
                </div>
                <div v-else>
                  <q-badge color="positive" v-if="props.row.kontrak[0].jenis_kontrak === 1">
                    Kontrak Baru
                  </q-badge>
                  <q-badge color="positive" v-else-if="props.row.kontrak[0].jenis_kontrak === 2">
                    Kontrak Perpanjang
                  </q-badge>
                  <q-badge color="negative" v-else-if="props.row.kontrak[0].jenis_kontrak === 3">
                    Kontrak Pensiun
                  </q-badge>
                </div>
              </q-td>
              <q-td key="kontrak" :props="props">
                <div class="justify-center q-gutter-x-xs">
                  <q-btn :to="{name: 'inputKontrak', params: {id_karyawan: props.row.id_karyawan}}" color="primary" :disable="props.row.kontrak.length > 0" label="Tambah Kontrak" unelevated outline dense />
                </div>
              </q-td>
              <q-td key="jabatan" :props="props">
                <div class="justify-center q-gutter-x-xs">
                  <q-btn color="primary" unelevated outline @click="openJabatan(props.row)" icon="visibility" dense />
                </div>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
    <q-dialog
      v-model="dialogLihatJabatan"
      v-if="dialogLihatJabatan"
    >
      <q-card style="width: 400px; max-width: 50vw;">
        <q-card-section>
          <div class="text-h6">Detail Jabatan</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ activeData.nama_karyawan }} - {{ activeData.status_karyawan_statusTostatus.nama_status }}
          <q-list bordered separator class="q-mt-md">
            <q-item v-for="(j, i) in activeData.jabatan_karyawan" :key="i">
              <q-item-section top side>
              </q-item-section>
            </q-item>
          </q-list>

        </q-card-section>

        <q-card-actions align ="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      pagination: {
        rowsPerPage: 10
      },
      columns: [
        { name: 'id_karyawan', align: 'left', label: ' ID Karyawan', field: 'id_karyawan' },
        { name: 'nama_karyawan', align: 'left', label: 'Nama Karyawan', field: 'nama_karyawan' },
        { name: 'status', align: 'left', label: 'Status', field: 'status' },
        { name: 'gaji_pokok', align: 'left', label: 'Gaji Pokok', field: 'gaji_pokok' },
        { name: 'nidn', align: 'left', label: 'NIDN', field: 'nidn' },
        { name: 'nik', align: 'left', label: 'NIK', field: 'nik' },
        { name: 'jenis_kelamin', align: 'left', label: 'Jenis Kelamin', field: 'jenis_kelamin' },
        { name: 'agama', align: 'left', label: 'Agama', field: 'agama' },
        { name: 'alamat', align: 'left', label: 'Alamat', field: 'alamat' },
        { name: 'no_tlpn', align: 'left', label: 'No Telpon', field: 'no_tlpn' },
        { name: 'kategori', align: 'left', label: 'Katagori', field: 'kategori' },
        { name: 'tanggal_lahir', align: 'left', label: 'Tanggal Lahir', field: 'tanggal_lahir' },
        { name: 'tanggal_masuk_kerja', align: 'left', label: 'Tanggal Masuk Kerja', field: 'tanggal_masuk_kerja' },
        { name: 'tgl_pensiun', align: 'left', label: 'Tanggal Pensiun', field: 'tgl_pensiun' },
        { name: 'status_karyawan', align: 'left', label: 'Status Karyawan', field: 'status_karyawan' },
        { name: 'kontrak', align: 'left', label: 'Kontrak', field: 'kontrak' },
        { name: 'jabatan', align: 'left', label: 'Jabatan', field: 'jabatan' }
      ],
      rows: [],
      filter: null,
      activeData: null,
      dialogLihatJabatan: false,
      form: {
        id_jabatan: null,
        id_karyawan: null,
        tgl_sk: null,
        unit_kerja: null,
        no_sk: null
      },
      jabatan: null,
      unitKerja: null,
      listJabatan: null,
      listUnitKerja: null,
      listJabatanKaryawan: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.loading = true
      this.$axios.get('/karyawan/getall')
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.rows = res.data.data
            this.loading = false
          }
        })
    },
    openJabatan (data) {
      this.activeData = data
      this.dialogLihatJabatan = true
    },
    openDialogFormJabatan (data) {
      this.jabatan = null
      this.activeData = data
      this.resetForm()
      this.getJabatan()
      this.getUnitKerja()
      this.dialogTambahJabatan = true
    },
    resetForm () {
      this.form = {
        id_jabatan: null,
        id_karyawan: null,
        tgl_sk: null,
        unit_kerja: null,
        no_sk: null
      }
    },
    onSubmit () {
      this.$showLoading()
      this.form.id_jabatan = this.jabatan.kode_jabatan
      this.form.unit_kerja = this.unitKerja.id_unit_kerja
      this.form.id_karyawan = this.activeData.id_karyawan
      this.$axios.post('/jabatan_karyawan/create', this.form)
        .finally(() => this.$hide())
        .then(res => {
          if (this.$parseResponse(res.data, true)) {
            this.resetForm()
            this.dialogTambahJabatan = false
            this.getData()
          }
        })
    }

  }
}
</script>
