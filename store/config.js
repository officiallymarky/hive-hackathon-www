export const state = () => ({
  mainAccount: process.env.MAIN_ACCOUNT || 'hivehackathon',
  prizePoolAccount: process.env.PRIZEPOOL_ACCOUNT || 'prizepool'
})

export const mutations = {

}

export const getters = {
  mainAccount: (state) => {
    return state.mainAccount
  },
  prizePoolAccount: (state) => {
    return state.prizePoolAccount
  },
}
