import { boot } from 'quasar/wrappers'
import axios from 'axios'

const baseURL = 'http://192.168.1.42:3000/'
const api = axios.create({ baseURL })

export default boot(({ app }) => {
  app.config.globalProperties.$axios = api
  app.config.globalProperties.$baseLampiran = `${baseURL}lampiran/`
})

export { api }
