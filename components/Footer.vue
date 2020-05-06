<template>
  <footer class="relative bg-gray-300 pt-8 pb-6">
    <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style="height: 80px; transform: translateZ(0px);">
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0">
        <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">Find out more about Hive!</h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-700">
            Hive is a Fast, Scalable, Powerful blockchain for Web 3.0
          </h5>
          <div class="mt-6">
            <a href="https://hive.io" rel="noopener"><img src="/images/hive_logo.svg" class="h-8"></a>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span class="block uppercase text-gray-600 text-sm font-semibold mb-2">Useful Links</span>
              <ul class="list-unstyled">
                <li>
                  <nuxt-link to="/about" class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">About</nuxt-link>
                </li>
                <li>
                  <a :href="blog" class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">Blog</a>
                </li>
                <li>
                  <a class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="https://github.com/themarkymark-steem/hive-hackathon-www">Github</a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span class="block uppercase text-gray-600 text-sm font-semibold mb-2">Other Resources</span>
              <ul class="list-unstyled">
                <li>
                  <a href="https://stemgeeks.net/" target="_blank" rel="noopener" class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">stemgeeks.net</a>
                </li>
                <li>
                  <a href="https://hive.io" target="_blank" rel="noopener" class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">hive.io</a>
                </li>
                <li>
                  <a href="https://peakd.com" target="_blank" rel="noopener" class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">peakd.com</a>
                </li>
                <li>
                  <a href="https://hive.blog" target="_blank" rel="noopener" class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">hive.blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Copyright © {{date}} by
            <a href="https://peakd.com/@themarkymark" class="text-gray-600 hover:text-gray-900">@themarkymark</a>
            and
            <a href="https://peakd.com/@themasgartharkymark" class="text-gray-600 hover:text-gray-900">@asgarth</a>.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      date: new Date().getFullYear(),
      blog: `https://peakd.com/@${this.mainAccount}`
    }
  },
  computed: {
    ...mapGetters({
      'mainAccount': 'config/mainAccount'
    })
  }
}
</script>
