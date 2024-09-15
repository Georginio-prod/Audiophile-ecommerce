<script setup>
import {RouterLink, RouterView} from 'vue-router'
import navbar from './components/navbar.vue'
import Exple from "@/components/exple.vue";
import HomePage from "@/components/homePage.vue";
</script>

<template>
  <navbar/>
  
  <HomePage/>
  <RouterView/>
</template>


