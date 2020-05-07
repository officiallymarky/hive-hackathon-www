<template>
  <div>
    <main>
      <page-header title="About the Hackathon" headline="Checkout the latest news about the contest"></page-header>

      <page-section bg-color="gray-300">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-10/12 px-4">
            <h2 class="text-4xl font-semibold text-center">Here’s the deal</h2>
            <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
              You will have two weeks (14 days) to complete an exclusive project for Hive. Your project can be anything that benefits the Hive ecosystem.
            </p>

            <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
              The top three entries will win a portion of the total reward pool based on their position:
            </p>

            <ul class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
              <li>- First Place 50%</li>
              <li>- Second Place 30%</li>
              <li>- Third Place 20%</li>
            </ul>

            <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
              If you want to contribute to the reward pool, send a transfer of Hive (no HBD please) to <span class="text-blue-600">@prizepool</span> and the amount will be added to the reward pool and 100% will be distributed to the winners.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap justify-center mt-8">
          <div class="w-full lg:w-10/12 px-4">
            <h4 class="text-2xl font-semibold text-center">How to Enter</h4>
            <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
              All entries need to make a post on Hive with the tag #hackathon with the following information.
            </p>

            <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
              The top three entries will win a portion of the total reward pool based on their position:
            </p>

            <ul class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
              <li>- Description of Project and the problem it solves</li>
              <li>- Link to a public git repo on Github or Gitlab</li>
              <li>- Link to live project</li>
              <li>- [Optional] Video showing the project in action.</li>
            </ul>

            <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-700 font-semibold">
              You must drop a link to your post in #hackathon-entries channel in the <a href="https://discord.gg/mUbak9f" rel="noopener" class="font-semibold text-blue-600">STEMGeeks Discord</a> to be considered.
            </p>

            <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
              It is recommended to use the #technology tag so you can also be featured on <a href="https://stemgeeks.net" rel="noopener" class="font-semibold text-blue-600">STEMGeeks</a> and be eligible for <span class="font-semibold">STEM</span> rewards
            </p>
          </div>
        </div>
      </page-section>

      <page-section bg-color="white">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-10/12 px-4">
            <h2 class="text-4xl font-semibold text-center">Rules</h2>
            <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
              There are some rules that must be followed to be eligible. These rules will be strictly enforced, with no exceptions. Plan accordingly.
            </p>

            <ul class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
              <li>- All projects must be <span class="font-semibold">open source</span> and provide a <span class="font-semibold">public repo</span>.</li>
              <li>- All projects must be unique and your own work, you are free to use only open source elements and your own code to build your project.</li>
              <li>- Any third-party code/libraries used should be mentioned in your entry.</li>
              <li>- Your project must be exclusive to Hive.</li>
              <li>- Your project must be new and have started after the release of this post.</li>
              <li>- You can work in teams and I can split the prize between team members if requested.</li>
              <li>- The deadline is firm and submitting your entry even a second later will disqualify you. Pay attention to the deadline and plan accordingly.</li>
              <li>- You must submit a post with your entry in the #hackathon-entries channel in the <a href="https://discord.gg/mUbak9f" rel="noopener" class="font-semibold text-blue-600">STEMGeeks Discord</a>. Please use this channel only for submitting entries.</li>
            </ul>
          </div>
        </div>
      </page-section>

      <page-section bg-color="gray-900">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-10/12 px-4">
            <h2 class="text-4xl font-semibold text-white text-center">Judging</h2>
            <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-300">
              The length of time to pick winners will depend on how many entries and may take up to a week or longer. I will provide updates if I need more time to decide on the winners.
            </p>
            <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-300">
              Each entry will be scored based on these metrics:
            </p>

            <ul class="text-lg leading-relaxed mt-4 mb-4 text-gray-300">
              <li>- Originality</li>
              <li>- Creativity</li>
              <li>- Functionality</li>
              <li>- Usefulness</li>
            </ul>
          </div>
        </div>
      </page-section>
    </main>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageSection from '@/components/PageSection'

export default {
  name: "about-page",
  components: {
    PageHeader,
    PageSection
  },
  computed: {
  },
  mounted () {
  }
}
</script>
