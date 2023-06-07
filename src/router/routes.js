import adminRoutes from './admin'
import pimpinanRoutes from './pimpinan'
import dosenRoutes from './dosen'
import kepalabiroRoutes from './kepalabiro'
import karyawanRoutes from './karyawan'
import kontrakRoutes from './kontrak'

const routes = [
  ...adminRoutes,
  ...pimpinanRoutes,
  ...dosenRoutes,
  ...kepalabiroRoutes,
  ...karyawanRoutes,
  ...kontrakRoutes,
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/guest/Login.vue')
  },
  {
    path: '/karyawan/',
    component: () => import('layouts/GeneralKaryawan.vue'),
    children: [
      { name: 'indexKaryawan', path: '', component: () => import('pages/karyawan/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
