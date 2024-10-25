<template>
  <div class="w-full items-center justify-center text-white bg-bgColor">
    <div class="flex flex-col items-center justify-center text-white lg:px-40 lg:items-start lg:justify-start">
      <div class="lg:flex lg:justify-between lg:items-center lg:w-full ">
        <div class="mt-[52px]">
          <img alt="logo" src="/public/assets/audiophile 2.png">
        </div>
        <div class="flex flex-col items-center justify-center pt-12 gap-4 lg:flex-row text-[13px] lg:gap-8">
          <button class="hover:text-hov">
            <RouterLink to="/">
              HOME
            </RouterLink>
          </button>
          <button class="hover:text-hov">
            <RouterLink to="/HeadPhones">
              HEADPHONES
            </RouterLink>
          </button>
          <button class="hover:text-hov">
            <RouterLink to="/Speakers">
              SPEAKERS
            </RouterLink>
          </button>
          <button class="hover:text-hov">
            <RouterLink to="/Earphones">
              EARPHONES
            </RouterLink>
          </button>
        </div>
      </div>


      <div
          class="px-6 flex justify-center items-center text-center py-12 lg:text-left lg:px-0 lg:w-[540px] ">
        <p class="text-[15px] leading-[25px] font-medium opacity-50">
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
          specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
          facility
          - we’re open 7 days a week.
        </p>
      </div>

      <div class="pb-12">
        <p class="text-[15px] leading-[25px] font-medium opacity-50">
          Copyright 2021. All Rights Reserved
        </p>
      </div>

      <div class="flex justify-center items-center gap-4 mb-[38px] lg:mb-0 lg:justify-end lg:w-full lg:-translate-y-28">
        <img alt="facebook" class="w-auto h-auto" src="/public/assets/shared/desktop/icon-facebook.svg">
        <img alt="twitter" class="w-auto h-auto" src="/public/assets/shared/desktop/icon-twitter.svg">
        <img alt="instagram" class="w-auto h-auto" src="/public/assets/shared/desktop/icon-instagram.svg">
      </div>

    </div>

  </div>
</template>

<script>
export default {}
</script>