<template>
  <div>
    <navbar-component></navbar-component>
    <nuxt />
    <footer-component></footer-component>
  </div>
</template>

<style>

</style>

<script>
import NavbarComponent from "@/components/Navbar.vue";
import FooterComponent from "@/components/Footer.vue";

export default {
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>
