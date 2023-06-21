<template>
  <div
    class="
      w-full
      sticky
      top-0
      z-50
      flex
      justify-center
      p-5
      rounded-b-[36px]
      bg-white
      shadow-theme
    "
  >
    <button
      v-if="backControl"
      class="absolute top-6 left-7"
      @click="handleBack"
    >
      <img src="~/assets/images/icons/back.svg" />
    </button>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    backControl: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
  },
};
</script>