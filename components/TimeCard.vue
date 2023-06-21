<template>
  <div
    class="rounded-xl flex flex-col items-end px-3 py-2 bg-[#F6F6F6]"
    :class="{ 'opacity-10': !time.active }"
  >
    <NuxtLink to="/payment">
      <span class="text-xl font-bold text-[#19110B]">{{ time.time }}</span>
      <span class="text-base font-semibold text-[#BDBDBD]">
        {{ time.ampm }}
      </span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    time: Object,
  },
};
</script>