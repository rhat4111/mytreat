<template>
  <div class="flex flex-col mb-20">
    <Header :backControl="true">
      <img src="~/assets/images/logo.png" />
    </Header>
    <img src="~/assets/images/categories_banner.png" class="-mt-16" />
    <div
      class="flex flex-wrap -ml-2.5 px-5 pt-8 rounded-t-[36px] -mt-10 bg-white"
    >
      <CategoryCard
        v-for="(category, index) in categories"
        :name="category.name"
        :iconURL="category.icon"
        :key="index"
      />
    </div>
    <Footer active="catgories" />
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
