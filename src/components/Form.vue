<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Position, Course } from '@/types'

@Component
export default class SubmitForm extends Vue {
  @Prop() private position!: Array<Position>

  @Prop() private course!: Array<Course>
}
</script>
