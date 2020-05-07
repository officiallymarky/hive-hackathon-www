import hivejs from '@hiveio/hive-js'

export const state = () => ({
  posts: []
})

export const mutations = {
  updatePosts (state, data) {
    state.posts = data
  }
}

export const getters = {
  posts: state => {
    return state.posts
  }
}

export const actions = {
  async fetchNews ({ commit, rootGetters }) {
    const mainAccount = rootGetters['config/mainAccount']

    const posts = await hivejs.api.callAsync('bridge.get_account_posts', {
      sort: 'blog',
      account: mainAccount,
      limit: 20,
      start_author: null,
      start_permlink: null
    })

    commit('updatePosts', posts)
  }
}
