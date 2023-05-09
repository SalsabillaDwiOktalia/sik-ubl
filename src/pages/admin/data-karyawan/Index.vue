<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        flat bordered
        title="Data Karyawan"
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
          <q-btn label="Karyawan" class="q-ml-md" icon="add" unelevated color="primary" :to="{name: 'inputKaryawanAdmin'}"/>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="namakaryawan" :props="props">
              dika
            </q-td>
            <q-td key="alamat" :props="props">
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
        { name: 'namaKaryawan', align: 'left', label: 'Nama Karyawan', field: 'namaKaryawan' },
        { name: 'alamat', align: 'left', label: 'Alamat', field: 'alamat' }
      ],
      rows: [],
      filter: null
    }
  }
}
</script>
