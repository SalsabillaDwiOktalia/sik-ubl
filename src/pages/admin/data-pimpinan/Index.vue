<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        flat bordered
        title="Data Pimpinan Unit"
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
          <q-btn label="Kabag" class="q-ml-md" icon="add" unelevated color="primary" :to="{name: 'inputPimpinanAdmin'}"/>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="namapimpinan" :props="props">
              dika
            </q-td>
             <q-td key="nidn" :props="props">
              dika
            </q-td>
             <q-td key="jabatan" :props="props">
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
        { name: 'namapimpinan', align: 'left', label: 'Nama Pimpinan Unit', field: 'namaPimpinan' },
        { name: 'nidn', align: 'left', label: 'NIDN', field: 'nidn' },
        { name: 'jabatan', align: 'left', label: 'Jabatan', field: 'jabatan' },
        { name: 'alamat', align: 'left', label: 'Alamat', field: 'alamat' },
        { name: 'nohp', align: 'left', label: 'No Hp', field: 'nohp' }
      ],
      rows: [],
      filter: null
    }
  }
}
</script>
