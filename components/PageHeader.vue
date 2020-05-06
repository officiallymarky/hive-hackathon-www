<template>
  <div
    class="relative pt-16 pb-32 flex content-center items-center justify-center"
    style="min-height: 66vh;">
    <div
      class="absolute top-0 w-full h-full bg-center bg-cover"
      style='background-image: url(https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&q=80);'>
      <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black">
      </span>
    </div>
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="pr-12">
            <h1 class="text-white font-semibold text-5xl">
              {{ title }}
            </h1>
            <p class="mt-4 text-lg text-gray-300">
              {{ headline }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    title: {
      required: true,
      type: String
    },
    headline: {
      required: true,
      type: String
    }
  },
  data () {
    return {

    }
  }
}
</script>
