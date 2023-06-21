<template>
  <NuxtLink :to="'appointments/' + id">
    <div
      class="
        rounded-[18px]
        shadow-theme
        bg-white
        p-5
        flex
        justify-between
        items-center
      "
    >
      <div class="flex flex-col items-start">
        <span
          class="
            text-xs
            px-2.5
            py-0.5
            rounded-[5px]
            text-[#19110B]
            font-semibold
            bg-[#F0F3F6]
            mb-2.5
          "
        >
          {{ date }}
        </span>
        <p class="text-base text-dark font-bold leading-normal mb-1">
          {{ name }}
        </p>
        <p class="text-sm font-semibold text-[#B6C5D1]">
          {{ salon }}
        </p>
      </div>
      <button
        class="
          w-12
          h-12
          rounded-[18px]
          bg-[#f4f4f4]
          flex
          justify-center
          items-center
        "
      >
        <img src="~/assets/images/icons/calendar.svg" />
      </button>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ["id", "date", "name", "salon"],
};
</script>