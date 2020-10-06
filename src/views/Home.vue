<template>
  <div style="width: 100%; overflow-x: hidden">
    <div class="top-section bg-cement relative bg-center bg-cover w-full">
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
            class="text-8xl paralucent-condensed-heavyitalic leading-none wow fadeInDown"
            data-wow-duration="0.5s"
          >
            THE CHALLENGE:
          </h1>
          <h1
            id="title2"
            class="text-10xl paralucent-condensed-heavyitalic leading-none wow jackInTheBox"
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
        class="container relative z-10 the-challenge lg:h-screen md:px-5 pt-12 pb-48 md:pb-48 lg:pb-0 text-gritty"
      >
        <div class="w-full flex flex-col md:flex-row">
          <div class="w-1/6 md:w-1/4 flex items-center justify-center mx-auto mb-12 md:mb-0">
            <img src="../assets/images//nameplates/logo.gif" class="w-full lg:w-2/3" />
          </div>
          <div
            class="flex flex-col w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/3 xl:w-3/5 relative challenge mx-auto px-5 pt-12 pb-8 md:pb-12 sm:px-12 wow bounceIn"
            data-wow-offset="300"
          >
            <h3 class="paralucent-demibold text-5xl mb-5 leading-none">THE CHALLENGE</h3>
            <div class="text-sm">
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
              <p class="mb-5 text-base sourcesans-bold">
                We know you have what it takes to be part of the team, so here’s our challenge:
              </p>
              <p class="mb-12">
                Express your passion and drive for journalism with us as we further hone your skills
                in literature and arts. Be courageous in sharing your insights, participating in
                seminars, reporting the truth, and creating art. Navigate through the different
                teams to explore your unlocked abilities and take part in beating deadlines and
                conversing with diverse individuals.
              </p>
              <p class="mb-1 text-base sourcesans-bold">
                May it be under the managing, writing, or creative teams, the call remains the same:
              </p>
              <p class="sourcesans-bolditalic text-2xl">Are you up for the Challenge?</p>
            </div>
            <a
              class="mx-auto md:mx-0 md:absolute start-button wow bounceIn hvr-grow"
              href="#main-quest-1"
              v-smooth-scroll
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
        class="parallax-tool"
        v-rellax="{ speed: -2 }"
        id="tool-1"
      />
      <img
        src="../assets/images/home/tool-2.png"
        class="parallax-tool"
        v-rellax="{ speed: -2 }"
        id="tool-2"
      />
      <img
        src="../assets/images/home/tool-3.png"
        class="parallax-tool"
        v-rellax="{ speed: -1 }"
        id="tool-3"
      />
      <img
        src="../assets/images/home/tool-4.png"
        class="parallax-tool"
        v-rellax="{ speed: -1 }"
        id="tool-4"
      />
    </div>
    <div id="main-quest-1" class="main-quest-1 w-full py-24 bg-fixed bg-cover">
      <div class="container mx-auto px-5 text-center lg:text-left relative">
        <h4 class="text-white text-3xl paralucent-medium leading-none">[LV. 1] MAIN QUEST</h4>
        <h2 class="text-white text-5xl font-bold mb-24 lg:mb-16 leading-tight paralucent-text-bold">
          GATHER YOUR GEAR AND ARMS
        </h2>
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
          <h2
            class="text-5xl paralucent-demibold flex-shrink-0 lg:pr-24 mb-5 lg:mb-0 leading-none relative"
          >
            STUCK? NEED HELP?
          </h2>
          <div class="lg:w-1/3 text-sm wow fadeInLeft sourcesans-regular" data-wow-offset="300">
            We’ll help you get through this Challenge! Here’s everything you need to know and
            questions we get asked the most when applying for the Benildean Press Corps.
          </div>
        </div>
        <vue-faq-accordion :items="faqItems" class="w-full" activeColor="#000" borderColor="#000" />
      </div>
    </div>
    <div class="w-full pb-24 md:pb-32 relative" id="choose-your-character">
      <div class="container mx-auto px-5 text-center md:text-left relative z-10">
        <h4 class="text-3xl paralucent-medium leading-none">[LV.2] MAIN QUEST:</h4>
        <h2 class="text-5xl font-bold leading-none md:leading-tight paralucent-text-bold">
          CHOOSE YOUR CHARACTER
        </h2>
        <p class="sourcesans-italic text-sm text-cement">
          Hint: Click on the cards to view details!
        </p>
        <div class="py-12 xl:px-12">
          <div class="w-full flex stretch items-center mb-8">
            <hr class="border-black w-full" />
            <h3 class="mx-3 paralucent-text-bold text-4xl md:text-5xl">Writers</h3>
            <hr class="border-black w-full" />
          </div>
          <div
            class="flex flex-col sm:flex-row justify-center lg:justify-between flex-wrap lg:flex-no-wrap"
          >
            <cards
              v-for="slot in writers"
              :key="slot.id"
              :title="slot.title"
              :position="slot"
              @open-card="openCard"
            />
          </div>
        </div>
        <div class="py-12 xl:px-12">
          <div class="w-full flex stretch items-center mb-8">
            <hr class="border-black w-full" />
            <h3 class="mx-3 paralucent-text-bold text-4xl md:text-5xl">Creatives</h3>
            <hr class="border-black w-full" />
          </div>
          <div
            class="flex flex-col sm:flex-row justify-center lg:justify-between flex-wrap lg:flex-no-wrap"
          >
            <cards
              v-for="slot in creatives"
              :key="slot.id"
              :title="slot.title"
              :position="slot"
              @open-card="openCard"
            />
          </div>
        </div>
      </div>
      <xmodal v-model="isOpen" :params="options" />
      <img
        src="../assets/images/home/tool-5.png"
        class="parallax-tool"
        v-rellax="{ speed: -2 }"
        id="tool-5"
      />
      <img
        src="../assets/images/home/tool-6.png"
        class="parallax-tool"
        v-rellax="{ speed: -1 }"
        id="tool-6"
      />
      <img
        src="../assets/images/home/tool-7.png"
        class="parallax-tool"
        v-rellax="{ speed: -1 }"
        id="tool-7"
      />
      <img
        src="../assets/images/home/tool-8.png"
        class="parallax-tool"
        v-rellax="{ speed: -1 }"
        id="tool-8"
      />
    </div>
    <Form :courses="apiRes.courses" :positions="apiRes.positions" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ApiResponse } from '@/types'
import fetchSubmissionData from '@/helpers'
import VueFaqAccordion from 'vue-faq-accordion'

import { WOW } from 'wowjs'

import Form from '@/components/Form.vue'
import SideQuest from '@/components/content/SideQuest.vue'
import Cards from '@/components/content/Cards.vue'
import OpenCard from '@/components/content/OpenCard.vue'

type position = {
  title: string
  subtitle: string
  image: string
  challenge: string
  description: string
  requirements: Array<reqGroup>
  color: string
}

type card = {
  value: position
}

type modalOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any
  animation: string
  backgroundColor: string
  props: prop
}

type prop = {
  val: position
}

type reqGroup = {
  title: string
  reqs: Array<string>
}

@Component({
  components: {
    Form,
    SideQuest,
    VueFaqAccordion,
    Cards,
  },
})
export default class Home extends Vue {
  apiRes: ApiResponse = {}

  async created() {
    await this.setApiRes()
  }

  mounted() {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: false,
    })
    this.$nextTick(() => {
      wow.init()
    })
    this.getCloseDate(this.apiRes.closeTime)
    alert(this.apiRes.closeTime)
  }

  private requirements: Array<object> = [
    {
      heading: 'SIDE QUEST',
      body: `Using your Benilde Mail, create a google drive folder and name it using the following format: 
      <br /><br /> 
      "LAST NAME_FIRST NAME"`,
      animation: {
        name: 'flipInY',
        duration: '0.8s',
        delay: '0s',
      },
      coin: 'sq1.png',
    },
    {
      heading: 'SIDE QUEST',
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
      coin: 'sq2.png',
    },
    {
      heading: 'SIDE QUEST',
      body: `Upload your requirements in each respective section folders.`,
      animation: {
        name: 'flipInY',
        duration: '0.8s',
        delay: '0.4s',
      },
      coin: 'sq3.png',
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
      value: `There are specific requirements for each section. You may view them <a href="#choose-your-character" class="underline" v-smooth-scroll >here</a>.`,
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

  private writers: Array<position> = [
    {
      title: 'Pulse',
      subtitle: 'News analysis + Editorial + Opinion',
      image: 'card-pulse.png',
      challenge: 'Will you unravel the truth?',
      description:
        'With its foremost mandate to uncover the truth, Pulse is committed in bringing and reporting of recent and relevant news, issues and controversies that concern not only the Benildean community, but as well as the youth and the general public, amid the threats brought by the global pandemic.',
      requirements: [
        {
          title: '',
          reqs: [
            'Curriculum Vitae (CV)',
            'Three (3) sample works of fact-driven objective writing',
          ],
        },
      ],
      color: '#4fb948',
    },
    {
      title: 'BLIP',
      subtitle: 'Lifestyle + Interests + People',
      image: 'card-blip.png',
      challenge: 'Will you follow the trend?',
      description:
        'Showcasing the latest trends and culture, Benildean Lifestyle, Interests, and People (BLIP) gives a spotlight on the dimensions of fashion, music, film, theatre, and food for a good quarantine boost.',
      requirements: [
        {
          title: '',
          reqs: [
            'Curriculum Vitae',
            'Three (3) sample works on feature writing which preferably include a preview article and music album/movie review article',
            'All entries must have a minimum of 300 words',
          ],
        },
      ],
      color: '#417abd',
    },
    {
      title: 'Platform',
      subtitle: 'Literary + Art + Design + Photography',
      image: 'card-platform.png',
      challenge: 'Will you move the plot forward?',
      description:
        'As you break out of the conventional through diverse creative writing, Platform aims to deliver literary works in both creative fiction and non-fiction masterpieces. It also contributes to keeping the literary community informed with the literary scene and its events.',
      requirements: [
        {
          title: '',
          reqs: [
            'Curriculum Vitae',
            'Minimum of three (3) best literary works which preferably include a short script/flash fiction, poetry, and literature review article',
            'Flash fiction must have 200 to 300 words only',
            'Other entries are limited to 800-1000 words only',
          ],
        },
      ],
      color: '#7d4299',
    },
    {
      title: 'Ablaze',
      subtitle: 'Sports + Technology + Fitness',
      image: 'card-ablaze.png',
      challenge: 'Will you chase the action?',
      description:
        'As we continue to chase the action, Ablaze keeps burning with the hottest updates on the College’s proudest athletes, as well as the trendiest news on fitness and technology.',
      requirements: [
        {
          title: '',
          reqs: [
            'Curriculum Vitae',
            'Three (3) sample articles on sports, health, and/or technology which preferably include a game review article on any mobile or desktop game',
          ],
        },
      ],
      color: '#f68a1e',
    },
    {
      title: 'Karilyon',
      subtitle: 'Kultura + Biyahe',
      image: 'card-karilyon.png',
      challenge: 'Itataguyod mo ba ang bandila?',
      description:
        'Kasabay ng pagtuklas sa mga bagong gawi, ang kahalagahan ng mga kultura, kasaysayan, at kasanayang maka-Pilipino ay higit na pinahahalagahan ng Karilyon. Mula sa paggunita ng mga pambansang kaganapan hanggang sa pagsusulat ng mga tula, pinauunlad nito ang Wikang Pambansa.',
      requirements: [
        {
          title: '',
          reqs: [
            'Curriculum Vitae',
            'Three (3) Filipino literary works (two poem/literary piece and one article)',
          ],
        },
      ],
      color: '#67411f',
    },
  ]

  private creatives: Array<position> = [
    {
      title: 'Art & Design',
      subtitle: '',
      image: 'card-artdesign.png',
      challenge: 'Will you portray our vision?',
      description:
        'With a blank canvas as their domain, the Art and Design section takes pride in producing versatile works through different mediums. From expressive illustrations to informative designs, the section does not only excel in technique but also in bringing life to their creative visions.',
      requirements: [
        {
          title: 'Illustrator',
          reqs: ['Curriculum Vitae (CV)', 'Three (3) to five (5) portfolio works'],
        },
        {
          title: 'Graphic Designer',
          reqs: ['Curriculum Vitae (CV)', 'Three (3) to five (5) portfolio works'],
        },
      ],
      color: '#EBC378',
    },
    {
      title: 'Layout',
      subtitle: '',
      image: 'card-layout.png',
      challenge: 'Will you design with a purpose?',
      description:
        'Assembling the visual and written elements on printed and digital works, the Layout section ensures its harmonious coexistence at the moment of its completion. With an eye for print and digital design, they organize the structure and ensure its readability and interactivity through a purposeful design and layout, accompanied by a user-friendly animation.',
      requirements: [
        {
          title: '',
          reqs: [
            'Curriculum Vitae (CV)',
            'Three (3) magazine layouts (1 spread, two pages)',
            'Two (2) to three (3) poster/social media layouts',
            'Optional: One (1) website wireframe / prototype',
          ],
        },
      ],
      color: '#ECB8C3',
    },
    {
      title: 'Digital Media',
      subtitle: '',
      image: 'card-digitalmedia.png',
      challenge: 'Will you bridge the gap?',
      description:
        'Equipped with innovative and creative concepts to keep up with the ever-changing trends in technology and the online world, the Digital Media section digitalizes stories and develops websites through its three subsections: video production, social media engagement and management, as well as web development.',
      requirements: [
        {
          title: 'Web Developer (Front-end or Back-end)',
          reqs: [
            'Curriculum Vitae (CV)',
            '(FE) UI/UX Sample',
            '(FE) Solid foundation on HTML/CSS/JS',
            '(BE) Knowledge on PHP or Node.js',
            '(BE) Knowledge of the concept of CI/CD',
            '(BE) Knowledge on server management',
          ],
        },
        {
          title: 'Video Producer',
          reqs: [
            'Curriculum Vitae (CV)',
            'Three (3) sample works (include the link of where it’s published)',
            'Knowledge in Motion Graphics is an advantage',
          ],
        },
        {
          title: 'Social Media Correspondent',
          reqs: ['Curriculum Vitae (CV)', 'Sample copywriting or literary works'],
        },
      ],
      color: '#595959',
    },
    {
      title: 'Photo',
      subtitle: '',
      image: 'card-photo.png',
      challenge: 'Will you capture history?',
      description:
        'By turning photographs into visual vessels of the story, the Photo section fearlessly rises up to the challenge of showcasing the creative world of studio shoots and the raw reality of coverages. In capturing the truth, photographers bring their perspective and stories in every shot.',
      requirements: [
        {
          title: '',
          reqs: [
            'Curriculum Vitae (CV)',
            'A portfolio with a minimum of ten (10) best works that must include photojournalism, events photography, and conceptual',
            'Other requirements: personal camera and laptop',
          ],
        },
      ],
      color: '#E75D5A',
    },
    {
      title: 'Managing',
      subtitle: '',
      image: 'card-managing.png',
      challenge: 'Will you keep us on track?',
      description:
        'Monitoring every operation and endeavor of the organization, the Managing section serves as the backbone that ensures efficient operations for print and digital work. Managers work on logistics, reservations, and coordination with various people and affiliations.',
      requirements: [
        {
          title: '',
          reqs: ['Curriculum Vitae (CV)'],
        },
      ],
      color: '#999999',
    },
  ]

  private closeDate = ''

  public isOpen = false

  public options: modalOptions = {
    component: OpenCard,
    animation: 'scaleIn',
    backgroundColor: '#e1e1e1',
    props: {
      val: {
        title: '',
        subtitle: '',
        image: '',
        challenge: '',
        description: '',
        requirements: [],
        color: '',
      },
    },
  }

  public openCard = (pos: position) => {
    this.options.props.val = pos
    this.toggleModal()
  }

  public toggleModal(): void {
    this.isOpen = !this.isOpen
    console.log(this.isOpen)
  }

  async setApiRes() {
    this.apiRes = await fetchSubmissionData()
  }

  private getCloseDate = (dateString: string) => {
    const d = new Date(Date.parse(dateString))
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const month = months[d.getMonth()]
    const date = d.getDate()
    const year = d.getFullYear()
    const day = days[d.getDay()]
    const time = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    this.closeDate = `${month} ${date} ${year} (${day}) ${time}`
  }
}
</script>

<style scoped lang="scss">
.top-section {
  background-image: url('../assets/images/home/hero-bg.png');
}

.hero-section {
  min-height: 680px;
}
.the-challenge {
  min-height: 768px;
  .challenge {
    border-radius: 40px;
    box-shadow: 20px 20px rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      to bottom,
      rgb(248, 241, 226),
      rgb(248, 241, 226),
      rgb(233, 220, 195)
    );
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
  background-image: linear-gradient(rgba(24, 24, 32, 0.1), rgba(24, 24, 32, 0.1)),
    url('../assets/images/home/three-quests2.png');
}

@media only screen and (min-width: 1800px) {
  .challenge {
    p {
      font-size: 1rem;
    }
    .text-base {
      font-size: 1.2rem !important;
    }
    .text-2xl {
      font-size: 1.5rem !important;
    }
  }
}

@media only screen and (max-width: 1279px) {
  @media (orientation: portrait) {
    .the-challenge {
      height: auto;
      min-height: 1024px;
    }
  }
}

@media only screen and (max-width: 1023px) {
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
    font-size: 18vw;
  }
}
</style>
