<template>
  <div class="max-w-sm w-full lg:min-w-full lg:flex">
    <div class="h-48 lg:h-auto w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      :style="`background-image: url('https://images.hive.blog/300x200/${cover}'); min-width: 200px;`"
      :title="post.title">
    </div>
    <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col flex-grow justify-between leading-normal">
      <div class="flex items-center mb-2">
        <img class="w-10 h-10 rounded-full border-2 mr-4" :src="`https://images.hive.blog/u/${post.author}/avatar/small`" :alt="post.author">
        <div class="text-sm">
          <a :href="`${hiveAppUrl}/@${post.author}`" rel="noopener" class="text-gray-900 leading-none">{{ post.author }}</a>
          <p class="text-gray-600">{{ timeago }}</p>
        </div>
      </div>
      <a :href="`${hiveAppUrl}${post.url}`" rel="noopener" class="block">
        <div class="text-gray-900 font-bold text-xl mb-2">{{ post.title }}</div>
        <p class="text-gray-700 text-sm">{{ bodyPreview }}</p>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { Remarkable } from 'remarkable'
import ellipsis from 'text-ellipsis'
import striptags from 'striptags'
import { parseISO, formatDistance } from 'date-fns'

const remarkable = new Remarkable({ html: true })

export default {
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  computed: {
    ...mapGetters({
      "hiveAppUrl": "config/hiveAppUrl"
    }),
    cover: function () {
      return this.post.json_metadata && this.post.json_metadata.image && this.post.json_metadata.image[0]
    },
    timeago: function () {
      return formatDistance(parseISO(this.post.created), new Date())
    },
    bodyPreview: function () {
      let plainText = striptags(remarkable.render(striptags(this.post.body)))
      plainText = ellipsis(plainText.trim(), 150, { ellipsis: '...' })
      plainText = plainText.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/(?:https?|ftp):\/\/[\S]+/g, '')
      return plainText
    }
  }
}
</script>
