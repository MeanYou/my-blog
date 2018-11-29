const defaults = {
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
  user: {
    name: '',
    id: ''
  }
}

const auth = {
  namespaces: true,

  state: Object.assign({}, defaults),

  mutations: {
    update(state, data) {
      state = Object.assign({}, defaults, data)
    },
    clear() {
      state = Object.assign(state, defaults)
    }
  }
}

export default auth