export default [
  {
    path: '/karyawan/',
    component: () => import('layouts/KaryawanLayout.vue'),
    meta: {
      kode: 'AA003',
      karyawan: true,
      akses: 1
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('src/pages/karyawan/Dashboard.vue'),
        name: 'dashboardKaryawan'
      },
      {
        path: 'tugas/Lihat_Tugas',
        component: () => import('src/pages/karyawan/tugas/LihatTugas.vue'),
        name: 'LihatTugasKaryawan'
      },
      {
        path: 'penilaian',
        component: () => import('src/pages/karyawan/penilaian/InisiatifKaryawan.vue'),
        name: 'inisiatifIdeKaryawan'
      },
      {
        path: 'penilaian/poin',
        component: () => import('src/pages/karyawan/penilaian/PoinKaryawan.vue'),
        name: 'PoinSayaKaryawan'
      }
    ]
  }
]
