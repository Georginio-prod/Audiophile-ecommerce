<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue'
import FooterPage from "@/components/footerPage.vue";

</script>

<template>
  <div id="app">
    <header>
      <navbar />
    </header>
  </div>


  <RouterView />
  <RouterLink />
  <footer>
    <footer-page />
  </footer>
</template>
