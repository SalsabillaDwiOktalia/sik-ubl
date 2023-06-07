<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        flat bordered
        title="Data kepala Bagian"
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
          <q-btn label="Kabag" class="q-ml-md" icon="add" unelevated color="primary" :to="{name: 'inputKabagAdmin'}"/>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="namakepalabagian" :props="props">
              dika
            </q-td>
             <q-td key="nidn" :props="props">
              dika
            </q-td>
             <q-td key="biro" :props="props">
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
        { name: 'namakepalabagian', align: 'left', label: 'Nama Kepala Bagian', field: 'namakepalabagian' },
        { name: 'nidn', align: 'left', label: 'NIDN', field: 'nidn' },
        { name: 'biro', align: 'left', label: 'Biro', field: 'biro' },
        { name: 'alamat', align: 'left', label: 'Alamat', field: 'alamat' },
        { name: 'nohp', align: 'left', label: 'No Hp', field: 'nohp' }
      ],
      rows: [],
      filter: null
    }
  }
}
</script>
