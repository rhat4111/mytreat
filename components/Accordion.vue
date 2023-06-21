<template>
  <div>
    <div
      class="
        w-full
        h-9
        shadow-theme
        rounded-[18px]
        px-4
        flex
        justify-between
        items-center
      "
      @click="handleToggle"
    >
      <slot name="header" />
      <div>
        <img v-if="isOpen" src="~/assets/images/icons/uncollapsed.svg" />
        <img v-else src="~/assets/images/icons/collapsed.svg" />
      </div>
    </div>
    <CollapseTransition>
      <slot v-if="isOpen" name="body" />
    </CollapseTransition>
  </div>
</template>

<script>
import { CollapseTransition } from "@ivanv/vue-collapse-transition";

export default {
  components: {
    CollapseTransition,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleToggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>