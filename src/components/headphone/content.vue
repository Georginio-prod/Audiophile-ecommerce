<template>
  <div class=" bg-white px-6 pt-16 sm:px-10 md:px-20 lg:px-40 gap-y-[120px] flex flex-col">
    <div class="flex flex-col max-w-7xl lg:flex-row lg:gap-16 xl:gap-32">
      <div class=" lg:w-1/2">
        <img
            src="/public/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
            alt=""
            class="rounded-lg w-full h-auto object-cover"
        >
      </div>
      <div
          class="text-center text-black flex flex-col gap-6 lg:text-start lg:w-1/2 lg:max-w-[445px] lg:transform lg:translate-y-10 lg:gap-0">
        <h1 class="text-hov tracking-[10px] uppercase text-sm pt-8">
          New Product
        </h1>
        <p class="text-[28px] sm:text-[32px] tracking-wider font-bold lg:text-4xl lg:tracking-[1.43px] lg:pt-4 lg:pb-8">
          XX99 Mark II Headphones
        </p>
        <h2 class="opacity-50 text-[15px] leading-[25px] font-medium lg:pb-10">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone
          experience by reproducing the balanced depth and precision of studio-quality sound.
        </h2>
        <div>
          <button
              class="bg-hov text-white py-3 px-7 tracking-wide sm:w-auto hover:bg-opacity-90 transition-colors duration-300 text-[13px]">
            SEE PRODUCT
          </button>
        </div>

      </div>
    </div>

    <div class="flex flex-col max-w-7xl lg:flex-row lg:gap-16 xl:gap-32">
      <div class="lg:w-1/2 lg:order-2">
        <img
            src="/public/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
            alt=""
            class="rounded-lg w-full h-auto object-cover"
        >
      </div>
      <div
          class="text-center text-black flex flex-col gap-6 lg:text-start lg:w-1/2 lg:max-w-[445px] lg:transform lg:translate-y-14 lg:gap-0 lg:order-1">

        <p class="text-[28px] sm:text-[32px] tracking-wider font-bold lg:text-4xl lg:tracking-[1.43px] lg:pt-4 lg:pb-8">
          XX99 Mark I Headphones
        </p>
        <h2 class="opacity-50 text-[15px] leading-[25px] font-medium lg:pb-10">
          As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction
          for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
        </h2>
        <div>
          <button
              class="bg-hov text-white py-3 px-7 tracking-wide sm:w-auto hover:bg-opacity-90 transition-colors duration-300 text-[13px]">
            SEE PRODUCT
          </button>
        </div>

      </div>
    </div>

    <div class="flex flex-col max-w-7xl lg:flex-row lg:gap-16 xl:gap-32">
      <div class="lg:w-1/2 ">
        <img
            src="/public/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"
            alt=""
            class="rounded-lg w-full h-auto object-cover"
        >
      </div>
      <div
          class="text-center text-black flex flex-col gap-6 lg:text-start lg:w-1/2 lg:max-w-[445px] lg:transform lg:translate-y-14 lg:gap-0">

        <p class="text-[28px] sm:text-[32px] tracking-wider font-bold lg:text-4xl lg:tracking-[1.43px] lg:pt-4 lg:pb-8">
          XX59 <br>
          Headphones
        </p>
        <h2 class="opacity-50 text-[15px] leading-[25px] font-medium lg:pb-10">
          Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The
          stylish yet durable versatile wireless headset
          is a brilliant companion at home or on the move.
        </h2>
        <div>
          <button
              class="bg-hov text-white py-3 px-7 tracking-wide sm:w-auto hover:bg-opacity-90 transition-colors duration-300 text-[13px]">
            SEE PRODUCT
          </button>
        </div>

      </div>
    </div>

    <div class="pt-10">
      <image-cpt/>
    </div>

  </div>

  <div class="px-6 pt-16 sm:px-10 md:px-20 lg:px-40 lg:py-40">
    <textImg/>
  </div>


</template>

<script setup>
// Vous pouvez ajouter ici la logique du composant si nécessaire
import ImageCpt from "@/components/imageCpt.vue";

import textImg from "@/components/text&Img.vue";
</script>
