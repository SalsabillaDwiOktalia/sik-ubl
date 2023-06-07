<template>
  <q-page>
    <div class="q-pa-md">
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
            <q-td key="nama_tugas" :props="props">
              {{ props.row.nama_tugas }}
            </q-td>
            <q-td key="dedline" :props="props">
              {{ props.row.dedline }}
            </q-td>
            <q-td key="deskripsi" :props="props">
              {{ props.row.deskripsi }}
            </q-td>
            <q-td key="aksi" :props="props">
              <div class="row q-gutter-x-md">
                <!-- <q-btn label="Kerjakan" unelevated icon="library_books" color="green" :to="{name:'tugasKerjakanDosen', params:{kode:props.row.nama_tugas}}"/> -->
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
        { name: 'nama_tugas', align: 'left', label: 'Nama Tugas', field: 'nama_tugas' },
        { name: 'dedline', align: 'left', label: 'Dedline', field: 'dedline' },
        { name: 'deskripsi', align: 'left', label: 'Deskripsi', field: 'deskripsi' },
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
      this.$axios.get('/tugas/getall')
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
