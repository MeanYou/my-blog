// common state
const defaults = {
  sidebar: {
    visible: true
  },
  title: '',
  layout: 'DefaultLayout',
  error: {
    code: null,
    level: null,
    message: ''
  }
}

// app首次加载的全局模块
export default {
  namespaced: true,

  state: Object.assign({}, defaults),

  mutations: {
    updateSidebar (state, options) {
      state.sidebar = Object.assign({}, defaults.sidebar, options);
    },

    updateTitle (state, title) {
      state.title = title
    },

    updateLayout (state, layout) {
      state.layout = layout
    },

    error (state, options) {
      state.error = Object.assign({}, defaults.error, options)
    },

    clear (state) {
      state = Object.assign({}, defaults)
    }
  },

  actions: {
    clear ({ state, commit, rootState, dispatch }) {
      commit('clear');
      dispatch('auth/clear', {}, { root: true });
    },

    updateSidebar({ commit }, options) {
      commit('updateSidebar', options)
    },

    updateTitle ({ commit }, title) {
      commit('updateTitle', title)
    },

    updateLayout ({ commit }, layout) {
      commit('updateLayout', layout)
    }
  }
}