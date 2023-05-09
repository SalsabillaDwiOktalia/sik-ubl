export default [
  {
    path: '/admin/',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('pages/admin/Index.vue'),
        name: 'dashboardAdmin'
      },
      {
        path: 'data-karyawan',
        component: () => import('pages/admin/data-karyawan/Index.vue'),
        name: 'dataKaryawanAdmin'
      },
      {
        path: 'data-karyawan/input',
        component: () => import('pages/admin/data-karyawan/FormInput.vue'),
        name: 'inputKaryawanAdmin'
      },
      {
        path: 'data-kontrak',
        component: () => import('pages/admin/data-kontrak/Index.vue'),
        name: 'dataKontrakAdmin'
      },
      {
        path: 'data-kontrak/input',
        component: () => import('pages/admin/data-kontrak/FormInput.vue'),
        name: 'inputKontrakAdmin'
      }
    ]
  }
]
