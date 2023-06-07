import { boot } from 'quasar/wrappers'
import { Loading, QSpinnerTail } from 'quasar'

export default boot(async ({ app }) => {
  app.config.globalProperties.$showLoading = () => {
    Loading.show({
      spinner: QSpinnerTail
    })
  }
  app.config.globalProperties.$hide = () => {
    Loading.hide()
  }
})
