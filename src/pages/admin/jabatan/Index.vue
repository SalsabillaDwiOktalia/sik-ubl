<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        flat bordered
        title="Jabatan"
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
          <q-btn label="Jabatan" class="q-ml-md" icon="add" unelevated color="primary" :to="{name: 'inputJabatanAdmin'}"/>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="kode_jabatan" :props="props">
              {{ props.row.kode_jabatan }}
            </q-td>
            <q-td key="nama_jabatan" :props="props">
              {{ props.row.nama_jabatan }}
            </q-td>
            <q-td key="keterangan" :props="props">
              {{ props.row.keterangan }}
            </q-td>
            <q-td key="aksi" :props="props">
              <div class="row q-gutter-x-md">
                <q-btn label="edit" unelevated icon="edit" color="warning" :to="{name:'editJabatanAdmin', params:{kode:props.row.kode_jabatan}}"/>
                <q-btn label="hapus" unelevated icon="delete" color="negative" @click="hapus(props.row.kode_jabatan)"/>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      columns: [
        { name: 'kode_jabatan', align: 'left', label: 'Kode Jabatan', field: 'kode_jabatan' },
        { name: 'nama_jabatan', align: 'left', label: 'Nama Jabatan', field: 'nama_jabatan' },
        { name: 'keterangan', align: 'left', label: 'Keterangan', field: 'keterangan' },
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
      this.$axios.get('/jabatan/getall')
        .then(res => {
          if (this.$parseResponse(res.data, false)) {
            this.rows = res.data.data
            this.loading = false
          }
        })
    },
    hapus (kode) {
      this.$q.dialog({
        title: 'konfirmasi',
        message: 'apakah kamu yakin menghapus ',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.delete(`/jabatan/delete/${kode}`)
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
