<template>
  <div class="card bg-white shadow-xl pt-16 pb-8 pl-8 sm:pl-16 md:pl-24 pr-8 sm:pr-16 relative">
    <div class="w-full text-center md:text-left">
      <h4 class="paralucent-medium text-2xl leading-none">TEAM CHALLENGE:</h4>
      <h2 class="paralucent-text-bold text-4xl leading-tight">{{ val.challenge }}</h2>
      <div class="flex flex-col md:flex-row pt-5 xl:pt-12 pb-5 mb-3 items-center">
        <div class="w-1/2 md:w-1/3 flex justify-center items-center mb-12 md:mb-0">
          <div v-tilt="{ glare: true, scale: 1.05, 'max-glare': 1, gyroscope: true }">
            <img
              :src="require('../../assets/images/home/cards/' + val.image)"
              :alt="val.title"
              class="shadow-lg"
            />
          </div>
        </div>
        <div class="w-full md:w-2/3 md:pl-16">
          <h2 class="text-5xl paralucent-bold leading-none">{{ val.title }}</h2>
          <h4 class="text-xl paralucent-light mb-8">{{ val.subtitle }}</h4>
          <p class="text-base md:text-sm">{{ val.description }}</p>
          <p class="sourcesans-bold my-5">Apply now!</p>
          <h6 class="text-base md:text-sm sourcesans-bold">REQUIREMENTS</h6>
          <div v-for="job in val.requirements" :key="job.id" class="text-base md:text-sm my-2">
            <p class="sourcesans-bold">{{ job.title }}</p>
            <p v-for="item in job.reqs" :key="item.id">- {{ item }}</p>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center md:hidden">
        <button
          class="bg-gritty paralucent-light text-xl text-white py-2 px-4 focus:outline-none active:outline-none rounded"
          @click="closeModal()"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  methods: {
    closeModal() {
      Vue.prototype.$xmodal.close()
    },
  },
})
export default class OpenCard extends Vue {
  @Prop({ default: null, type: Object }) readonly val!: object
}
</script>

<style scoped>
.card {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 30px;
  width: 960px;
  max-height: 90vh;
  overflow: auto;
}

.card::-webkit-scrollbar {
  width: 8px;
}

.card::-webkit-scrollbar-thumb {
  background: rgb(196, 196, 196);
  margin: 5px;
  border-radius: 25px;
}

img {
  transform: rotate(-12deg);
}

@media only screen and (max-width: 1279px) {
  .card {
    width: 840px;
  }
}

@media only screen and (max-width: 1023px) {
  .card {
    width: 720px;
  }
}

@media only screen and (max-width: 767px) {
  .card {
    width: 600px;
  }
}

@media only screen and (max-width: 640px) {
  .card {
    width: 95%;
  }
}
</style>
