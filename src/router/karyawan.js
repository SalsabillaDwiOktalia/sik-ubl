export default [
  {
    path: '/karyawan/',
    component: () => import('layouts/KaryawanLayout.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('pages/karyawan/Dashboard.vue'),
        name: 'dashboardKaryawan'
      },
      {
        path: 'tugas/Tambah_Tugas',
        component: () => import('pages/karyawan/tugas/TambahTugas.vue'),
        name: 'TambahTugasKaryawan'
      },
      {
        path: 'tugas/Lihat_Tugas',
        component: () => import('pages/karyawan/tugas/LihatTugas.vue'),
        name: 'LihatTugasKaryawan'
      }
    ]
  }
]
