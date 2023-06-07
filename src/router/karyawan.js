export default [
  {
    path: '/karyawan/',
    component: () => import('layouts/KaryawanLayout.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('pages/karyawan/Index.vue'),
        name: 'dashboardKaryawan'
      }
    ]
  }
]
