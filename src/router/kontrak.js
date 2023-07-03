export default [
  {
    path: '/kontrak/',
    component: () => import('layouts/KontrakLayout.vue'),
    meta: {
      kode: 'AA004',
      karyawan: true
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('pages/kontrak/Index.vue'),
        name: 'dashboardKontrak'
      },
      {
        path: 'datakontrak',
        component: () => import('pages/kontrak/datakontrak/Dosen.vue'),
        name: 'dataKontrak'
      },
      {
        path: 'datakontrak/dosen',
        component: () => import('pages/kontrak/datakontrak/Index.vue'),
        name: 'dataDosenKontrak'
      },
      {
        path: 'datakontrak/karyawan',
        component: () => import('pages/kontrak/datakontrak/Index.vue'),
        name: 'dataKaryawanKontrak'
      },
      {
        path: 'datakontrak/magangalm',
        component: () => import('pages/kontrak/datakontrak/Index.vue'),
        name: 'dataMagangalmKontrak'
      },
      {
        path: 'datakontrak/magangmhs',
        component: () => import('pages/kontrak/datakontrak/Index.vue'),
        name: 'dataMagangmhsKontrak'
      },
      {
        path: 'datakontrak/perbantuan',
        component: () => import('pages/kontrak/datakontrak/Index.vue'),
        name: 'dataPerbantuanKontrak'
      },
      {
        path: 'datakontrak/ob',
        component: () => import('pages/kontrak/datakontrak/Index.vue'),
        name: 'dataObKontrak'
      },
      {
        path: 'datakontrak/satpam',
        component: () => import('pages/kontrak/datakontrak/Index.vue'),
        name: 'dataSatpamKontrak'
      },
      {
        path: 'datakontrak/supir',
        component: () => import('pages/kontrak/datakontrak/Index.vue'),
        name: 'dataSupirKontrak'
      },
      {
        path: 'laporan',
        component: () => import('pages/pimpinan/laporan/Index.vue'),
        name: 'laporanPimpinan'
      },
      {
        path: 'arsip',
        component: () => import('pages/pimpinan/arsip/Index.vue'),
        name: 'arsipPimpinan'
      },
      {
        path: 'About',
        component: () => import('pages/admin/karyawan/FormEdit.vue'),
        name: 'aboutPimpinan'
      },
      {
        path: 'About/tentangKami',
        component: () => import('pages/admin/karyawan/FormEdit.vue'),
        name: 'aboutPimpinan'
      }
    ]
  }
]
