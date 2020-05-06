<template>
  <div>
    <main>
      <page-header title="First Hive Hackathon" headline="Introducing the first-ever Hive Hackathon: 2 weeks, more than 12,000 HIVE rewards and endless possibilities"></page-header>

      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Winners</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    The top three entries will win a portion of the total reward pool based on their position
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i class="fas fa-calendar-alt"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Deadline</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    This hackathon runs for 2 weeks and will end on May 16th, 2020
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i class="fas fa-users"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Community</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Join the Hive community and create something amazing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="container mx-auto px-4 pt-24 pb-48">
            <div class="flex flex-wrap text-center justify-center">
              <div class="w-full lg:w-6/12 px-4">
                <h2 class="text-4xl font-semibold">Join the Hackathon</h2>
                <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
                  Join the contest and build something useful for one of the best community around. This is just the beginning of the journey
                </p>
              </div>
            </div>
            <div class="flex flex-wrap mt-12 justify-center">
              <div class="w-full lg:w-3/12 px-4 text-center">
                <div class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i class="fas fa-code text-xl"></i>
                </div>
                <h6 class="text-xl mt-5 font-semibold">
                  Open Source
                </h6>
                <p class="mt-2 mb-4 text-gray-700">
                  All projects must be open source and provide a public repo.
                </p>
              </div>
              <div class="w-full lg:w-3/12 px-4 text-center">
                <div class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i class="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 class="text-xl mt-5 font-semibold">
                  Built by You
                </h5>
                <p class="mt-2 mb-4 text-gray-700">
                  All projects must be unique and your own work (you are free to use open source elements).
                </p>
              </div>
              <div class="w-full lg:w-3/12 px-4 text-center">
                <div class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i class="fas fa-users text-xl"></i>
                </div>
                <h5 class="text-xl mt-5 font-semibold">Join as a Group</h5>
                <p class="mt-2 mb-4 text-gray-700">
                  You can work in teams and I can split the prize between team members if requested.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative block bg-gray-900 pt-24 pb-48">
        <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style="height: 80px; transform: translateZ(0px);">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-gray-900 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-white text-4xl font-semibold">Contest Supporters</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
                All the supporters who have contributed to the prize pool.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div v-for="sponsor in sponsors" :key="sponsor.account" class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6 pb-6">
                <img :src="`https://images.hive.blog/u/${sponsor.account}/avatar`" :alt="sponsor.account" class="shadow-lg rounded-full max-w-full mx-auto bg-white border-2 border-white" style="max-width: 120px;"/>
                <div class="pt-1 text-center">
                  <h5 class="text-xl font-bold text-white"><a :href="`https://peakd.com/@${sponsor.account}`" rel="noopener">@{{ sponsor.account }}</a></h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    {{ sponsor.amount }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import PageHeader from '@/components/PageHeader'

export default {
  name: "home-page",
  components: {
    PageHeader
  },
  computed: {
    ...mapGetters({
      "mainAccount": "config/mainAccount",
      "sponsors": "competitions/sponsors"
    })
  },
  mounted () {
    console.log('Main account: ', this.mainAccount)

    this.$store.dispatch('competitions/fetchSponsors')
  }
}
</script>
