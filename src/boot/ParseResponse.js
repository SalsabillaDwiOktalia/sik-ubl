import { boot } from 'quasar/wrappers'
import { notif } from './Notify'

export default boot(async ({ app }) => {
  app.config.globalProperties.$parseResponse = (res, useMsg = true) => {
    if (res.status) {
      if (useMsg) notif(res.msg, 'positive')
      return true
    } else {
      if (res.code === 410) {
        alert('denied')
      } else {
        notif(res.msg, 'negative')
      }
      return false
    }
  }
})
