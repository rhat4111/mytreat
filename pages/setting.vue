<template>
  <div class="mb-20">
    <div
      class="flex flex-col items-center pt-3 pb-1 sticky top-0 bg-white z-50"
    >
      <img src="~/assets/images/logo.png" class="mb-2" />
      <span class="text-2xl font-bold text-[#19110B]">Meine Infos</span>
    </div>
    <div>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <NuxtLink :to="link.route" class="flex items-center h-16 px-6 py-0.5">
            <img :src="link.icon" class="mr-2.5" />
            <span class="font-semibold text-base text-[#19110B]">{{
              link.name
            }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <Footer active="setting" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Mein Account",
          icon: require("~/assets/images/icons/setting.svg"),
          route: "/myaccount",
        },
        {
          name: "Erinnerungen / Push Nachrichten",
          icon: require("~/assets/images/icons/bell.svg"),
          route: "/",
        },
        {
          name: "Freunde einladen",
          icon: require("~/assets/images/icons/user.svg"),
          route: "/",
        },
        {
          name: "Datenschutz",
          icon: require("~/assets/images/icons/note.svg"),
          route: "/",
        },
        {
          name: "AGB",
          icon: require("~/assets/images/icons/note.svg"),
          route: "/",
        },
        {
          name: "Impressum",
          icon: require("~/assets/images/icons/note.svg"),
          route: "/",
        },
      ],
    };
  },
};
</script>