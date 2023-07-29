<template>
  <q-page padding>
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
            <q-td key="id_kontrak" :props="props">
                {{ props.row.id_kontrak }}
            </q-td>
            <q-td key="id_karyawan" :props="props">
                {{ this.namaKaryawan.nama_karyawan }}
            </q-td>
            <q-td key="id_karyawan" :props="props">
                {{ this.namaKategori }}
            </q-td>
            <q-td key="no_sk" :props="props">
                {{ props.row.no_sk }}
            </q-td>
            <q-td key="tgl_kontrak" :props="props">
                {{ this.$parseDate(props.row.tgl_kontrak).dateLocal }}
            </q-td>
            <q-td key="tgl_habis_kontrak" :props="props">
                {{ this.$parseDate(props.row.tgl_habis_kontrak).dateLocal}}
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
          </q-tr>
        </template>
      </q-table>
  </q-page>
</template>
<script>
/* eslint-disable */
export default {
  data () {
    return {
      dataKaryawan: null,
      columns: [
        { name: 'id_kontrak', align: 'left', label: 'ID Kontrak', field: 'id_kontrak' },
        { name: 'id_karyawan', align: 'left', label: 'Nama Karyawan', field: 'id_karyawan' },
        { name: 'kategori', align: 'left', label: 'Kategori', field: 'kategori' },
        { name: 'no_sk', align: 'left', label: 'No. SK', field: 'no_sk' },
        { name: 'tgl_kontrak', align: 'left', label: 'Tanggal Kontrak', field: 'tgl_kontrak' },
        { name: 'tgl_habis_kontrak', align: 'left', label: 'Habis Kontrak', field: 'tgl_habis_kontrak' },
        { name: 'jenis_kontrak', align: 'left', label: 'Jenis Kontrak', field: 'jenis_kontrak' },
        { name: 'status', align: 'left', label: 'Status', field: 'status' },
        { name: 'ket_kontrak', align: 'left', label: 'Keterangan', field: 'ket_kontrak' }
      ],
      rows: [],
      namaKaryawan: [],
      filter: null,
      kategori_ : null,
      namaKategori: null,
    }
  },
  created () {
    this.getDetail()
    this.getNama()
  },
  methods: {
    getDetail () {
      this.$axios.get(`/kontrak/get/${this.$route.params.id_karyawan}`)
        .finally(() => this.$hide())
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.rows= res.data.data
            console.log(this.rows)
          }
        })
    },
    getNama () {
      this.$axios.get(`/karyawan/get/${this.$route.params.id_karyawan}`)
        .finally(() => this.$hide())
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.namaKaryawan = res.data.data
            this.kategori_ = this.namaKaryawan.kategori
            console.log(this.kategori_)
            this.getKategori(this.kategori_)
          }
        })
    },
    getKategori (id) {
      this.$axios.get(`/karyawan/kategori/get/${id}`)
        .finally(() => this.$hide())
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.namaKategori = res.data.data[0].nama_kategori
            console.log(this.namaKategori)
          }
        })
    },
  }
}
</script>
