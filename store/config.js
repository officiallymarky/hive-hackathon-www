export const state = () => ({
  mainAccount: process.env.MAIN_ACCOUNT || 'hivehackathon',
  prizePoolAccount: process.env.PRIZEPOOL_ACCOUNT || 'prizepool',
  hiveAppUrl: process.env.HIVE_APP_URL || 'https://peakd.com'
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
  hiveAppUrl: (state) => {
    return state.hiveAppUrl
  }
}
