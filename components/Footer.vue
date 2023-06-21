<template>
  <div
    class="
      rounded-t-[36px]
      flex
      justify-between
      bg-white
      px-6
      py-2.5
      fixed
      bottom-0
      left-0
      w-full
    "
  >
    <button
      v-for="nav in navs"
      :key="nav.id"
      :class="{
        'w-16 h-16 rounded-full bg-[#19110B] -mt-5': nav.id === 'categories',
        'bg-[#E1E0DF]': nav.id === active,
        'w-12 h-12': nav.id !== 'categories',
      }"
      class="rounded-[18px] flex justify-center items-center"
    >
      <NuxtLink :to="nav.route">
        <img :src="nav.icon" />
      </NuxtLink>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          id: "home",
          route: "/",
          icon: require("~/assets/images/navs/home.svg"),
        },
        {
          id: "appointments",
          route: "/appointments",
          icon: require("~/assets/images/navs/calendar.svg"),
        },
        {
          id: "categories",
          route: "/categories",
          icon: require("~/assets/images/navs/grid.svg"),
        },
        {
          id: "favorite",
          route: "/favorite",
          icon: require("~/assets/images/navs/heart.svg"),
        },
        {
          id: "setting",
          route: "/setting",
          icon: require("~/assets/images/navs/setting.svg"),
        },
      ],
    };
  },
  props: {
    active: String,
  },
};
</script>