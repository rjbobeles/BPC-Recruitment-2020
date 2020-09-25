<template>
  <div class="h-screen">
    <div class="container flex flex-col h-screen justify-center">
      <div>
        <h1 class="paralucent-medium uppercase text-5xl text-center mb-10">Submissions</h1>
      </div>
      <form method="POST" @submit.prevent="checkForm">
        <div class="flex flex-col mx-2 md:flex-row md:mx-8">
          <div class="flex-1 justify-center md:mr-2">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                v-model="userData.name"
                placeholder="LAST NAME, FIRST NAME"
                class="w-full"
              />
            </div>
            <div>
              <input
                type="text"
                name="nickname"
                id="nickname"
                v-model="userData.nickname"
                placeholder="NICKNAME"
                class="w-full mt-4"
              />
            </div>
            <div>
              <input
                type="text"
                name="placeOfBirth"
                id="placeOfBirth"
                v-model="userData.placeOfBirth"
                placeholder="PLACE OF BIRTH (CITY)"
                class="w-full mt-4"
              />
            </div>
            <div>
              <input
                type="text"
                name="nationality"
                id="nationality"
                v-model="userData.nationality"
                placeholder="NATIONALITY"
                class="w-full mt-4"
              />
            </div>
            <div>
              <multiselect
                v-if="courses"
                style="overflow: auto"
                v-model="userData.cuorse"
                deselect-label="Can't remove this value"
                track-by="id"
                :custom-label="courseLabel"
                placeholder="COURSE"
                :options="courses"
                :searchable="false"
                :allow-empty="false"
                :max-height="100"
                class="mt-4"
              >
                <template slot="singleLabel" slot-scope="{ option }">
                  [{{ option.code }}] {{ option.course }}
                </template>
              </multiselect>
            </div>
            <div>
              <input type="email" name="email" id="email" placeholder="EMAIL" class="w-full mt-4" />
            </div>
            <div>
              <input
                type="text"
                name="phoneNo"
                id="phoneNo"
                v-model="userData.phoneNo"
                placeholder="PHONE NUMBER"
                class="w-full mt-4"
              />
            </div>
            <div>
              <input
                type="text"
                name="idNumber"
                id="idNumber"
                v-model="userData.idNumber"
                placeholder="ID NUMBER (Ex. 11012345)"
                class="w-full mt-4"
              />
            </div>
          </div>
          <div class="flex-1 md:ml-2">
            <div class="mt-4 md:mt-0">
              <input
                type="checkbox"
                id="transferee"
                name="transferee"
                :value="userData.transferee"
                class="form-checkbox"
              />
              TRANSFEREE
              <input
                type="checkbox"
                id="secondDegree"
                name="secondDegree"
                :value="userData.secondDegree"
                class="ml-4 form-checkbox"
              />
              SECOND DEGREE
            </div>
            <div>
              <input
                name="termsLeft"
                id="termsLeft"
                placeholder="TERMS LEFT"
                class="w-full mt-4"
                style="padding-top: 1px"
              />
            </div>
            <div>
              <multiselect
                v-if="positions"
                style="overflow: auto"
                v-model="userData.choices.choice1"
                deselect-label="Can't remove this value"
                track-by="id"
                :custom-label="positionLabel"
                placeholder="CHOICE ONE"
                :options="positions"
                :searchable="false"
                :allow-empty="false"
                :max-height="100"
                class="mt-4"
              >
                <template slot="singleLabel" slot-scope="{ option }">
                  [{{ option.section }}] {{ option.position }}
                </template>
              </multiselect>

              <multiselect
                v-if="positions"
                style="overflow: auto"
                v-model="userData.choices.choice2"
                deselect-label="Can't remove this value"
                track-by="id"
                :custom-label="positionLabel"
                placeholder="CHOICE TWO"
                :options="positions"
                :searchable="false"
                :allow-empty="false"
                :max-height="100"
                class="mt-4"
              >
                <template slot="singleLabel" slot-scope="{ option }">
                  [{{ option.section }}] {{ option.position }}
                </template>
              </multiselect>

              <multiselect
                v-if="positions"
                style="overflow: auto"
                v-model="userData.choices.choice3"
                deselect-label="Can't remove this value"
                track-by="id"
                :custom-label="positionLabel"
                placeholder="CHOICE THREE"
                :options="positions"
                :searchable="false"
                :allow-empty="false"
                :max-height="100"
                class="mt-4"
              >
                <template slot="singleLabel" slot-scope="{ option }">
                  [{{ option.section }}] {{ option.position }}
                </template>
              </multiselect>
            </div>
            <div>
              <input
                name="drive"
                id="drive"
                v-model="userData.drive"
                placeholder="DRIVE LINK"
                class="w-full mt-4"
              />
            </div>
            <div class="flex justify-end flex-col">
              <p class="conditions mt-8">
                By clicking SUBMIT, you confirm that the information provided in this form is
                correct and complete.
              </p>
              <div class="flex justify-end">
                <input type="submit" value="Submit" class="submitButton mt-2" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Multiselect from 'vue-multiselect'
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { Position, Course } from '../types'

@Component({
  components: {
    Multiselect,
  },
  methods: {
    courseLabel({ code, course }) {
      return `[${code}] ${course}`
    },
    positionLabel({ section, position }) {
      return `[${section}] ${position}`
    },
  },
  mixins: [validationMixin],
  data() {
    return {
      submitting: false,
      submitted: false,
      hasError: false,
      value: null,
      userData: {
        name: null,
        nickname: null,
        placeOfBirth: null,
        nationality: null,
        idNumber: null,
        course: null,
        email: null,
        phoneNo: null,
        transferee: false,
        secondDegree: false,
        choices: {
          choice1: null,
          choice2: null,
          choice3: null,
        },
        drive: null,
      },
    }
  },
})
export default class SubmitForm extends Vue {
  @Prop() private positions!: Array<Position>

  @Prop() private courses!: Array<Course>
}
</script>

<style lang="scss" scoped>
input {
  background-color: transparent;
  border-bottom: 1px solid #333;
  color: #333;
}

input:focus {
  outline: none;
}

::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #333;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #333;
  opacity: 1;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #333;
  opacity: 1;
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #333;
}
::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #333;
}

::placeholder {
  /* Most modern browsers support this now. */
  color: #333;
}

.multiselect {
  background-color: transparent;
  border-bottom: 1px solid #333;
  color: #333;
}

.submitButton {
  color: #333;
  border: 1px solid #333;
  padding: 3px;
  width: 60px;
}

.conditions {
  font-size: 9px;
}
</style>
