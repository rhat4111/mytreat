<template>
  <div class="mb-5">
    <div class="flex items-center mb-3">
      <img :src="review.user.avatar" class="w-9 h-9 rounded-full mr-2.5" />
      <div>
        <p class="text-base font-semibold text-[#19110B] leading-5">{{ review.user.name }}</p>
        <Rate type="review" :rate="review.rate" />
      </div>
    </div>
    <p class="text-sm leading-normal text-[#19110B]">{{ review.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["review"],
};
</script>