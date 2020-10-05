<template>
  <div
    class="container flex flex-col justify-center h-full px-8 lg:px-24 relative z-10 pointer-events-none"
  >
    <img
      src="../assets/images/nameplates/BPC_Logo_and_Nameplate_Variation_White.png"
      width="420px"
    />
    <h1
      class="text-white paralucent-condensed-heavyitalic uppercase mb-2"
      :class="fontSize + '-font'"
    >
      {{ heading }}
    </h1>
    <p class="text-white sourcesans-semibold text-xl">{{ paragraph }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Cards extends Vue {
  @Prop({ default: null, type: String }) readonly heading!: string

  @Prop({ default: null, type: String }) readonly paragraph!: string

  @Prop({ default: null, type: String }) readonly fontSize!: string
}
</script>

<style scoped lang="scss">
.big-font {
  font-size: 18rem;
  line-height: 13rem;
}

.medium-font {
  font-size: 10rem;
  line-height: 8rem;
}

@media only screen and (max-width: 1279px) {
  .big-font {
    font-size: 13rem;
    line-height: 10rem;
  }
  .medium-font {
    font-size: 7rem;
    line-height: 6rem;
  }
}

@media only screen and (max-width: 1023px) {
  .medium-font {
    font-size: 6rem;
    line-height: 5rem;
  }
}
@media only screen and (max-width: 639px) {
  .big-font {
    font-size: 32vw;
    line-height: 24vw;
  }
  .medium-font {
    font-size: 16vw;
    line-height: 13vw;
  }
}
</style>
