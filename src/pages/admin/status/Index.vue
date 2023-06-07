<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        flat bordered
        title="Status"
        :rows="rows"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn label="Status" class="q-ml-md" icon="add" unelevated color="primary" :to="{name: 'inputStatusAdmin'}"/>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="id_status" :props="props">
              {{ props.row.id_status }}
            </q-td>
            <q-td key="nama_status" :props="props">
              {{ props.row.nama_status }}
            </q-td>
            <q-td key="gaji_pokok" :props="props">
              {{ props.row.gaji_pokok }}
            </q-td>
            <q-td key="keterangan" :props="props">
              {{ props.row.keterangan }}
            </q-td>
            <q-td key="aksi" :props="props">
              <div class="row q-gutter-x-md">
                <q-btn label="edit" unelevated icon="edit" color="warning" :to="{name:'editStatusAdmin', params:{id:props.row.id_status}}"/>
                <q-btn label="hapus" unelevated icon="delete" color="negative" @click="hapus(props.row.id_status)"/>
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
      columns: [
        { name: 'id_status', align: 'left', label: 'Id Status', field: 'id_status' },
        { name: 'nama_status', align: 'left', label: 'Nama Status', field: 'nama_status' },
        { name: 'gaji_pokok', align: 'left', label: 'Gaji Pokok', field: 'gaji_pokok' },
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
      this.$axios.get('/status/getall')
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
        this.$axios.delete(`/status/delete/${id}`)
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
