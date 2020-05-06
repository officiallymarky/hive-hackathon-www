<template>
  <div>
    <main>
      <page-header title="About the Hackathon" headline="Checkout the latest news about the contest" next-section-bg="text-white"></page-header>

      <section class="pb-20 bg-white -mt-24">
        <div class="container mx-auto px-4">
          <div class="container mx-auto px-4 pt-24 pb-48">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-10/12 px-4">
                <h2 class="text-4xl font-semibold">Here’s the deal</h2>
                <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
                  You will have two weeks (14 days) to complete an exclusive project for Hive. Your project can be anything that benefits the Hive ecosystem.
                </p>

                <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
                  The top three entries will win a portion of the total reward pool based on their position:
                </p>

                <ul class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
                  <li>First Place 50%</li>
                  <li>Second Place 30%</li>
                  <li>Third Place 20%</li>
                </ul>

                <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
                  If you want to contribute to the reward pool, send a transfer of Hive (no HBD please) to @prizepool and the amount will be added to the reward pool and 100% will be distributed to the winners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative block bg-gray-300 pt-24 pb-48">
        <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style="height: 80px; transform: translateZ(0px);">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-gray-900 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-white text-4xl font-semibold">Judging</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-700">
                The length of time to pick winners will depend on how many entries and may take up to a week or longer. I will provide updates if I need more time to decide on the winners.
              </p>
              <p class="text-lg leading-relaxed m-4 text-gray-700">
                Each entry will be scored based on these metrics:
              </p>

              <ul class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
                <li>Originality</li>
                <li>Creativity</li>
                <li>Functionality</li>
                <li>Usefulness</li>
              </ul>
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
import PageHeader from '@/components/PageHeader'

export default {
  name: "about-page",
  components: {
    PageHeader
  },
  computed: {
  },
  mounted () {
  }
}
</script>
