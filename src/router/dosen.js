export default [
  {
    path: '/dosen/',
    component: () => import('layouts/DosenLayout.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('pages/dosen/Index.vue'),
        name: 'dashboardDosen'
      },
      {
        path: 'tugas',
        component: () => import('pages/dosen/tugas/Index.vue'),
        name: 'tugasDosen'
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
