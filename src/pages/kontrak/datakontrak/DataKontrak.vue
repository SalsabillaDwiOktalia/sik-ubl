<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        <q-table
          flat
          title="Kontrak Kerja"
          :rows="rows"
          :columns="columns"
          :loading="loading"
          row-key="name"
        >
        <!-- <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
            <q-btn label="Kontrak" class="q-ml-md" icon="add" unelevated color="primary" :to="{name: 'inputKontrakAdmin'}"/>
        </template> -->
        <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="id_kontrak" :props="props">
                {{ props.row.id_kontrak }}
              </q-td>
              <q-td key="id_karyawan" :props="props">
                {{ props.row.karyawan.nama_karyawan }}
              </q-td>
              <q-td key="no_sk" :props="props">
                {{ props.row.no_sk }}
              </q-td>
              <q-td key="habis" :props="props">
                {{ new Date(props.row.tgl_habis_kontrak) <= new Date() ? 'Expired' : 'Berlaku' }}
              </q-td>
              <q-td key="tgl_kontrak" :props="props">
                {{ $parseDate(props.row.tgl_kontrak).fullDate }}
              </q-td>
              <q-td key="tgl_habis_kontrak" :props="props">
                {{ $parseDate(props.row.tgl_habis_kontrak).fullDate }}
              </q-td>
              <q-td key="jenis_kontrak" :props="props">
                <q-badge color="positive" v-if="props.row.jenis_kontrak === 1">
                  Kontrak Baru
                </q-badge>
                <q-badge color="positive" v-else-if="props.row.jenis_kontrak === 2">
                  Kontrak Perpanjang
                </q-badge>
                <q-badge color="negative" v-else-if="props.row.jenis_kontrak === 3">
                  Kontrak Pensiun
                </q-badge>
              </q-td>
              <q-td key="ket_kontrak" :props="props">
                <div class="justify-center q-gsssutter-x-xs">
                  <q-btn :disable="props.row.jenis_kontrak === 3" :to="{name:'perpanjangKontrak', params:{id:props.row.id_karyawan, id_kontrak:props.row.id_kontrak}}" color="primary" label="Perpanjang Kontrak" unelevated outline dense />
                  <q-btn :disable="props.row.jenis_kontrak === 3" :to="{name:'PensiunKontrak', params:{id:props.row.id_karyawan, id_kontrak:props.row.id_kontrak}}" color="primary" label="Pensiun" unelevated outline dense />
                </div>
              </q-td>
              <q-td key="status" :props="props">
                <q-badge color="positive" v-if="props.row.status === 1">
                  Aktif
                </q-badge>
                <q-badge color="negative" v-else>
                  Tidak Aktif
                </q-badge>
              </q-td>
              <q-td key="ket_kontrak" :props="props">
                {{ props.row.ket_kontrak }}
              </q-td>
              <q-td key="aksi" :props="props">
                <div class="justify-center q-gutter-x-xs">
                  <q-btn label="edit" unelevated icon="edit" color="warning" :to="{name:'editKaryawanAdmin', params:{id:props.row.id_karyawan}}"/>
                  <q-btn label="hapus" unelevated icon="delete" color="negative" @click="hapus(props.row.id_karyawan)"/>
                  <q-btn label="Detail" unelevated icon="info" color="primary" :to="{name: 'datakontrakDetail', params:{id:props.row.id_karyawan}}" />
                </div>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      columns: [
        { name: 'id_kontrak', align: 'left', label: ' ID Kontrak', field: 'id_kontrak' },
        { name: 'id_karyawan', align: 'left', label: 'Nama Karyawan', field: 'id_karyawan' },
        { name: 'no_sk', align: 'left', label: 'No. SK', field: 'no_sk' },
        { name: 'habis', align: 'left', label: 'Masa', field: 'habis' },
        { name: 'tgl_kontrak', align: 'left', label: 'Tanggal Kontrak', field: 'tgl_kontrak' },
        { name: 'tgl_habis_kontrak', align: 'left', label: 'Habis Kontrak', field: 'tgl_habis_kontrak' },
        { name: 'jenis_kontrak', align: 'left', label: 'Jenis Kontrak', field: 'jenis_kontrak' },
        { name: 'ket_kontrak', align: 'left', label: 'Keterangan Kontrak', field: 'ket_kontrak' },
        { name: 'status', align: 'left', label: 'Status Kontrak', field: 'status' },
        { name: 'ket_kontrak', align: 'left', label: 'Keterangan', field: 'ket_kontrak' },
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
      this.$axios.get('/kontrak/get')
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.rows = res.data.data
            this.loading = false
          }
        })
    }
  }
}
</script>
