<template>
    <div class="bg-[#0E0E0E] text-white flex justify-center items-center py-24 font-bold text-[40px] tracking-[1.43px] leading-10">
     {{ activeButton }}
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const activeButton = route.query.button ;
  </script>
  