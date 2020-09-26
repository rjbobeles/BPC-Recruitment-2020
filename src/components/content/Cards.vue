<template>
  <div
    class="sm:w-1/3 lg:w-1/6 text-center cursor-pointer px-5 lg:px-0 mb-12 lg:mb-0"
    @click="$emit('open-card', position)"
  >
    <img
      :src="require('../../assets/images/home/cards/' + position.image)"
      :alt="position.title"
      class="hvr-grow-rotate mb-3 hover:shadow-lg"
    />
    <h5
      class="paralucent-bolditalic text-5xl md:text-3xl leading-none"
      :style="'color:' + position.color"
    >
      {{ position.title }}
    </h5>
    <p class="paralucent-light md:text-xs opacity-75">{{ position.subtitle }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Cards extends Vue {
  @Prop({ default: null, type: Object }) readonly position!: object
}
</script>

<style scoped>
img {
  max-height: 64vh;
}
.hvr-grow-rotate:hover {
  transition-property: all;
  transform: translatey(-1.5rem) rotate(3deg) scale(1.1);
}

@media only screen and (max-width: 767px) {
  .hvr-grow-rotate:hover {
    transform: translatey(-1.2rem) rotate(3deg) scale(1.05);
  }
}
</style>
