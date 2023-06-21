<template>
  <button
    class="flex justify-center items-center"
    :class="className"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: ["className"],
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>