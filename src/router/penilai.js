export default [
  {
    path: '/penilai/',
    component: () => import('layouts/PenilaiLayout.vue'),
    meta: {
      kode: 'AA006',
      karyawan: true,
      akses: 1
    },
    children: [

      {
        path: 'dashboard',
        component: () => import('pages/penilai/Index.vue'),
        name: 'dashboardPenilai'
      },
      {
        path: 'tridharma',
        component: () => import('src/pages/penilai/tridharma/JawabanTridharma.vue'),
        name: 'jawabanTridharma'
      },
      {
        path: 'tridharma/nilai/:id',
        component: () => import('src/pages/penilai/tridharma/Nilai.vue'),
        name: 'nilaiBKDPenilai'
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
