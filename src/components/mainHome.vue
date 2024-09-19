<script>
import {ref} from "vue"

export default {

  setup() {
    const bouton = ref("SEE PRODUCT")

    return {
      bouton,
    }
  }
}
</script>

<template>
  <div class="flex justify-center items-center flex-col px-6 py-24 lg:px-40">
    <div class="flex flex-col gap-16 items-center justify-center w-full lg:flex lg:flex-row  lg:gap-7">
      <div class="flex flex-col items-center justify-center bg-main w-full rounded-lg ">
        <img src="/public/assets/image-removebg-preview(41).png" alt="removebg"
             class=" -translate-y-12 drop-shadow-2xl">
        <p class="-translate-y-6">HEADPHONES</p>
        <div class="flex flex-row items-center justify-center w-full -translate-y-5">
          <p class="pr-3">SHOP</p>
          <img src="/public/assets/shared/desktop/icon-arrow-right.svg" alt="logo">
        </div>
      </div>

      <div class="flex flex-col items-center justify-center bg-main w-full rounded-lg">
        <img src="/public/assets/image-removebg-preview(38).png" alt="speaker"
             class=" -translate-y-12 drop-shadow-2xl">
        <p class="-translate-y-6">SPEAKERS</p>
        <div class="flex flex-row items-center justify-center -translate-y-5 w-full">
          <p class="pr-3">SHOP</p>
          <img src="/public/assets/shared/desktop/icon-arrow-right.svg" alt="logo">
        </div>
      </div>

      <div class="flex flex-col items-center justify-center bg-main w-full rounded-lg">
        <img src="/public/assets/Group 5.png" alt="earphones"
             class=" -translate-y-12 drop-shadow-2xl">
        <p class="-translate-y-6">EARPHONES</p>
        <div class="flex flex-row items-center justify-center -translate-y-5 w-full">
          <p class="pr-3">SHOP</p>
          <img src="/public/assets/shared/desktop/icon-arrow-right.svg" alt="logo">
        </div>
      </div>
    </div>

    <div
        class="flex flex-col items-center justify-center bg-hov w-full rounded-lg mt-[120px] pt-[55px] pb-8 overflow-hidden lg:flex-row lg:px-28 lg:gap-36">

      <div class="flex flex-col items-center justify-center">
        <img src="/public/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="thumbnail"
             style="background-image: url('/public/assets/Group 4.png');
         background-position: center;
         background-repeat: no-repeat;"
             class="flex justify-center items-center lg:hidden"/>

        <div
            style="background-image: url('/public/assets/Group 4.png');
         background-position: center;
         background-repeat: no-repeat;
         width: 410px;
         height: 493px;"
            class="hidden lg:block translate-y-12 justify-center items-center mx-auto">
          <img src="/public/assets/home/desktop/image-speaker-zx9.png" alt="thumbnail"
               class="w-full h-full object-contain"/>
        </div>

      </div>

      <div
          class="flex flex-col lg:items-start lg:justify-start items-center justify-center px-6 -translate-y-8 text-white gap-6">
        <p class="font-bold text-4xl text-center tracking-wide pt-4 lg:text-[56px] lg:leading-[56px] lg:text-left">
          ZX9 SPEAKER
        </p>
        <p class="text-sm font-medium opacity-75 text-center lg:text-left">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <button class="py-3 px-7 bg-black font-bold text-[13px] lg:mt-3 ">
          {{ bouton }}
        </button>
      </div>

    </div>


    <div class="relative flex justify-center items-center w-full lg:flex lg:flex-row mt-6">
      <div class="absolute inset-0 flex flex-col items-start justify-center text-black z-10 pl-6 lg:pl-24">
        <p class="text-[28px] font-bold pb-2">ZX7 SPEAKER</p>
        <button class="py-3 px-7 bg-transparent border border-black font-bold text-[13px] mt-3">
          {{ bouton }}
        </button>
      </div>

      <div class="w-full">
        <img src="/public/assets/home/mobile/image-speaker-zx7.jpg" alt="Background image"
             class="w-full h-auto object-cover lg:hidden">

        <img src="/public/assets/home/desktop/image-speaker-zx7.jpg" alt="Background image"
             class="w-full h-auto object-cover lg:block hidden">

      </div>
    </div>


  </div>


</template>

