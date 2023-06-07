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
      },
      {
        path: 'data-dosen',
        component: () => import('pages/admin/data-dosen/Index.vue'),
        name: 'dataDosenAdmin'
      },
      {
        path: 'data-dosen/input',
        component: () => import('pages/admin/data-dosen/FormInputDosen.vue'),
        name: 'InputDosenAdmin'
      },
      {
        path: 'data-kabag',
        component: () => import('pages/admin/data-kabag/Index.vue'),
        name: 'datakabagAdmin'
      },
      {
        path: 'data-kabag/input',
        component: () => import('pages/admin/data-kabag/FormInputKabag.vue'),
        name: 'inputKabagAdmin'
      },
      {
        path: 'data-pimpinan',
        component: () => import('pages/admin/data-pimpinan/Index.vue'),
        name: 'dataPimpinanAdmin'
      },
      {
        path: 'data-pimpinan/input',
        component: () => import('pages/admin/data-pimpinan/FormInputPimpinan.vue'),
        name: 'inputPimpinanAdmin'
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
