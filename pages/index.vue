<template>
  <section class="container">
      <logo/>
      <!--<h1 class="title">-->
        <!--NUXT-->
      <!--</h1>-->
      <!--<h2 class="subtitle">-->
        <!--这是我的个人简历-->
      <!--</h2>-->
      <!--<div class="links">-->
        <!--<a href="https://nuxtjs.org/" target="_blank" class="button&#45;&#45;green">Documentation</a>-->
        <!--<a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button&#45;&#45;grey">GitHub</a>-->
      <!--</div>-->
  </section>
</template>

<script>
import Logo from '../components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="stylus">
@import "../stylus/index"
</style>
