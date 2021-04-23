import { createStore } from 'vuex'

import client from './modules/client'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    client
  },
  strict: debug,
  plugins: []
})