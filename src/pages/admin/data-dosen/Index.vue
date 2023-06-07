<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        flat bordered
        title="Data Dosen"
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
          <q-btn label="Dosen" class="q-ml-md" icon="add" unelevated color="primary" :to="{name: 'InputDosenAdmin'}"/>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="namadosen" :props="props">
              dika
            </q-td>
             <q-td key="nidn" :props="props">
              dika
            </q-td>
             <q-td key="fakultas" :props="props">
              dika
            </q-td>
            <q-td key="alamat" :props="props">
              dika
            </q-td>
             <q-td key="nohp" :props="props">
              dika
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
        { name: 'namadosen', align: 'left', label: 'Nama Dosen', field: 'namadosen' },
        { name: 'nidn', align: 'left', label: 'NIDN', field: 'nidn' },
        { name: 'fakultas', align: 'left', label: 'Fakultas', field: 'fakultas' },
        { name: 'alamat', align: 'left', label: 'Alamat', field: 'alamat' },
        { name: 'nohp', align: 'left', label: 'No Hp', field: 'nohp' }
      ],
      rows: [],
      filter: null
    }
  }
}
</script>
