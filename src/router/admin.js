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
        path: 'karyawan',
        component: () => import('pages/admin/karyawan/Index.vue'),
        name: 'karyawanAdmin'
      },
      {
        path: 'karyawan/input',
        component: () => import('pages/admin/karyawan/FormInputKaryawan.vue'),
        name: 'inputKaryawanAdmin'
      },
      {
        path: 'karyawan/edit/:id',
        component: () => import('pages/admin/karyawan/FormEdit.vue'),
        name: 'editKaryawanAdmin'
      },
      {
        path: 'status',
        component: () => import('pages/admin/status/Index.vue'),
        name: 'statusAdmin'
      },
      {
        path: 'status/input',
        component: () => import('pages/admin/status/FormInputStatus.vue'),
        name: 'inputStatusAdmin'
      },
      {
        path: 'status/edit/:id',
        component: () => import('pages/admin/status/FormEdit.vue'),
        name: 'editStatusAdmin'
      },
      {
        path: 'jabatan',
        component: () => import('pages/admin/jabatan/Index.vue'),
        name: 'jabatanAdmin'
      },
      {
        path: 'jabatan/input',
        component: () => import('pages/admin/jabatan/FormInputJabatan.vue'),
        name: 'inputJabatanAdmin'
      },
      {
        path: 'jabatan/edit/:kode',
        component: () => import('pages/admin/jabatan/FormEdit.vue'),
        name: 'editJabatanAdmin'
      },
      {
        path: 'unit_kerja',
        component: () => import('pages/admin/unit_kerja/Index.vue'),
        name: 'unitKerjaAdmin'
      },
      {
        path: 'unit_kerja/input',
        component: () => import('pages/admin/unit_kerja/FormInputUnitKerja.vue'),
        name: 'inputUnitKerjaAdmin'
      },
      {
        path: 'unit_kerja/edit/:id',
        component: () => import('pages/admin/unit_kerja/FormEdit.vue'),
        name: 'editUnitKerjaAdmin'
      }
    ]
  }
]
