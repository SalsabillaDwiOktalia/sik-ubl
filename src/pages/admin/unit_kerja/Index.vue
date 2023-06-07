<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        flat bordered
        title="Unit Kerja"
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
          <q-btn label="Unit Kerja" class="q-ml-md" icon="add" unelevated color="primary" :to="{name: 'inputUnitKerjaAdmin'}"/>
      </template>
      <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="id_unit_kerja" :props="props">
              {{ props.row.id_unit_kerja }}
            </q-td>
            <q-td key="nama_unit_kerja" :props="props">
              {{ props.row.nama_unit_kerja }}
            </q-td>
            <q-td key="keterangan" :props="props">
              {{ props.row.keterangan }}
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
        { name: 'id_unit_kerja', align: 'left', label: 'ID Unit Kerja', field: 'id_unit_kerja' },
        { name: 'nama_unit_kerja', align: 'left', label: 'Nama Unit Kerja', field: 'nama_unit_kerja' },
        { name: 'keterangan', align: 'left', label: 'Keterangan', field: 'keterangan' }
      ],
      rows: [],
      filter: null
    }
  }
}
</script>
