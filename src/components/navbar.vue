<template>
  <nav class="bg-black border-gray-200 dark:bg-gray-900 pb-2 pt-8">
    <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:border-b md:border-white md:border-opacity-20 pb-7">
      <!-- SVG Button -->
      <button type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 order-1 md:order-3"
              @click="toggleMenu">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      <!-- Logo -->
      <a href="" class="flex items-center space-x-3 rtl:space-x-reverse order-2 md:order-1">
        <img src="/public/assets/shared/desktop/logo.svg" class="h-8" alt="logo"/>
      </a>

      <!-- Cart Icon -->
      <div class="flex space-x-3 md:space-x-0 rtl:space-x-reverse order-3 md:order-2">
        <img src="/public/assets/shared/desktop/icon-cart.svg" alt="panier" class="w-8 h-8 mx-auto">
      </div>

      <!-- Menu -->
      <div
          :class="{'block': isMenuOpen, 'hidden': !isMenuOpen, 'w-full': true, 'mt-4': true, 'md:flex': true, 'top-full': true, 'left-0': true, 'md:w-auto': true, 'md:order-1': true}"
          id="navbar-cta">
        <ul class="flex flex-col font-bold text-[13px] tracking-widest uppercase p-4 md:p-0 mt-4 text-center rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">
          <li>
            <a href="#"
               class="relative inline-block group hover:!text-hov py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              HOME
              <span
                  class="absolute left-0 -bottom-7 w-0 h-1  bg-hov transition-all duration-300 group-hover:w-full">
              </span>
            </a>
          </li>
          <li>
            <a href="#"
               class="relative inline-block group hover:!text-hov  py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              HEADPHONES
              <span
                  class="absolute left-0 -bottom-7 w-0 h-1  bg-hov transition-all duration-300 group-hover:w-full">
              </span>
            </a>
          </li>
          <li>
            <a href="#"
               class="relative inline-block group hover:!text-hov py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              SPEAKERS
              <span
                  class="absolute left-0 -bottom-7 w-0 h-1  bg-hovtransition-all duration-300 group-hover:w-full">
              </span>
            </a>
          </li>
          <li>
            <a href="#"
               class="relative inline-block group hover:!text-hov py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              EARPHONES
              <span
                  class="absolute left-0 -bottom-7 w-0 h-1  bg-hov transition-all duration-300 group-hover:w-full">
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false, // Initialize to false to hide menu initially
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>
