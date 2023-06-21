<template>
  <div class="flex flex-col mb-20">
    <Header>
      <img src="~/assets/images/logo.png" />
    </Header>
    <div class="relative -mt-16">
      <img class="w-full" src="~/assets/images/home_banner.png" />
      <div
        class="
          w-full
          absolute
          top-1/2
          left-1/2
          transform
          -translate-x-1/2 -translate-y-1/2
        "
      >
        <div class="px-5">
          <Tab :options="tabs" />
        </div>
      </div>
    </div>
    <div class="px-5">
      <div
        class="
          px-5
          py-4
          shadow-theme
          rounded-[18px]
          -mt-16
          bg-white
          mb-8
          relative
          z-10
        "
      >
        <div class="mb-1.5 relative">
          <TextField placeholder="Salon- oder Studioname">
            <img src="~/assets/images/icons/magnifier.svg" />
          </TextField>
          <button
            class="
              w-12
              h-12
              absolute
              top-0
              right-0
              bg-white
              flex
              justify-center
              items-center
              rounded-[18px]
              shadow-theme
            "
          >
            <img src="~/assets/images/icons/search.svg" />
          </button>
        </div>
        <div>
          <TextField placeholder="Wo?">
            <img src="~/assets/images/icons/location.svg" />
          </TextField>
        </div>
      </div>
      <div class="mb-8">
        <p class="text-lg font-bold text-[#19110B] mb-2.5">Termine</p>
        <AppointmentCard
          id="1"
          date="20 Jan"
          name="Haarverlängerung"
          salon="Sonjas Haarstube, Erlangen"
        />
      </div>
      <div>
        <p class="text-lg font-bold text-[#19110B] mb-1.5">Kategorie</p>
        <div class="flex flex-wrap -ml-2.5">
          <CategoryCard
            v-for="(category, index) in categories"
            :name="category.name"
            :iconURL="category.icon"
            :key="index"
          />
        </div>
      </div>
    </div>
    <Footer active="home" />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tabs: [
        { id: "salon", name: "Salon / Studio" },
        { id: "treatment", name: "Behandlung" },
      ],
      categories: [
        { name: "Haare", icon: require("~/assets/images/categories/1.png") },
        { name: "Nägel", icon: require("~/assets/images/categories/2.png") },
        { name: "Kosmetik", icon: require("~/assets/images/categories/3.png") },
        { name: "Tattoos", icon: require("~/assets/images/categories/4.png") },
        { name: "Wimpern", icon: require("~/assets/images/categories/5.png") },
        { name: "Massage", icon: require("~/assets/images/categories/6.png") },
        {
          name: "Bartpflege",
          icon: require("~/assets/images/categories/7.png"),
        },
        {
          name: "Haarentfernung",
          icon: require("~/assets/images/categories/8.png"),
        },
        { name: "Piercing", icon: require("~/assets/images/categories/9.png") },
      ],
    };
  },
};
</script>
