export default [
  {
    path: '/dosen/',
    component: () => import('layouts/DosenLayout.vue'),
    meta: {
      kode: 'AA005',
      karyawan: true,
      akses: 1
    },
    children: [

      {
        path: 'dashboard',
        component: () => import('src/pages/dosen/Index.vue'),
        name: 'dashboardDosen'
      },
      // {
      //   path: 'tridharma1',
      //   component: () => import('pages/dosen/tugas/Index1.vue'),
      //   name: 'sdfsdfsdf'
      // },
      {
        path: 'tridharma',
        component: () => import('src/pages/dosen/tugas/Index.vue'),
        name: 'UploadTriDharma'
      },
      {
        path: 'arsip',
        component: () => import('pages/dosen/arsip/Index.vue'),
        name: 'arsipdosen'
      },
      {
        path: 'About',
        component: () => import('pages/dosen/about/Index.vue'),
        name: 'TentangKamiDosen'
      }
    ]
  }
]
