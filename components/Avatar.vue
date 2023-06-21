<template>
  <div
    class="w-8 h-8 rounded-full"
    :class="
      !user.avatar && 'bg-[#767676] flex justify-center items-center'
    "
  >
    <img :src="user.avatar" v-if="user.avatar" class="w-full h-full" />
    <span v-else class="text-white text-base font-bold">{{
      user.name.toUpperCase().slice(0, 1)
    }}</span>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>