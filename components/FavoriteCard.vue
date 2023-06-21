<template>
  <div class="p-5 rounded-[18px] shadow-theme flex items-center relative">
    <img :src="avatar" class="mr-5 shadow-theme rounded-[18px]" />
    <div>
      <p class="text-[#19110B] flex items-center mb-1">
        <span class="text-base font-bold leading-normal mr-3">{{ name }}</span>
        <span class="font-semibold text-xs flex items-center">
          <img src="~/assets/images/icons/star.svg" class="mr-1" />
          <span class="leading-none">{{ rate }}</span>
        </span>
      </p>
      <p class="font-semibold text-[#B6C5D1] text-base mb-1">{{ type }}</p>
      <span
        class="
          bg-[#F0F3F6]
          rounded-[5px]
          px-2.5
          py-0.5
          text-xs
          font-semibold
          text-[#19110B]
        "
        >{{ tag }}</span
      >
    </div>
    <button class="absolute bottom-3 right-3">
      <img src="~/assets/images/icons/heart.svg" />
    </button>
  </div>
</template>

<script>
export default {
  props: ["name", "type", "tag", "rate", "avatar"],
};
</script>