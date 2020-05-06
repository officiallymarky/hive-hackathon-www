<template>
  <nav class="fixed z-50 w-full bg-gray-900 bg-opacity-75 top-0 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <nuxt-link to="/">
          <img src="/images/logo.svg" class="brand-logo">
        </nuxt-link>
        <button @click="toggleNavbar()"
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none">
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" :class="{ 'hidden': !showMenu, 'block': showMenu }">
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <!--
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing">
              <i class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"></i> Docs
            </a>
          </li>
          -->
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <nuxt-link to="/news" class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
              News
            </nuxt-link>
          </li>
          <li class="flex items-center">
            <nuxt-link to="/projects" class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
              Projects
            </nuxt-link>
          </li>
          <li class="flex items-center">
            <nuxt-link to="/about" class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
              About
            </nuxt-link>
          </li>
          <li class="flex items-center">
            <a href="https://hive.io" target="_blank" rel="noopener" class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
              <i class="lg:text-gray-300 text-gray-500 fab logo-hive text-lg leading-lg"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.brand-logo {
  height: 38px;
}
</style>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu
    }
  }
}
</script>
