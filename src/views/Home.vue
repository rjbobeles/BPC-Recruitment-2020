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
          <h1
            id="title1"
            class="text-7xl font-bold italic leading-none wow fadeInDown"
            data-wow-duration="0.5s"
          >
            THE CHALLENGE:
          </h1>
          <h1
            id="title2"
            class="text-8xl font-bold italic leading-none wow jackInTheBox"
            data-wow-duration="0.7s"
            data-wow-delay="0.4s"
          >
            ARE YOU UP FOR IT?
          </h1>
          <div class="w-4/5 md:w-3/4 lg:w-5/12 my-16 wow fadeInUp" data-wow-delay="1s">
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
            class="flex flex-col w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/3 xl:w-3/5 relative challenge mx-auto px-5 pt-12 pb-8 md:pb-12 sm:px-12 wow bounceIn"
            data-wow-offset="300"
          >
            <h3 class="font-bold italic text-5xl mb-8 leading-none">THE CHALLENGE</h3>
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
            <a
              class="mx-auto md:mx-0 md:absolute start-button wow bounceIn hvr-grow"
              href="#main-quest-1"
            >
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
        data-lax-preset="lazy-250"
      />
      <img
        src="../assets/images/home/tool-2.png"
        class="absolute hidden sm:inline"
        id="tool-2"
        ref="toolB"
        data-lax-preset="lazy-210"
      />
      <img
        src="../assets/images/home/tool-3.png"
        class="absolute hidden sm:inline"
        id="tool-3"
        ref="toolC"
        data-lax-preset="lazy-250"
      />
      <img
        src="../assets/images/home/tool-4.png"
        class="absolute hidden sm:inline"
        id="tool-4"
        ref="toolD"
        data-lax-preset="lazy-210"
      />
    </div>
    <div id="main-quest-1" class="main-quest-1 w-full py-24 bg-fixed bg-cover">
      <div class="container mx-auto px-5 text-center lg:text-left">
        <h4 class="text-white text-3xl">MAIN QUEST 1:</h4>
        <h2 class="text-white text-5xl font-bold mb-24 lg:mb-16">GATHER YOUR GEAR AND ARMS</h2>
        <div class="side-quests flex flex-col lg:flex-row">
          <div class="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <side-quest :content="requirements[0]" :animation="requirements[0].animation" />
          </div>
          <div class="w-full lg:w-1/3 flex justify-center lg:justify-center">
            <side-quest :content="requirements[1]" :animation="requirements[1].animation" />
          </div>
          <div class="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <side-quest :content="requirements[2]" :animation="requirements[2].animation" />
          </div>
        </div>
      </div>
    </div>
    <div class="faq py-24">
      <div class="container mx-auto px-5">
        <div class="flex flex-col lg:flex-row lg:items-center w-full mb-16">
          <h2 class="text-5xl font-bold flex-shrink-0 lg:pr-24 mb-5 lg:mb-0 leading-none relative">
            STUCK? NEED HELP?
          </h2>
          <div class="lg:w-1/3 text-sm wow fadeInLeft" data-wow-offset="300">
            We’ll help you get through this Challenge! Here’s everything you need to know and
            questions we get asked the most when applying for the Benildean Press Corps.
          </div>
        </div>
        <vue-faq-accordion :items="faqItems" class="w-full" activeColor="#000" borderColor="#000" />
      </div>
    </div>
    <Form :courses="apiRes.courses" :positions="apiRes.positions" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'
import { ApiResponse } from '@/types'
import fetchSubmissionData from '@/helpers'
import VueFaqAccordion from 'vue-faq-accordion'

import Form from '@/components/Form.vue'
import SideQuest from '@/components/content/SideQuest.vue'

@Component({
  components: {
    Form,
    SideQuest,
    VueFaqAccordion,
  },
})
export default class Home extends Vue {
  apiRes: ApiResponse = {}

  @Ref('toolA') readonly toolA!: HTMLImageElement

  @Ref('toolB') readonly toolB!: HTMLImageElement

  @Ref('toolC') readonly toolC!: HTMLImageElement

  @Ref('toolD') readonly toolD!: HTMLImageElement

  async created() {
    await this.setApiRes()
  }

  private requirements: Array<object> = [
    {
      heading: 'SIDE QUEST 1',
      body: `Using your Benilde Mail, create a google drive folder and name it using the following format: 
      <br /><br /> 
      "LAST NAME_FIRSTNAME"`,
      animation: {
        name: 'flipInY',
        duration: '0.8s',
        delay: '0s',
      },
    },
    {
      heading: 'SIDE QUEST 2',
      body: `Inside the folder, create three subfolders and label them accordingly by your section choices:
      <br /><br /> 
      First choice: "1. [SECTION]" <br /> 
      Second Choice: "2. [SECTION]" <br /> 
      Third Choice: "3. [SECTION]"`,
      animation: {
        name: 'flipInY',
        duration: '0.8s',
        delay: '0.2s',
      },
    },
    {
      heading: 'SIDE QUEST 3',
      body: `Upload your requirements in each respective section folders.`,
      animation: {
        name: 'flipInY',
        duration: '0.8s',
        delay: '0.4s',
      },
    },
  ]

  private faqItems: Array<object> = [
    {
      title: 'What is BPC?',
      value:
        'The Benildean Press Corps (BPC) is the official student-journalists’ organization of De La Salle-College of Saint Benilde. The organization caters to the needs of the Benildean community by providing various services in the fields of journalism, visual and literary arts.',
    },
    {
      title: 'Why should I join BPC?',
      value:
        'As students of De La Salle-College of Saint Benilde, we have a responsibility to be of service to our school community. If you have a passion for journalism in the forms of writing, visual, and literary arts, or you have the drive to lead a group of student-journalists, then joining BPC might be for you.',
    },
    {
      title: 'What sections can I apply for?',
      value:
        'For this term’s recruitment, you can apply for PULSE (News Section), Ablaze (Sports Section), Karilyon (Filipino Section), Platform (Literary Section), Art and Design, Layout, Photo, Digital Media and Managing.',
    },
    {
      title: 'Is recruitment only open to frosh students?',
      value:
        'No, recruitment for the Benildean Press Corps is open to all Benildean students, regardless of year level.',
    },
    {
      title: 'What if I’m LOA, could I apply?',
      value: 'No, only enrolled students for the 1st term of A.Y. 2020-2021 may apply.',
    },
    {
      title:
        'I lack experience in writing for the school paper, can I still have the chance to get in?',
      value:
        'Although having prior experience in journalism is a plus, you still have a chance to get in as long as we see you have potential through your submitted works, panel interviews, and exam.',
    },
    {
      title: 'When are applications due?',
      value: 'We are accepting applications for this term until October 11 2020 (Monday) 10:00pm.',
    },
    {
      title: 'Do I need to fill up all three choices?',
      value: 'No, you do not have to fill up all three choices.',
    },
    {
      title: 'What happens if I don’t get accepted in any of my choices?',
      value:
        'You may apply again in the following term if there is an opening in your chosen position or section by then.',
    },
    {
      title: 'How will I know if I got accepted?',
      value:
        'We will be sending out emails to both accepted and non-accepted applicants. Make sure to also like our Facebook page for further announcements. We will be releasing a list of the accepted applicants on Facebook.',
    },
    {
      title: 'What are the requirements?',
      value: `There are specific requirements for each section. You may view them <a href="#" class="underline">here</a>.`,
    },
    {
      title: 'How do we submit requirements?',
      value: `
        <ol class="pl-5 list-decimal">
          <li>Using your Google Drive, create a folder titled with your name in this format “LASTNAME_FIRSTNAME”</li> 
          <li>Inside that folder, place subfolders with the format: “1. [Section you are applying for]” for your first choice and so on. You may only apply for three sections.</li>
          <li>Send the link to our website. Make sure that it is shareable to “De La Salle-College of Saint Benilde” emails.</li> 
        </ol> 
      `,
    },
    {
      title: 'If I join BPC, would I be granted a scholarship?',
      value: `BPC is given a Student Publications Grant scholarship by DLS-CSB. However, due to the financial impact of the COVID-19 pandemic on the College, there will be no scholarships to be offered to new staffers of the organization until further notice.`,
    },
    {
      title: 'I can’t find my desired option in the form below. What do I do?',
      value: `That means the position that you're trying to apply for is currently unavailable in this term's application. You can check next term for availability.`,
    },
  ]

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

  async setApiRes() {
    this.apiRes = await fetchSubmissionData()
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

.main-quest-1 {
  background-image: url('../assets/images/home/three-quests.webp');
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
  .challenge > h3 {
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 14vw;
  }
  #title1 {
    font-size: 10vw;
  }
  #title2 {
    font-size: 15vw;
  }
}
</style>
