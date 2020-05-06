<template>
  <div>
    <main>
      <page-header title="Latest News" headline="Checkout the latest news about the contest"></page-header>

      <page-section v-if="isLoading">
        <loading></loading>
      </page-section>
      <page-section v-else>
        <post-card v-for="post in posts" :key="post.id" :post="post" class="mb-4"></post-card>
      </page-section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import PageHeader from '@/components/PageHeader'
import PageSection from '@/components/PageSection'
import PostCard from '@/components/PostCard'
import Loading from '@/components/Loading'

export default {
  name: "news-page",
  components: {
    PageHeader,
    PageSection,
    PostCard,
    Loading
  },
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapGetters({
      "posts": "news/posts"
    })
  },
  mounted () {
    if (this.posts && this.posts.length > 0) return

    this.isLoading = true

    this.$store.dispatch('news/fetchNews').then(() => {
      this.isLoading = false
    })
  }
}
</script>
