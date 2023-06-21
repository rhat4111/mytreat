<template>
  <div class="flex">
    <img
      v-for="index in rate"
      :key="index"
      src="~/assets/images/icons/star.svg"
      class="mr-1"
    />
    <img
      v-for="index in 5 - rate"
      :key="index"
      src="~/assets/images/icons/star_unfill.svg"
      class="mr-1"
    />
  </div>
</template>

<script>
export default {
  props: ["type", "rate"],
};
</script>