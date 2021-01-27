import { createStore, createLogger } from 'vuex'
import auth from '@/store/modules/auth.module.js'

const plugins = []

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export default createStore({
  plugins,
  modules: {
    auth
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
})
