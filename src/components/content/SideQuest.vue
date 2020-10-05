<template>
  <div
    class="side-quest p-5 pb-12 sm:p-8 sm:pb-16 w-full sm:w-3/4 md:w-1/2 lg:w-5/6 wow hvr-grow mb-24 lg:mb-0 bg-contain bg-no-repeat bg-center"
    :class="animation.name"
    :data-wow-delay="animation.delay"
    :data-wow-duration="animation.duration"
  >
    <div
      class="w-64 mx-auto sm:w-full flex flex-col items-center justify-center lg:justify-start h-full relative text-center sm:px-16 lg:px-3"
    >
      <img
        :src="require('../../assets/images/home/' + content.coin)"
        width="110px"
        class="absolute xl:static bob"
      />
      <h4 class="paralucent-demibold text-3xl lg:text-4xl mb-5 lg:mt-12 xl:mt-3 leading-none">
        {{ content.heading }}
      </h4>
      <div
        class="w-full text-center text-base md:text-sm sourcesans-semibold"
        v-html="content.body"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SideQuest extends Vue {
  @Prop({ default: null, type: Object }) readonly content!: object

  @Prop({ default: null, type: Object }) readonly animation!: object
}
</script>

<style scoped lang="scss">
.side-quest {
  background-image: url('../../assets/images/home/sidequest.png');
  color: #140f2c;
  height: 420px;
  img {
    top: -72px;
  }
}

.side-quest:hover {
  img {
    -webkit-animation-name: hvr-bob-float, hvr-bob;
    animation-name: hvr-bob-float, hvr-bob;
    -webkit-animation-duration: 0.3s, 1.5s;
    animation-duration: 0.3s, 1.5s;
    -webkit-animation-delay: 0s, 0.3s;
    animation-delay: 0s, 0.3s;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-direction: normal, alternate;
    animation-direction: normal, alternate;
  }
}

@-webkit-keyframes bob {
  0% {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px);
  }
}

@keyframes bob {
  0% {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px);
  }
}

@-webkit-keyframes bob-float {
  100% {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px);
  }
}

@keyframes bob-float {
  100% {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px);
  }
}

.bob {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
</style>
