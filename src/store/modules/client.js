const state = () => ({
  items: [
    {
        name: 'Амантур',
        firstName: 'Акылбеков',
        lastName: '',
        birthday: '14.12.1998',
        phone: '0556330130',
        pol: 'Муж.',
        city: 'Бишкек',
        sms: false,
        manager: 'Пусто',
        group: ['VIP']
    },
  ],
  loading: false
})

const mutations = {
  add(state, payload) {
    state.loading = true
    state.items.push(payload)

  },

  delete(state, idx) {
    state.items.splice(idx, 1)
  },

  loadingFalse(state) {
    state.loading = false
  }
}


export default {
  namespaced: true,
  mutations,
  state
}