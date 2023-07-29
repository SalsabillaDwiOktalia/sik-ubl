<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        <q-table
          flat
          title="Hasil Penilaian"
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
              <q-td key="poin" :props="props">
                {{ props.row.karyawan.poin }}
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
        { name: 'poin', align: 'left', label: 'Poin (Skor Akhir)', field: 'poin' }
      ],
      rows: [],
      filter: null
    }
  }
}
</script>
