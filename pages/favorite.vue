<template>
  <div class="mb-20">
    <div class="flex flex-col items-center py-3 sticky top-0 bg-white z-50">
      <img src="~/assets/images/logo.png" class="mb-2" />
      <span class="text-2xl font-bold text-[#19110B]">Meine Favoriten</span>
    </div>
    <div class="px-5">
      <p class="text-lg font-bold text-[#19110B] mb-2.5">Frisöre</p>
      <div>
        <div v-for="(favorite, index) in favorites" :key="index" class="mb-5">
          <FavoriteCard
            :name="favorite.name"
            :type="favorite.type"
            :rate="favorite.rate"
            :tag="favorite.tag"
            :avatar="favorite.avatar"
          />
        </div>
      </div>
    </div>
    <Footer active="favorite" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorites: [
        {
          name: "Tina Weissmann",
          type: "Friseurin | MyHair Studio",
          rate: 4.5,
          tag: "Heute verfügbar",
          avatar: require("~/assets/images/favorites/1.png"),
        },
        {
          name: "Tina Weissmann",
          type: "Friseurin | MyHair Studio",
          rate: 4.5,
          tag: "Heute verfügbar",
          avatar: require("~/assets/images/favorites/2.png"),
        },
        {
          name: "Tina Weissmann",
          type: "Friseurin | MyHair Studio",
          rate: 4.5,
          tag: "Heute verfügbar",
          avatar: require("~/assets/images/favorites/3.png"),
        },
        {
          name: "Tina Weissmann",
          type: "Friseurin | MyHair Studio",
          rate: 4.5,
          tag: "Heute verfügbar",
          avatar: require("~/assets/images/favorites/1.png"),
        },
      ],
    };
  },
};
</script>