export default [
  {
    path: '/kepalabiro/',
    component: () => import('layouts/KepalaBiroLayout.vue'),
    meta: {
      kode: 'AA002',
      karyawan: true,
      akses: 1
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('pages/pimpinan/Index.vue'),
        name: 'dashboardKepalaBiro'
      },
      {
        path: 'tugas/untuk_karyawan',
        component: () => import('pages/kepalabiro/tugas/TugasUntukKaryawan.vue'),
        name: 'tugasUntukKaryawan'
      },
      {
        path: 'tugas/tambah_tugas',
        component: () => import('pages/kepalabiro/tugas/TambahTugas.vue'),
        name: 'tugasTambahTugasKepalaBiro'
      },
      {
        path: 'tugas/dari_pimpinan',
        component: () => import('src/pages/kepalabiro/tugas/TugasDariPimpinan.vue'),
        name: 'tugasDariPimpinan'
      },
      {
        path: 'tugas/kerjakan/:id',
        component: () => import('src/pages/kepalabiro/tugas/Kerjakan.vue'),
        name: 'kerjakanKepalaBiro'
      }
    ]
  }
]
