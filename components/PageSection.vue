<template>
  <section class="relative block" :class="[`bg-${bgColor}`, padding]">
    <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style="height: 80px; transform: translateZ(0px);">
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="fill-current" :class="`text-${bgColor}`" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>

    <div class="container mx-auto px-4">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    bgColor: {
      default: 'gray-300',
      type: String
    },
    padding: {
      default: 'pt-24 pb-40',
      type: String
    }
  }
}
</script>
