import auth from '@/auth/store'
import * as constants from '@/constants'

// 豫localStorage同步
if (localStorage.getItem(constants.STORAGE_KEY)) {
  const syncedState = JSON.parse(localStorage.getItem(constants.STORAGE_KEY))
  auth.state = Object.assign(auth.state, syncedState.auth)
}

// localStorage插件
const localStoragePlugin = store => {
  store.subscribe((mutation, state) => {
    const syncedData = { auth: state.auth }

    localStorage.setItem(constants.STORAGE_KEY, JSON.stringify(syncedData))

    if (mutation.type === 'common/clear') {
      localStorage.removeItem(constants.STORAGE_KEY)
    }
  })
}

export { localStoragePlugin }
