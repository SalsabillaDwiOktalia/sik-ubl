<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        <q-table
          flat
          title="Ide/Masukan"
          :rows="rows"
          :columns="columns"
          :loading="loading"
          row-key="name"
        >

        <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="id_karyawan" :props="props">
                {{ props.row.nama_karyawan }}
              </q-td>
              <q-td key="keterangan_karyawan" :props="props">
                {{ props.row.karyawan.keterangan_karyawan }}
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
        { name: 'id_karyawan', align: 'left', label: 'Nama Karyawan', field: 'id_karyawan' },
        { name: 'keterangan_karyawan', align: 'left', label: 'Keterangan Karyawan', field: 'keterangan_karyawan' }
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
    },
    hapus (id) {
      this.$q.dialog({
        title: 'konfirmasi',
        message: 'apakah kamu yakin menghapus ',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.delete(`/kontrak/delete/${id}`)
          .then(res => {
            if (this.$parseResponse(res.data)) {
              this.getData()
            }
          })
      })
    }
  }
}
</script>
