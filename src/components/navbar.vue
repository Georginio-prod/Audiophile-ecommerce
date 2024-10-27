<template>
  <nav class="bg-[#0E0E0E] rounded-t-lg dark:bg-gray-900  pt-8 z-40">
    <div class="md:w-full md:px-40 flex flex-wrap items-center justify-between mx-auto p-4 ">
      <!-- SVG Button -->
      <button
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 order-1 md:order-3"
          type="button"
          @click="toggleMenu">
        <svg aria-hidden="true" class="w-5 h-5" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1h15M1 7h15M1 13h15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2"/>
        </svg>
      </button>

      <!-- Logo -->
      <a class="flex items-center space-x-3 rtl:space-x-reverse order-2 md:order-1" href="">
        <RouterLink to="/">
          <img alt="logo" class="h-8" src="/public/assets/shared/desktop/logo.svg"/>
        </RouterLink>
      </a>

      <!-- Cart Icon -->
      <div class="flex space-x-3 md:space-x-0 rtl:space-x-reverse order-3 md:order-2">
        <img alt="panier" class="w-8 h-8 mx-auto" src="/public/assets/shared/desktop/icon-cart.svg">
      </div>

      <!-- Menu -->
      <div
          id="navbar-cta"
          :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen, 'w-full': true, 'mt-4': true, 'md:flex': true, 'top-full': true, 'left-0': true, 'md:w-auto': true, 'md:order-1': true }">
        <ul
            class="flex flex-col font-bold text-[13px] tracking-widest uppercase p-4 md:p-0 mt-4 text-center rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">
          <li>
            <RouterLink
                class="relative inline-block group hover:!text-hov py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                to="/">
              HOME
              <span class="absolute left-0 -bottom-7 w-0 h-1  bg-hov transition-all duration-300 group-hover:w-full">
              </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: '/HeadPhones', query: { button: 'HEADPHONES' } }"
                        class="relative inline-block group hover:!text-hov py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              HEADPHONES
              <span class="absolute left-0 -bottom-7 w-0 h-1  bg-hov transition-all duration-300 group-hover:w-full">
              </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: '/Speakers', query: { button: 'SPEAKERS' } }"
                        class="relative inline-block group hover:!text-hov py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              SPEAKERS
              <span class="absolute left-0 -bottom-7 w-0 h-1  bg-hov transition-all duration-300 group-hover:w-full">
              </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: '/Earphones', query: { button: 'EARPHONES' } }"
                        class="relative inline-block group hover:!text-hov py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              EARPHONES
              <span class="absolute left-0 -bottom-7 w-0 h-1  bg-hov transition-all duration-300 group-hover:w-full">
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="md:border-b md:border-white md:border-opacity-20 pb-3 mx-40 z-40"></div>
  </nav>
</template>

<script>
import Divider from "@/components/divider.vue";

export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>
