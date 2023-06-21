<template>
  <div>
    <div class="relative">
      <NuxtLink to="/services/detail">
        <VueSlickCarousel :arrows="false" @afterChange="handleChangeCarousel">
          <div
            v-for="(carousel, index) in service.carousel"
            :key="index"
            class="relative"
          >
            <img :src="carousel.image" class="w-full h-full" />
            <div
              class="
                absolute
                bottom-0
                left-0
                w-full
                px-5
                pt-1
                pb-9
                bg-[#19110B60]
              "
            >
              <p class="text-base font-bold text-white">{{ carousel.title }}</p>
              <p class="text-sm text-white">{{ carousel.description }}</p>
              <img
                src="~/assets/images/navs/heart.svg"
                class="absolute top-3 right-5 filter invert"
              />
            </div>
          </div>
        </VueSlickCarousel>
      </NuxtLink>
      <div class="absolute bottom-4 flex w-full justify-center">
        <ul class="flex">
          <li
            v-for="index in getSliderItemCount"
            :key="index"
            class="w-2.5 h-2.5 mx-0.5 rounded-full border border-white"
            :class="{ 'bg-white': index - 1 == slideIndex }"
          ></li>
        </ul>
      </div>
    </div>
    <div class="px-5 pt-5 flex flex-wrap" v-if="service.hasType">
      <div class="shadow-theme w-16 rounded-[18px] mr-1.5">
        <div class="h-10 flex justify-center items-end">
          <img src="~/assets/images/service_types/1.png" />
        </div>
        <div class="h-9 flex justify-center items-center">
          <span class="text-xs text-[#767676]">Alie</span>
        </div>
      </div>
      <div class="shadow-theme w-16 rounded-[18px] mr-1.5">
        <div class="h-10 flex justify-center items-end">
          <img src="~/assets/images/service_types/2.png" />
        </div>
        <div class="h-9 flex justify-center items-center">
          <span class="text-xs text-[#767676]">Haare</span>
        </div>
      </div>
      <div class="shadow-theme w-16 rounded-[18px] mr-1.5">
        <div class="h-10 flex justify-center items-end">
          <img src="~/assets/images/service_types/3.png" />
        </div>
        <div class="h-9 flex justify-center items-center">
          <span class="text-xs text-[#767676]">Gesicht</span>
        </div>
      </div>
    </div>
    <div class="px-5 py-3">
      <div v-for="(item, index) in service.services" :key="index" class="mb-2">
        <Accordion>
          <template #header>
            <div class="text-base">
              <span class="text-black">{{ item.name }}</span>
              <span class="text-[#767676]">({{ item.count }})</span>
            </div>
          </template>
          <template #body>
            <div class="p-2">
              <div
                v-for="(child, index) in item.children"
                :key="index"
                class="flex justify-between items-center"
                @click="handleClick(service.hasType)"
              >
                <div>
                  <p class="text-base text-[#19110B] leading-normal">
                    {{ child.name }}
                  </p>
                  <p class="text-[10px] text-[#767676]">
                    <span class="mr-7">{{ child.time }}</span>
                    <span>Details</span>
                  </p>
                </div>
                <div class="flex border-l border-l-[#C4C4C4]">
                  <span class="mx-3 text-base text-[#19110B]">
                    {{ child.price }}
                  </span>
                  <NuxtLink to="/services/detail">
                    <img
                      v-if="child.done"
                      src="~/assets/images/icons/check.svg"
                    />
                    <img v-else src="~/assets/images/icons/plus.svg" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </template>
        </Accordion>
      </div>
      <Button
        v-if="service.hasMore"
        className="h-9 bg-[#19110B] rounded-full px-7 text-sm font-bold text-white mx-auto mb-10"
      >
        <NuxtLink to="/services/detail"> Alle Leistungen </NuxtLink>
      </Button>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      slideIndex: 0,
    };
  },
  computed: {
    getSliderItemCount: function () {
      return this.service.carousel.length;
    },
  },
  props: ["service"],
  methods: {
    handleChangeCarousel(index) {
      this.slideIndex = index;
    },
    handleClick(flag) {
      if (flag) {
        this.$router.push("/appointments/time");
      }
    },
  },
};
</script>