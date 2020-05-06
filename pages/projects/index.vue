<template>
  <div>
    <main>
      <page-header title="Projects" headline="Latest Projects and Updates"></page-header>

      <page-section bg-color="white">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-10/12 px-4 text-center">
            <h2 class="text-4xl font-semibold">Coming Soon ...</h2>
            <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
              Stay tuned for some awesome projects ;)
            </p>
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
  name: "projects-page",
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
