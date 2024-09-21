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
      <div class="flex flex-col items-center justify-center bg-main w-full h-44 rounded-lg ">
        <img src="/public/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="removebg"
             class=" -translate-y-10 drop-shadow-2xl w-44 h-40">
        <p class="-translate-y-10">HEADPHONES</p>
        <div class="flex flex-row items-center justify-center w-full -translate-y-8">
          <p class="pr-3">SHOP</p>
          <img src="/public/assets/shared/desktop/icon-arrow-right.svg" alt="logo">
        </div>
      </div>

      <div class="flex flex-col items-center justify-center bg-main w-full h-44 rounded-lg">
        <img src="/public/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="removebg"
             class=" -translate-y-10 drop-shadow-2xl w-44 h-40 ">
        <p class="-translate-y-10">SPEAKERS</p>
        <div class="flex flex-row items-center justify-center -translate-y-8 w-full">
          <p class="pr-3">SHOP</p>
          <img src="/public/assets/shared/desktop/icon-arrow-right.svg" alt="logo">
        </div>
      </div>

      <div class="flex flex-col items-center justify-center bg-main w-full h-44 rounded-lg">
        <img src="/public/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="removebg"
             class=" -translate-y-10 drop-shadow-2xl w-44 h-40">
        <p class="-translate-y-10">EARPHONES</p>
        <div class="flex flex-row items-center justify-center -translate-y-8 w-full">
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
        <p class="font-bold text-4xl text-center tracking-[2px] pt-4 lg:text-[56px] lg:leading-[56px] lg:text-left">
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


    <div class="relative flex justify-center items-center w-full lg:flex lg:flex-row mt-6 ">
      <div class="absolute inset-0 flex flex-col items-start justify-center text-black z-10 pl-6 lg:pl-24">
        <p class="text-[28px] font-bold pb-2 tracking-[2px]">ZX7 SPEAKER</p>
        <button class="py-3 px-7 bg-transparent border border-black font-bold text-[13px] mt-3">
          {{ bouton }}
        </button>
      </div>

      <div class="w-full">
        <img src="/public/assets/home/mobile/image-speaker-zx7.jpg" alt="Background image"
             class="w-full h-auto object-cover lg:hidden rounded-lg">

        <img src="/public/assets/home/desktop/image-speaker-zx7.jpg" alt="Background image"
             class="w-full h-auto object-cover lg:block hidden rounded-lg">

      </div>
    </div>

    <div class="flex flex-col items-center justify-center w-full lg:flex lg:flex-row mt-6 gap-6 rounded-lg">
      <div class="w-full lg:w-1/2">
        <img src="/public/assets/home/desktop/image-earphones-yx1.jpg" alt="earphones" class="rounded-lg w-full">
      </div>

      <div class="w-full lg:w-1/2 h-auto object-cover bg-main py-10 pl-6 rounded-lg lg:py-[95px] lg:pl-[95px]">
        <p class="text-[28px] font-bold pb-3 tracking-[2px]">YX1 EARPHONES</p>
        <button class="py-3 px-7 bg-transparent border border-black font-bold text-[13px] mt-3 ">
          {{ bouton }}
        </button>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center w-full lg:flex lg:flex-row mt-[120px] gap-10 lg:gap-24">
      <div class="lg:order-2">
        <img src="/public/assets/shared/mobile/image-best-gear.jpg" alt="image" class="rounded-lg lg:hidden">

        <img src="/public/assets/shared/desktop/image-best-gear.jpg" alt="image"
             class="rounded-lg hidden lg:block ">

      </div>

      <div
          class="flex flex-col text-center justify-center items-center w-full lg:order-1 lg:text-left lg:justify-start lg:items-start  lg:w-1/2">
        <p class="pb-8 text-[28px] font-bold tracking-[1px] lg:text-[40px] lg:leading-[44px] lg:tracking-[1.43px]">
          BRINGING YOU THE <span class="text-hov">BEST</span> AUDIO GEAR
        </p>
        <h3 class="text-[15px] font-medium leading-7 opacity-50">
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
          speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to
          browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who
          make Audiophile the best place to buy your portable audio equipment.
        </h3>
      </div>
    </div>

  </div>


</template>

