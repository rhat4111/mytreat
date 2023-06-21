<template>
  <div class="w-1/3 pl-2.5">
    <NuxtLink to="/services">
      <div class="rounded-[18px] shadow-theme">
        <div class="h-16 flex justify-center items-end">
          <img :src="iconURL" />
        </div>
        <div
          class="
            w-full
            h-12
            flex
            justify-center
            items-center
            text-sm
            font-semibold
            text-[#767676]
            mb-3
          "
        >
          {{ name }}
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["name", "iconURL"],
};
</script>