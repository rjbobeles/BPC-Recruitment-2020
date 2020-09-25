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
                v-model.trim="userData.name"
                placeholder="LAST NAME, FIRST NAME"
                class="w-full"
                @blur="$v.userData.name.$touch()"
              />
              <span
                v-show="$v.userData.name.$error"
                v-if="!submitted"
                class="text-xs error self-start"
              >
                Name must follow the format: LAST NAME, FIRST NAME
              </span>
            </div>
            <div>
              <input
                type="text"
                name="nickname"
                id="nickname"
                v-model.trim="userData.nickname"
                placeholder="NICKNAME"
                class="w-full mt-4"
                @blur="$v.userData.nickname.$touch()"
              />
              <span
                v-show="$v.userData.nickname.$error"
                v-if="!submitted"
                class="text-xs error self-start"
              >
                Nickname has to be between 1 to 30 characters
              </span>
            </div>
            <div>
              <input
                type="text"
                name="placeOfBirth"
                id="placeOfBirth"
                v-model.trim="userData.placeOfBirth"
                placeholder="PLACE OF BIRTH (CITY)"
                class="w-full mt-4"
                @blur="$v.userData.placeOfBirth.$touch()"
              />
              <span
                v-show="$v.userData.placeOfBirth.$error"
                v-if="!submitted"
                class="text-xs error self-start"
              >
                Place of birth must be 1 to 30 characters
              </span>
            </div>
            <div>
              <input
                type="text"
                name="nationality"
                id="nationality"
                v-model.trim="userData.nationality"
                placeholder="NATIONALITY"
                class="w-full mt-4"
                @blur="$v.userData.nationality.$touch()"
              />
              <span
                v-show="$v.userData.nationality.$error"
                v-if="!submitted"
                class="text-xs error self-start"
              >
                Nationality must be 5 to 20 characters
              </span>
            </div>
            <div>
              <multiselect
                v-if="courses"
                style="overflow: auto"
                v-model.trim="userData.course"
                deselect-label="Can't remove this value"
                track-by="id"
                :custom-label="courseLabel"
                placeholder="COURSE"
                :options="courses"
                :searchable="false"
                :allow-empty="false"
                :max-height="100"
                class="mt-4"
                @close="$v.userData.course.$touch()"
              >
                <template slot="singleLabel" slot-scope="{ option }">
                  [{{ option.code }}] {{ option.course }}
                </template>
              </multiselect>
              <span
                v-show="$v.userData.course.$error"
                v-if="!submitted"
                class="text-xs error self-start"
              >
                Course is required
              </span>
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="EMAIL"
                class="w-full mt-4"
                v-model.trim="userData.email"
                @blur="$v.userData.email.$touch()"
              />
              <span
                v-show="$v.userData.email.$error"
                v-if="!submitted"
                class="text-xs error self-start"
              >
                Email must be a valid benilde email
              </span>
            </div>
            <div>
              <input
                type="text"
                name="phoneNo"
                id="phoneNo"
                v-model.trim="userData.phoneNo"
                placeholder="PHONE NUMBER"
                class="w-full mt-4"
                @blur="$v.userData.phoneNo.$touch()"
              />
              <span
                v-show="$v.userData.phoneNo.$error"
                v-if="!submitted"
                class="text-xs error self-start"
              >
                Phone number must be a valid
              </span>
            </div>
            <div>
              <input
                type="text"
                name="idNumber"
                id="idNumber"
                v-model.trim="userData.idNumber"
                placeholder="ID NUMBER (Ex. 11012345)"
                class="w-full mt-4"
                @blur="$v.userData.idNumber.$touch()"
              />
            </div>
            <span
              v-show="$v.userData.idNumber.$error"
              v-if="!submitted"
              class="text-xs error self-start"
            >
              ID number must be a valid Benilde ID number
            </span>
          </div>
          <div class="flex-1 md:ml-2">
            <div class="mt-4 md:mt-0">
              <input
                type="checkbox"
                id="transferee"
                name="transferee"
                v-model.trim="userData.transferee"
                class="form-checkbox"
              />
              TRANSFEREE
              <input
                type="checkbox"
                id="secondDegree"
                name="secondDegree"
                v-model.trim="userData.secondDegree"
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
                v-model.trim="userData.termsLeft"
                @blur="$v.userData.termsLeft.$touch()"
              />
              <span
                v-show="$v.userData.termsLeft.$error"
                v-if="!submitted"
                class="text-xs error self-start"
              >
                Terms left must be between 1 to 15
              </span>
            </div>
            <div>
              <multiselect
                v-if="positions"
                style="overflow: auto"
                v-model.trim="userData.choices.choice1"
                deselect-label="Can't remove this value"
                track-by="id"
                :custom-label="positionLabel"
                placeholder="CHOICE ONE"
                :options="positions"
                :searchable="false"
                :allow-empty="false"
                :max-height="100"
                class="mt-4"
                @close="$v.userData.choices.choice1.$touch()"
              >
                <template slot="singleLabel" slot-scope="{ option }">
                  [{{ option.section }}] {{ option.position }}
                </template>
              </multiselect>
              <span
                v-show="$v.userData.choices.choice1.$error"
                v-if="!submitted"
                class="text-xs error self-start"
              >
                Choice 1 is required
              </span>
            </div>
            <div>
              <multiselect
                v-if="positions"
                style="overflow: auto"
                v-model.trim="userData.choices.choice2"
                deselect-label="Can't remove this value"
                track-by="id"
                :custom-label="positionLabel"
                placeholder="CHOICE TWO"
                :options="positions"
                :searchable="false"
                :allow-empty="false"
                :max-height="100"
                class="mt-4"
                @close="$v.userData.choices.choice2.$touch()"
              >
                <template slot="singleLabel" slot-scope="{ option }">
                  [{{ option.section }}] {{ option.position }}
                </template>
              </multiselect>
              <span
                v-show="$v.userData.choices.choice2.$error"
                v-if="!submitted"
                class="text-xs error self-start"
              >
                You need to enter a valid choice
              </span>
            </div>
            <div>
              <multiselect
                v-if="positions"
                style="overflow: auto"
                v-model.trim="userData.choices.choice3"
                deselect-label="Can't remove this value"
                track-by="id"
                :custom-label="positionLabel"
                placeholder="CHOICE THREE"
                :options="positions"
                :searchable="false"
                :allow-empty="false"
                :max-height="100"
                class="mt-4"
                @close="$v.userData.choices.choice3.$touch()"
              >
                <template slot="singleLabel" slot-scope="{ option }">
                  [{{ option.section }}] {{ option.position }}
                </template>
              </multiselect>
              <span
                v-show="$v.userData.choices.choice3.$error"
                v-if="!submitted"
                class="text-xs error self-start"
              >
                You need to enter a valid choice
              </span>
            </div>
            <div>
              <input
                name="drive"
                id="drive"
                v-model.trim="userData.drive"
                placeholder="GOOGLE DRIVE LINK"
                class="w-full mt-4"
                @blur="$v.userData.drive.$touch()"
              />
              <span
                v-show="$v.userData.drive.$error"
                v-if="!submitted"
                class="text-xs error self-start"
              >
                Google Drive link must be a valid and has sharing enabled.
              </span>
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
      <span class="text-center text-sm mt-24">
        Benildean Press Corps &copy; 2020. All rights reserved.
      </span>
    </div>
  </div>
</template>

<script lang="ts">
/*
NOTES: 

submitting = true == show loading screen
submitting = false == hide loading screen

submitted = true == "Thank you for sending your inquiry. Expect a reply within 24-48 hours" + MAKE THE ENTIRE FORM DISABLED
^^ If user submits again when this is true show "You have already sent an inquiry!"

hasError = true == "An error has occured. Please try again"

*/

import Vue from 'vue'
// import axios from 'axios'
import Multiselect from 'vue-multiselect'
import { required, minLength, maxLength, between } from 'vuelidate/lib/validators'

export default Vue.extend({
  components: {
    Multiselect,
  },
  props: {
    courses: {
      default: null,
      type: Array,
    },
    positions: {
      default: null,
      type: Array,
    },
  },
  methods: {
    courseLabel({ code, course }) {
      return `[${code}] ${course}`
    },
    positionLabel({ section, position }) {
      return `[${section}] ${position}`
    },
    submitForm() {
      // this.submitting = true
      // this.hasError = false
      alert('called')
    },
    checkForm() {
      this.$v.$touch()
      if (this.$v.$error || this.submitting) return alert('error fam')
      return this.submitForm()
    },
  },
  data() {
    return {
      hasError: false,
      submitting: false,
      submitted: false,
      name: null,
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
  validations: {
    userData: {
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(60),
        isFullName(name) {
          return /^([A-Z][a-z]*,((\s)[A-Z][a-z]*)+)$/.test(name)
        },
      },
      nickname: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(30),
      },
      placeOfBirth: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50),
      },
      nationality: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(20),
      },
      idNumber: {
        required,
        isIDNumber(idNumber) {
          return /^(1)[0-5][0-9]([0-9]{5}\b)$/.test(idNumber)
        },
      },
      course: {
        required,
      },
      email: {
        required,
        isBenildeMail(email) {
          return /^[a-z0-9](\.?[a-z0-9]){5,}@benilde.edu.ph$/.test(email)
        },
      },
      phoneNo: {
        required,
        isPhoneNo(phoneNo) {
          return /((^(\+)(\d){12}$)|(^\d{11}$))/.test(phoneNo)
        },
      },
      termsLeft: {
        required,
        between: between(0, 15),
      },
      transferee: {
        required,
      },
      secondDegree: {
        required,
      },
      choices: {
        choice1: {
          required,
          between: between(1, 12),
        },
        choice2: {
          between: between(0, 12),
        },
        choice3: {
          between: between(0, 12),
        },
      },
      drive: {
        required,
        isDrive(drive) {
          return /^((https:\/\/)?(www.)?(drive.google.com\/drive\/folders\/){1}[a-zA-Z0-9_-]+(\?usp=sharing)\b)$/.test(
            drive
          )
        },
      },
    },
  },
})
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

.error {
  color: #f56565;
}
</style>
