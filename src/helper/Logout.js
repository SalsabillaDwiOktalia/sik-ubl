import { LocalStorage } from 'quasar'
export default function (router) {
  LocalStorage.clear()
  router.push({ name: 'loginPage' })
}
