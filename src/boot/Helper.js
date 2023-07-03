import { boot } from 'quasar/wrappers'
import { LocalStorage } from 'quasar'
const listMonth = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'Desember']
function getProfile () {
  return LocalStorage.getItem('dataUser')
}

export default boot(async ({ app }) => {
  // something to do
  app.config.globalProperties.$parseDate = (date) => {
    let respon
    if (date === '' || date === null || date === undefined) {
      respon = {
        date: '-',
        dateLocal: '-',
        fullDate: '-',
        timeStap: '-'
      }
    } else {
      const newDate = new Date(date)
      const month = '' + (newDate.getMonth() + 1)
      const tgl = '' + (newDate.getDate())
      const year = newDate.getFullYear()
      const full = `${tgl} ${listMonth[month - 1]} ${year}`
      respon = {
        dateLocal: [year, `${month < 10 ? `0${month}` : (month)}`, `${tgl < 10 ? `0${tgl}` : tgl}`].join('/'),
        fullDate: full,
        timeStap: `${full} ${newDate.getUTCHours()}:${newDate.getUTCMinutes()}:${newDate.getUTCSeconds()}`
      }
    }
    return respon
  }
  app.config.globalProperties.$setProfile = (data) => {
    LocalStorage.set('dataUser', data)
  }
  app.config.globalProperties.$getProfile = getProfile
})

export {
  getProfile
}
