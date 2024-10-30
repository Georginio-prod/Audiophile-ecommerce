<template>
  <div class=" bg-white px-6 pt-16 lg:pt-40 sm:px-10 md:px-20 lg:px-40 gap-y-[120px] flex flex-col">
    <div class="flex flex-col max-w-7xl lg:flex-row lg:gap-16 xl:gap-32">
      <div class=" lg:w-1/2">
        <img
            alt=""
            class="rounded-lg w-full h-auto object-cover pb-8"
            src="/public/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
        >
      </div>
      <div
          class="text-center text-black flex flex-col gap-6 lg:text-start lg:w-1/2 lg:max-w-[445px] lg:transform lg:translate-y-10 lg:gap-0">
        <h1 class="text-hov tracking-[10px] uppercase text-sm pt-8">
          New Product
        </h1>
        <p class="text-[28px] sm:text-[32px] tracking-wider font-bold lg:text-4xl lg:tracking-[1.43px] lg:pt-4 lg:pb-8">
          ZX9 <br>
          SPEAKER
        </p>
        <h2 class="opacity-50 text-[15px] leading-[25px] font-medium lg:pb-10">
          Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers
          truly wireless connectivity -- creating
          new possibilities for more pleasing and practical audio setups.
        </h2>
        <div>
          <button
              class="bg-hov text-white hover:bg-[#FBAF85] py-3 px-7 tracking-wide sm:w-auto hover:bg-opacity-90 transition-colors duration-300 text-[13px]">
            <RouterLink to="/SpeakerPr1">SEE PRODUCT</RouterLink>
          </button>
        </div>

      </div>
    </div>

    <div class="flex flex-col max-w-7xl lg:flex-row lg:gap-16 xl:gap-32">
      <div class="lg:w-1/2 lg:order-2">
        <img
            alt=""
            class="rounded-lg w-full h-auto object-cover pb-8"
            src="/public/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"
        >
      </div>
      <div
          class="text-center text-black flex flex-col gap-6 lg:text-start lg:w-1/2 lg:max-w-[445px] lg:transform lg:translate-y-14 lg:gap-0 lg:order-1">

        <p class="text-[28px] sm:text-[32px] tracking-wider font-bold lg:text-4xl lg:tracking-[1.43px] lg:pt-4 lg:pb-8">
          ZX7 <br>
          SPEAKER
        </p>
        <h2 class="opacity-50 text-[15px] leading-[25px] font-medium lg:pb-10">
          Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile
          components
          that represents the top of the line powered speakers for home or studio use.
        </h2>
        <div>
          <button
              class="bg-hov text-white py-3 px-7 hover:bg-[#FBAF85] tracking-wide sm:w-auto hover:bg-opacity-90 transition-colors duration-300 text-[13px]">
            <RouterLink to="/SpeakerPr2">SEE PRODUCT</RouterLink>
          </button>
        </div>

      </div>
    </div>

    <div class="pt-10">
      <image-cpt/>
    </div>

  </div>

  <div class="px-6 py-40 sm:px-10 md:px-20 lg:px-40 ">
    <textImg/>
  </div>


</template>

<script setup>
// Vous pouvez ajouter ici la logique du composant si nécessaire
import ImageCpt from "@/components/imageCpt.vue";
import textImg from "@/components/text&Img.vue";
import Divider from "@/components/divider.vue";


</script>
