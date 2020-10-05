<template>
  <div class="w-screen h-screen bg-cover bg-center message relative overflow-hidden">
    <message
      heading="Thank you!"
      paragraph="Quest complete! Kindly wait for an u pdate on the status of your application via email."
      fontSize="big"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Message from '@/components/Message.vue'

@Component({
  components: {
    Message,
  },
})
export default class ThankYou extends Vue {}
</script>

<style lang="scss" scoped>
.message {
  background-image: url('../assets/images/home/hero-bg.png');
}
</style>
