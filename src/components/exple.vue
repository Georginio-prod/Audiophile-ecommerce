<script>
import {ref} from 'vue'

export default {
  setup() {
    const header = ref('georges')
    const items = ref([
      "georges",
      "etonan",
      "prod"
    ])

    return {
      header,
      items
    }
  }
}


</script>

<template>
  <h1 class="header">{{ header }}</h1>
  <ul>

    <li v-for="item in items"> {{ item }}</li>
  </ul>


</template>

<style>
.header {
  font-size: 30px;
}
</style>