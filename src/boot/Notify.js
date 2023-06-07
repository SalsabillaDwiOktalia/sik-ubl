import { boot } from 'quasar/wrappers'
import { Notify } from 'quasar'
const notif = (msg = '-', jenis = 'positive') => {
  return Notify.create({
    message: msg,
    color: jenis,
    timeout: 2000,
    actions: [
      {
        icon: 'close',
        color: 'white'
      }
    ]
  })
}

export default boot(async ({ app }) => {
  app.config.globalProperties.$notif = notif
  app.config.globalProperties.$commonError = () => {
    notif('Terjadi Kesalahan, Mohon Periksa Internet Anda', 'negative')
  }
})

export { notif }
