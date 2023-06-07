export default [
  {
    path: '/pimpinan/',
    component: () => import('layouts/PimpinanLayout.vue'),
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
      }
    ]
  }
]
