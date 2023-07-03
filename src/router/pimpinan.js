export default [
  {
    path: '/pimpinan/',
    component: () => import('layouts/PimpinanLayout.vue'),
    meta: {
      kode: 'AA01',
      karyawan: true,
      akses: 1
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('pages/pimpinan/Index.vue'),
        name: 'dashboardPimpinan'
      },
      {
        path: 'tugas',
        component: () => import('pages/pimpinan/tugas/Index.vue'),
        name: 'tugasPimpinan'
      },
      {
        path: 'tugas/tambahTugas',
        component: () => import('pages/pimpinan/tugas/TambahTugas.vue'),
        name: 'tugasTambahTugasPimpinan'
      },
      {
        path: 'tugas/revisi/:id',
        component: () => import('pages/pimpinan/tugas/Revisi.vue'),
        name: 'tugasRevisiPimpinan'
      },
      {
        path: 'tugas/detail/:id',
        component: () => import('pages/pimpinan/tugas/Detail.vue'),
        name: 'tugasDetailPimpinan'
      }
    ]
  }
]
