<script>
import {ref} from "vue";

export default {
  setup() {
    const text = ref(" NEW PRODUCT");
    const title = ref(" XX99 MARK II HEADPHONES");
    const description = ref("Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.");
    const buttons = ref("SEE PRODUCT");
    return {
      text,
      title,
      description,
      buttons
    }
  }
}
</script>

<template>
  <div class="relative flex flex-col lg:flex-row items-center bg-[#0E0E0E] min-h-screen lg:px-40 rounded-b-lg">
    <!-- Background image for small screens -->
    <div class="absolute inset-0 bg-no-repeat bg-cover bg-center lg:hidden"
         style="background-image: url('/public/assets/Bitmap.png');"></div>

    <!-- Text section -->
    <div
        class="flex flex-col text-white w-full max-w-lg px-10 lg:px-0 lg:w-1/2 lg:pr-30 z-20 lg:relative lg:transform lg:-translate-y-20">
      <!-- Small product label -->
      <h3 class="uppercase text-sm tracking-widest text-gray-400 mb-4 mt-5 ">{{ text }}</h3>

      <!-- Main product title -->
      <h1 class="text-4xl lg:text-[56px] lg:leading-[56px] font-bold lg:tracking-widest mb-6">{{ title }}</h1>

      <!-- Product description -->
      <p class="text-[15px] leading-[25px] lg:text-lg text-gray-300 mb-8">
        {{ description }}
      </p>

      <!-- Button with hover effect -->
      <button
          class="py-3 px-6 text-sm lg:text-[13px] text-white bg-orange-500 hover:bg-orange-400 transition duration-300 tracking-wide lg:mr-72">
        {{ buttons }}
      </button>
    </div>

    <!-- Image section for large screens -->
    <div class="hidden lg:block lg:relative lg:transform lg:-translate-y-20 lg:pl-20 z-10">
      <img src="/public/assets/Bitmap.png" alt="Product Image" class="w-full h-auto">
    </div>
  </div>
</template>



