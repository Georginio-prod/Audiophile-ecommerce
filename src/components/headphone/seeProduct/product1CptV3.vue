<script>
import {ref} from "vue";
import ImageCpt from "@/components/imageCpt.vue";
import textImg from "@/components/text&Img.vue";

export default {
  components: {ImageCpt, textImg},
  setup() {
    const titre1 = ref("FEATURES")
    const titre2 = ref("IN THE BOX")
    const items = ref([
      '1x Headphone Unit',
      '2x Replacement Earcups',
      '1x User Manual',
      '1x 3.5mm 5m Audio Cable',
      // '1x Travel Bag'
    ])

    return {titre1, titre2, items}

  },
  data() {
    return {
      conteur: 1,
    };
  },
  methods: {
    decrement() {
      if (this.conteur > 1) {
        this.conteur--;
      }
    },
    increment() {
      this.conteur++;
    }
  }
};
</script>

<template>
  <p class="flex px-6 lg:px-40 lg:translate-y-28 translate-y-12 opacity-50">
    <RouterLink :to="{ path: '/HeadPhones', query: { button: 'HEADPHONES' } }">Go Back</RouterLink>
  </p>
  <div class="bg-white px-6 py-16 lg:py-40 sm:px-10 md:px-20 lg:px-40 lg:gap-40 flex flex-col gap-[88px]">

    <div class="flex flex-col max-w-7xl lg:flex-row lg:gap-16 xl:gap-32">
      <div class="lg:w-1/2 pb-10">
        <img
            alt=""
            class="rounded-lg w-full h-auto object-cover"
            src="/public/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"
        >
      </div>
      <div
          class="text-black flex flex-col gap-6 lg:text-start lg:w-1/2 lg:max-w-[445px] lg:translate-y-14 lg:gap-0">
        <!--        <h1 class="text-hov tracking-[10px] uppercase text-sm pt-8">-->
        <!--          New Product-->
        <!--        </h1>-->
        <p class="text-[28px] sm:text-[32px] tracking-wider font-bold lg:text-4xl lg:tracking-[1.43px] lg:pt-4">
          XX59 <br>
          Headphones
        </p>
        <h2 class="opacity-50 text-[15px] leading-[25px] font-medium lg:py-8">
          Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The
          stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
        </h2>

        <h3 class="text-lg font-bold tracking-[1.29px] lg:pb-11">
          $ 899
        </h3>
        <div class="flex gap-4">
          <div class="flex justify-between items-center bg-[#F1F1F1] px-4 py-1 w-28">
            <button class="opacity-25" @click="decrement">-</button>
            <span>{{ conteur }}</span>
            <button class="opacity-25" @click="increment">+</button>
          </div>

          <button
              class="bg-hov text-white py-3 px-7 tracking-wide sm:w-auto hover:bg-opacity-90 transition-colors duration-300 text-[13px]">
            <RouterLink to="/Product1">ADD TO CART</RouterLink>
          </button>
        </div>
      </div>
    </div>

    <div class=" flex flex-col lg:flex-row w-full lg:gap-[125px] font-medium text-[15px]  ">
      <div class="lg:w-8/12 :w-full  pb-[88px]">
        <p class="font-bold text-[32px] tracking-[1.14px] leading-9 lg:pb-8 pb-6">
          {{ titre1 }}
        </p>
        <h1 class="opacity-50">
          These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its
          compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission
          is assured by the latest wireless technology engineered for audio synchronization with videos.
        </h1>
        <br>
        <h1 class="opacity-50">

          More than a simple pair of headphones, this headset features a pair of built-in microphones for clear,
          hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive
          thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do
          so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C. </h1>
      </div>

      <div class="lg:w-4/12 w-full">
        <div>
          <p class="font-bold text-[32px] tracking-[1.14px] leading-9 lg:pb-8 pb-6">
            {{ titre2 }}
          </p>
          <ul class="flex flex-col gap-2">
            <li v-for="(item, index) in items" :key="index">
              <span class="text-hov pr-6">{{ item.split(' ')[0] }}</span> <!-- Change the color of the number -->
              <span class="opacity-50">{{ item.slice(2) }}</span> <!-- Display the rest of the item text -->
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-5 lg:gap-7">
      <div class="flex flex-col gap-5 lg:gap-[29px] lg:basis-1/2">
        <img alt="image" class="rounded-lg lg:hidden object-cover w-full"
             src="/public/assets/product-xx59-headphones/mobile/image-gallery-1.jpg">
        <img alt="image" class="rounded-lg hidden lg:block h-[280px] object-cover w-full"
             src="/public/assets/product-xx59-headphones/desktop/image-gallery-1.jpg">
        <img alt="image" class="rounded-lg lg:hidden object-cover w-full"
             src="/public/assets/product-xx59-headphones/mobile/image-gallery-2.jpg">
        <img alt="image" class="rounded-lg lg:block hidden h-[280px] object-cover w-full"
             src="/public/assets/product-xx59-headphones/desktop/image-gallery-2.jpg">
      </div>
      <div class="lg:basis-1/2">
        <img alt="image" class="rounded-lg lg:hidden object-cover w-full"
             src="/public/assets/product-xx59-headphones/mobile/image-gallery-3.jpg">
        <img alt="image" class="rounded-lg lg:block hidden h-[590px] object-cover w-full"
             src="/public/assets/product-xx59-headphones/desktop/image-gallery-3.jpg">
      </div>
    </div>

    <div class="flex flex-col justify-center items-center">
      <p class="lg:pb-16 pb-10 text-3xl font-bold tracking-tight uppercase">
        you may also like
      </p>
      <div class="flex flex-col lg:flex-row gap-8">
        <div class="flex flex-col justify-center items-center">
          <img alt="" class="rounded-lg lg:block hidden"
               src="/public/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg">

          <img alt="" class="rounded-lg lg:hidden"
               src="/public/assets/shared/mobile/image-xx99-mark-two-headphones.jpg">

          <p class="font-bold tracking-[1.71px] text-2xl lg:pt-10 lg:pb-8 py-8">
            XX99 MARK I
          </p>
          <div>
            <button
                class="bg-hov text-white hover:bg-[#FBAF85] py-3 px-7 tracking-wide sm:w-auto hover:bg-opacity-90 transition-colors duration-300 text-[13px]">
              SEE PRODUCT
            </button>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center">
          <img alt="" class="rounded-lg lg:block hidden"
               src="/public/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg">

          <img alt="" class="rounded-lg lg:hidden"
               src="/public/assets/shared/mobile/image-xx99-mark-one-headphones.jpg">
          <p class="font-bold tracking-[1.71px] text-2xl lg:pt-10 lg:pb-8 py-8">
            XX59
          </p>
          <div>
            <button
                class="bg-hov text-white hover:bg-[#FBAF85] py-3 px-7 tracking-wide sm:w-auto hover:bg-opacity-90 transition-colors duration-300 text-[13px]">
              SEE PRODUCT
            </button>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center">
          <img alt="" class="rounded-lg lg:block hidden"
               src="/public/assets/product-zx9-speaker/desktop/image-product.jpg">

          <img alt="" class="rounded-lg lg:hidden"
               src="/public/assets/shared/mobile/image-zx9-speaker.jpg">
          <p class="font-bold tracking-[1.71px] text-2xl lg:pt-10 lg:pb-8 py-8">
            ZX9 SPEAKER
          </p>
          <div>
            <button
                class="bg-hov text-white py-3 hover:bg-[#FBAF85] px-7 tracking-wide sm:w-auto hover:bg-opacity-90 transition-colors duration-300 text-[13px]">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>

    </div>

    <div>
      <image-cpt/>
    </div>

    <div>
      <textImg/>
    </div>
  </div>
</template>
