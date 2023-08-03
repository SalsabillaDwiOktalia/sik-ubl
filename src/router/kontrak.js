export default [
  {
    path: '/kontrak/',
    component: () => import('layouts/KontrakLayout.vue'),
    meta: {
      kode: 'AA004',
      karyawan: true,
      akses: 1
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('pages/kontrak/Index.vue'),
        name: 'dashboardKontrak'
      },
      {
        path: 'datakontrakKaryawan',
        component: () => import('src/pages/kontrak/datakontrak/DataKaryawan.vue'),
        name: 'dataKontrakKaryawan'
      },
      {
        path: 'datakontrak',
        component: () => import('src/pages/kontrak/datakontrak/DataKontrak.vue'),
        name: 'dataKontrak'
      },
      {
        path: 'datakontrak/input/:id_karyawan',
        component: () => import('src/pages/kontrak/datakontrak/FormInputKontrak.vue'),
        name: 'inputKontrak'
      },
      {
        path: 'datakontrak/perpanjang/:id/:id_kontrak',
        component: () => import('src/pages/kontrak/datakontrak/PerpanjangKontrak.vue'),
        name: 'perpanjangKontrak'
      },
      {
        path: 'datakontrak/pensiun/:id/:id_kontrak',
        component: () => import('src/pages/kontrak/datakontrak/Pensiun.vue'),
        name: 'PensiunKontrak'
      },
      {
        path: 'datakontrak/detail/:id',
        component: () => import('src/pages/kontrak/datakontrak/Detail.vue'),
        name: 'datakontrakDetail'
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
