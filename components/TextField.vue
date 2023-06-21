<template>
  <div class="relative w-full">
    <div class="min-w-[36px] h-full absolute flex justify-center items-center">
      <slot />
    </div>
    <input
      :type="type"
      :placeholder="placeholder"
      class="
        w-full
        pl-9
        pr-2
        h-12
        rounded-2xl
        bg-[#F6F5F3]
        outline-none
        text-base text-[#19110B]
        placeholder-[#767676]
      "
      :class="inputClass"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: String,
    icon: String,
    inputClass: String,
  },
};
</script>