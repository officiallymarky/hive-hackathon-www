<template>
  <div>
    <main>
      <page-header title="First Hive Hackathon" headline="Introducing the first-ever Hive Hackathon: 2 weeks, more than 12,000 HIVE rewards and endless possibilities"></page-header>

      <page-section bg-color="gray-300">
        <div class="flex flex-wrap text-center justify-center">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold">Join the Hackathon</h2>
            <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
              Join the contest and build something useful for one of the best community around. This is just the beginning of the journey
            </p>
          </div>
        </div>
        <div class="flex flex-wrap mt-12 justify-center">
          <div class="w-full lg:w-4/12 px-4 text-center mb-12">
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
          <div class="w-full lg:w-4/12 px-4 text-center mb-12">
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
          <div class="w-full lg:w-4/12 px-4 text-center mb-12">
            <div class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i class="fas fa-people-carry text-xl"></i>
            </div>
            <h5 class="text-xl mt-5 font-semibold">Join as a Group</h5>
            <p class="mt-2 mb-4 text-gray-700">
              You can work in teams and I can split the prize between team members if requested.
            </p>
          </div>

          <div class="w-full lg:w-4/12 px-4 text-center mb-12">
            <div class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i class="fas fa-award text-xl"></i>
            </div>
            <h6 class="text-xl mt-5 font-semibold">
              Winners
            </h6>
            <p class="mt-2 mb-4 text-gray-700">
              The top three entries will win a portion of the total reward pool based on their position
            </p>
          </div>
          <div class="w-full lg:w-4/12 px-4 text-center mb-12">
            <div class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i class="fas fa-calendar-alt text-xl"></i>
            </div>
            <h5 class="text-xl mt-5 font-semibold">
              Deadline
            </h5>
            <p class="mt-2 mb-4 text-gray-700">
              This hackathon runs for 2 weeks and will end on May 16th, 2020
            </p>
          </div>
          <div class="w-full lg:w-4/12 px-4 text-center mb-12">
            <div class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i class="fas fa-users text-xl"></i>
            </div>
            <h5 class="text-xl mt-5 font-semibold">Community</h5>
            <p class="mt-2 mb-4 text-gray-700">
              Join the Hive community and create something amazing
            </p>
          </div>
        </div>
      </page-section>

      <page-section bg-color="gray-900">
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
                <h5 class="text-xl font-bold text-white"><a :href="`${hiveAppUrl}/@${sponsor.account}`" rel="noopener">@{{ sponsor.account }}</a></h5>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  {{ sponsor.amount }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </page-section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import PageHeader from '@/components/PageHeader'
import PageSection from '@/components/PageSection'

export default {
  name: "home-page",
  components: {
    PageHeader,
    PageSection
  },
  computed: {
    ...mapGetters({
      "mainAccount": "config/mainAccount",
      "sponsors": "competitions/sponsors",
      "hiveAppUrl": "config/hiveAppUrl"
    })
  },
  mounted () {
    this.$store.dispatch('competitions/fetchSponsors')
  }
}
</script>
