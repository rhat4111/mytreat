<template>
  <ul class="flex items-center overflow-hidden">
    <li
      v-for="(step, ind) in steps"
      :key="ind"
      class="flex items-center"
      :class="ind <= index ? 'text-[#19110B]' : 'text-[#B6C5D1]'"
    >
      <span
        class="
          w-5
          h-5
          rounded-full
          border-2 border-[#19110B]
          text-xs
          font-bold
          mr-1
          flex
          items-center
          justify-center
        "
        :class="ind <= index ? 'border-[#19110B]' : 'border-[#B6C5D1]'"
      >
        {{ step.id }}
      </span>
      <span class="text-base font-bold">{{ step.name }}</span>
      <span
        v-if="ind !== stepsCount - 1"
        class="w-8 h-0.5 bg-[#19110B] mx-2.5"
        :class="ind <= index ? 'bg-[#19110B]' : 'bg-[#B6C5D1]'"
      />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    steps: Array,
    index: Number,
  },
  computed: {
    stepsCount() {
      return this.steps.length;
    },
  },
};
</script>