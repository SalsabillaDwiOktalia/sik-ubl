import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { getProfile } from '../boot/Helper'

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach((to, from, next) => {
    const loginPage = 'loginPage'
    const dataUser = getProfile()
    const noSession = dataUser === null || dataUser === 'undefined'
    const akses = dataUser ? dataUser.level : null

    if (to.matched.some(record => record.meta.admin)) {
      if (noSession) {
        next({ name: loginPage })
      } else {
        if (akses === 0) {
          next()
        } else {
          next({ name: loginPage })
        }
      }
    } else if (to.matched.some(record => record.meta.karyawan)) {
      if (noSession) {
        next({ name: loginPage })
      } else {
        if (akses === 1) {
          if (to.meta.mainRoute) {
            next()
          } else {
            const roles = dataUser.karyawan.jabatan_karyawan
            if (roles.map(r => r.id_jabatan).includes(to.meta.kode)) {
              next()
            } else {
              // next()
              next({ name: 'indexKaryawan' })
            }
          }
        } else {
          next({ name: loginPage })
        }
      }
    } else {
      if (akses === 0) {
        next({ name: 'dashboardAdmin' })
      } else if (akses === 1) {
        next({ name: 'indexKaryawan' })
      } else {
        next()
      }
    }
  })

  return Router
})
