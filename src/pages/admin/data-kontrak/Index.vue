<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        flat bordered
        title="Data Kontrak Karyawan"
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
          <q-btn label="Kontrak" class="q-ml-md" icon="add" unelevated color="primary" :to="{name: 'inputKontrakAdmin'}"/>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="namakaryawan" :props="props">
              dika
            </q-td>
            <q-td key="tanggallahir" :props="props">
              dika
            </q-td>
            <q-td key="jeniskelamin" :props="props">
              dika
            </q-td>
            <q-td key="alamat" :props="props">
              dika
            </q-td>
            <q-td key="nik" :props="props">
              dika
            </q-td>
            <q-td key="notlpn" :props="props">
              dika
            </q-td>
            <q-td key="pendidikanterakhir" :props="props">
              dika
            </q-td>
            <q-td key="tanggalmasukkerja" :props="props">
              dika
            </q-td>
            <q-td key="lamakontrak" :props="props">
              dika
            </q-td>
            <q-td key="divisikerja" :props="props">
              dika
            </q-td>
            <q-td key="gaji" :props="props">
              dika
            </q-td>
            <q-td key="keterangan" :props="props">
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
        { name: 'tanggallahir', align: 'left', label: 'Tanggal Lahir', field: 'tanggallahir' },
        { name: 'jeniskelamin', align: 'left', label: 'Jenis Kelamin', field: 'jeniskelamin' },
        { name: 'alamat', align: 'left', label: 'Alamat', field: 'alamat' },
        { name: 'nik', align: 'left', label: 'NIK', field: 'nik' },
        { name: 'notlpn', align: 'left', label: 'No. Telpn', field: 'notlpn' },
        { name: 'pendidikanterakhir', align: 'left', label: 'Pendidikan Terakhir', field: 'pendidikanterakhir' },
        { name: 'tanggalmasukkerja', align: 'left', label: 'Tanggal Masuk Kerja', field: 'tanggalmasukkerja' },
        { name: 'lamakontrak', align: 'left', label: 'Kontrak Kerja', field: 'lamakontrak' },
        { name: 'divisikerja', align: 'left', label: 'Divisi Kerja', field: 'divisikerja' },
        { name: 'gaji', align: 'left', label: 'Gaji', field: 'gaji' },
        { name: 'keterangan', align: 'left', label: 'Keterangan', field: 'keterangan' }
      ],
      rows: [],
      filter: null
    }
  }
}
</script>
