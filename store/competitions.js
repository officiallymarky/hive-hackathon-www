import hivejs from '@hiveio/hive-js'

export const state = () => ({
  sponsors: []
})

export const mutations = {
  updateSponsors (state, data) {
    state.sponsors = data
  }
}

export const getters = {
  sponsors: state => {
    return state.sponsors
  }
}

export const actions = {
  async fetchSponsors ({ commit }) {
    console.log(process.env.PRIZEPOOL_ACCOUNT)
    const activities = await hivejs.api.getAccountHistoryAsync(process.env.PRIZEPOOL_ACCOUNT, -1, 250)
    const sponsors = activities
      .filter(a => {
        const type = a[1].op[0]
        const operation = a[1].op[1]

        return type === 'transfer' && operation.to === process.env.PRIZEPOOL_ACCOUNT && parseFloat(operation.amount) > 1
      })
      .map(a => {
        const operation = a[1].op[1]
        return { account: operation.from, amount: operation.amount }
      })
      .sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount))
    commit('updateSponsors', sponsors)
  }
}
