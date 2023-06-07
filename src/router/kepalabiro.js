export default [
  {
    path: '/kepalabiro/',
    component: () => import('layouts/KepalaBiroLayout.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('pages/pimpinan/Index.vue'),
        name: 'dashboardKepalaBiro'
      },
      {
        path: 'tugas/untuk_karyawan',
        component: () => import('pages/kepalabiro/tugas/TugasUntukKaryawan.vue'),
        name: 'TugasUntukKaryawan'
      },
      {
        path: 'tugas/tambah_tugas',
        component: () => import('pages/kepalabiro/tugas/TambahTugas.vue'),
        name: 'tugasTambahTugasKepalaBiro'
      },
      {
        path: 'tugas/dari_pimpinan',
        component: () => import('src/pages/kepalabiro/tugas/TugasDariPimpinan.vue'),
        name: 'TugasDariPimpinan'
      }
    ]
  }
]