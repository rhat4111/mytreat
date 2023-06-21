<template>
  <ul class="w-full h-12 rounded-2xl flex bg-[#F0F3F6]">
    <li
      class="
        w-full
        font-bold
        text-base
        leading-5
        flex
        justify-center
        items-center
        cursor-pointer
        rounded-2xl
      "
      :class="
        selectedTab === option.id
          ? `text-[#19110B] bg-white shadow-theme`
          : `text-[#B6C5D1]`
      "
      v-for="option in options"
      :key="option.id"
      @click="handleClick(option.id)"
    >
      {{ option.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: "",
    };
  },
  props: {
    options: {
      type: Array,
      require: true,
    },
  },
  mounted() {
    this.selectedTab = this.options[0].id;
  },
  methods: {
    handleClick(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>