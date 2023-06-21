<template>
  <div class="flex items-center" @click="handleClick(value)">
    <div class="mr-2.5">
      <img v-if="isChecked" src="~/assets/images/icons/checkbox_checked.svg" />
      <img v-else src="~/assets/images/icons/checkbox_unchecked.svg" />
    </div>
    <span class="text-base text-[#19110B]">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    isChecked: Boolean,
    value: String,
  },
  methods: {
    handleClick(value) {
      this.$emit("handleChange", value);
    },
  },
};
</script>