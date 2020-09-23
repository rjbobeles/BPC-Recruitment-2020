<template>
  <div>
    <div class="top-section bg-cement relative bg-center bg-contain w-full">
      <div
        class="container relative z-10 hero-section h-screen py-24 flex flex-col items-center justify-between text-white"
      >
        <img
          src="../assets/images//nameplates/BPC_Logo_and_Nameplate_Variation_White.png"
          width="300px"
          class="mb-8 lg:mb-16 px-5"
        />
        <div class="text-center flex flex-col items-center">
          <h1 id="title1" class="text-7xl font-bold italic leading-none">THE CHALLENGE:</h1>
          <h1 id="title2" class="text-8xl font-bold italic leading-none">ARE YOU UP FOR IT?</h1>
          <div class="w-4/5 md:w-3/4 lg:w-5/12 my-16">
            Gear up and showcase your abilities on the quest that will boost your drive and skills
            for journalism. Step up and take your place on the teams under the Benildean Press Corps
            and see if you're up for the challenge!
          </div>
        </div>
        <div></div>
      </div>
      <div
        class="container relative z-10 the-challenge lg:h-screen md:px-5 pt-24 pb-48 md:pb-48 lg:pb-0 text-gritty"
      >
        <div class="w-full flex flex-col md:flex-row">
          <div class="w-1/6 md:w-1/4 flex items-center justify-center mx-auto mb-12 md:mb-0">
            <img src="../assets/images//nameplates/BPC_Logo_White.png" class="w-full lg:w-3/4" />
          </div>
          <div
            class="w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/3 xl:w-3/5 relative challenge mx-auto px-5 pt-12 pb-8 md:pb-12 sm:px-12"
          >
            <h3 class="font-bold italic text-5xl mb-8 leading-none absolute">THE CHALLENGE</h3>
            <div class="text-xs">
              <p class="mb-5">
                As unseen enemies approach the beacon of freedom, jeopardize our safety, and tamper
                with the truth, the Benildean Press Corps wants you to take your place in the
                action. Use your weapon—may it be a pen, canvas, or your leadership potential—to be
                the voice for the voiceless.
              </p>
              <p class="mb-8">
                Aside from being a platform to empower the truth, the Benildean Press Corps is the
                official student-journalists’ organization of De La Salle-College of Saint Benilde.
                Through visual and literary arts, it aims to inform, promote awareness, showcase
                creativity, and empower the Benildean Community and the Filipino people.
              </p>
              <p class="mb-5 font-bold">
                We know you have what it takes to be part of the team, so here’s our challenge:
              </p>
              <p class="mb-12">
                Express your passion and drive for journalism with us as we further hone your skills
                in literature and arts. Be courageous in sharing your insights, participating in
                seminars, reporting the truth, and creating art. Navigate through the different
                teams to explore your unlocked abilities and take part in beating deadlines and
                conversing with diverse individuals.
              </p>
              <p class="mb-2 font-bold">
                May it be under the managing, writing, or creative teams, the call remains the same:
              </p>
              <p class="font-bold italic text-lg">Are you up for the Challenge?</p>
            </div>
            <a class="mx-auto md:mx-0 md:absolute start-button" href="#">
              <img
                src="../assets/images/home/start-button.png"
                class="mx-auto mt-12 md:mt-0 w-48 md:w-32 lg:w-48"
              />
            </a>
          </div>
        </div>
      </div>
      <img
        src="../assets/images/home/tool-1.png"
        class="absolute hidden sm:inline"
        id="tool-1"
        ref="toolA"
        data-lax-preset="lazy-200"
      />
      <img
        src="../assets/images/home/tool-2.png"
        class="absolute hidden sm:inline"
        id="tool-2"
        ref="toolB"
        data-lax-preset="lazy-180"
      />
      <img
        src="../assets/images/home/tool-3.png"
        class="absolute hidden sm:inline"
        id="tool-3"
        ref="toolC"
        data-lax-preset="lazy-200"
      />
      <img
        src="../assets/images/home/tool-4.png"
        class="absolute hidden sm:inline"
        id="tool-4"
        ref="toolD"
        data-lax-preset="lazy-180"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  @Ref('toolA') readonly toolA!: HTMLImageElement

  @Ref('toolB') readonly toolB!: HTMLImageElement

  @Ref('toolC') readonly toolC!: HTMLImageElement

  @Ref('toolD') readonly toolD!: HTMLImageElement

  mounted() {
    Vue.prototype.$lax.addElement(this.toolA)
    Vue.prototype.$lax.addElement(this.toolB)
    Vue.prototype.$lax.addElement(this.toolC)
    Vue.prototype.$lax.addElement(this.toolD)
  }

  beforeDestroy() {
    Vue.prototype.$lax.addElement(this.toolA)
    Vue.prototype.$lax.addElement(this.toolB)
    Vue.prototype.$lax.addElement(this.toolC)
    Vue.prototype.$lax.addElement(this.toolD)
  }
}
</script>

<style scoped lang="scss">
img#tool-1 {
  top: 25%;
  left: -100px;
  width: 420px;
}
img#tool-2 {
  top: 15%;
  right: -100px;
  width: 400px;
}
img#tool-3 {
  bottom: 0;
  right: -180px;
  width: 400px;
}
img#tool-4 {
  bottom: 0;
  left: -180px;
  width: 400px;
}
.hero-section {
  min-height: 680px;
}
.the-challenge {
  min-height: 768px;
  .challenge {
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 40px;
    box-shadow: 20px 20px rgba(0, 0, 0, 0.4);
    h3 {
      top: -24px;
    }
    a.start-button {
      bottom: -2rem;
      right: 3.5rem;
    }
  }
}

@media only screen and (min-width: 1800px) {
  img#tool-1 {
    top: 25%;
    left: 2%;
    width: 400px;
  }
  img#tool-2 {
    top: 15%;
    right: 3%;
    width: 380px;
  }
  img#tool-3 {
    bottom: 10%;
    right: -3%;
    width: 400px;
  }
  img#tool-4 {
    bottom: 10%;
    left: -2%;
  }
  .challenge {
    p {
      font-size: 1.1rem;
    }
    .text-lg {
      font-size: 1.5rem;
    }
  }
}

@media only screen and (max-width: 1279px) {
  img#tool-1 {
    top: 25%;
    left: -12%;
    width: 400px;
  }
  img#tool-2 {
    top: 15%;
    right: -12%;
    width: 380px;
  }
  img#tool-3 {
    bottom: 0;
  }
  img#tool-4 {
    bottom: 0;
  }
  @media (orientation: portrait) {
    img#tool-1 {
      top: 32%;
    }
    img#tool-2 {
      top: 32%;
    }
    img#tool-3 {
      bottom: 2%;
    }
    img#tool-4 {
      bottom: 2%;
    }
    .the-challenge {
      height: auto;
      min-height: 1024px;
    }
  }
}

@media only screen and (max-width: 1023px) {
  img#tool-1 {
    top: 25%;
    left: -12%;
    width: 350px;
  }
  img#tool-2 {
    top: 22%;
    right: -14%;
    width: 300px;
  }
  .hero-section {
    min-height: 480px;
  }
  .the-challenge {
    min-height: 0;
    .challenge {
      a.start-button {
        bottom: -1rem;
        right: 2rem;
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  img#tool-1 {
    top: 25%;
    left: -20%;
    width: 350px;
  }
  img#tool-2 {
    top: 28%;
    right: -14%;
    width: 300px;
  }
}
@media only screen and (max-width: 639px) {
  #title1 {
    font-size: 10vw;
  }
  #title2 {
    font-size: 15vw;
  }
}

@media only screen and (max-width: 472px) {
  .challenge {
    padding-top: 24vw;
    h3 {
      font-size: 13vw;
    }
  }
}
</style>
