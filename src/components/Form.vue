<template>
  <div class="h-screen">
    <div class="container">
      <div class="flex flex-row mx-10">
        <div class="flex-1 mx-2">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              v-model="userData.name"
              placeholder="FULLNAME"
              class="w-full border-solid border-4 border-gray-600"
            />
          </div>
          <div>
            <input
              type="text"
              name="nickname"
              id="nickname"
              v-model="userData.nickname"
              placeholder="NICKNAME"
              class="w-full"
            />
          </div>
          <div>
            <input
              type="text"
              name="placeOfBirth"
              id="placeOfBirth"
              v-model="userData.placeOfBirth"
              placeholder="PLACE OF BIRTH"
              class="w-full"
            />
          </div>
          <div>
            <input
              type="text"
              name="nationality"
              id="nationality"
              v-model="userData.nationality"
              placeholder="NATIONALITY"
              class="w-full"
            />
          </div>
          <div>
            <select name="course" id="course" class="w-full" v-model="userData.course">
              <option value="0" selected>SELECT COURSE</option>
              <option v-for="course in courses" :key="course.id" :value="course.id">
                [{{ course.code }}] {{ course.course }}
              </option>
            </select>
            <!-- course -->
          </div>
          <div>
            <input type="email" name="email" id="email" placeholder="EMAIL" class="w-full" />
          </div>
          <div>
            <input
              type="text"
              name="phoneNo"
              id="phoneNo"
              v-model="userData.phoneNo"
              placeholder="PHONE NUMBER"
              class="w-full"
            />
          </div>
          <div>
            <input
              type="text"
              name="idNumber"
              id="idNumber"
              v-model="userData.idNumber"
              placeholder="FULLNAME"
              class="w-full"
            />
          </div>
        </div>
        <div class="flex-1 mx-2">
          <div>
            <input type="checkbox" id="transferee" name="transferee" :value="userData.transferee" />
            TRANSFEREE
            <input
              type="checkbox"
              id="secondDegree"
              name="secondDegree"
              :value="userData.secondDegree"
            />
            SECOND DEGREE
          </div>
          <div>
            <input
              name="termsLeft"
              id="termsLeft"
              placeholder="TERMS LEFT"
              class="w-full border-solid border-4 border-gray-600"
            />
          </div>
          <div>
            <!-- choice 1-3 -->
          </div>
          <div>
            <input
              name="drive"
              id="drive"
              v-model="userData.drive"
              placeholder="DRIVE LINK"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Multiselect from 'vue-multiselect'

@Component({
  components: {
    Multiselect,
  },
  methods: {
    courseLabel({ code, course }) {
      return `[${code}] ${course}`
    },
  },
  data() {
    return {
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
  props: {
    positions: {
      default: null,
      type: Array,
    },
    courses: {
      default: null,
      type: Array,
    },
  },
})
export default class SubmitForm extends Vue {}

/*
Course:
      <multiselect
        style="overflow: auto"
        v-model="value"
        deselect-label="Can't remove this value"
        track-by="id"
        :custom-label="courseLabel"
        placeholder="Select one"
        :options="courses"
        :searchable="false"
        :allow-empty="false"
        :max-height="100"
      >
        <template slot="singleLabel" slot-scope="{ option }">
          [{{ option.code }}] {{ option.course }}
        </template>
      </multiselect>
*/
</script>
