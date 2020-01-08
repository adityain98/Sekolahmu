<template>
  <div>
    <main-feature/>
    <program-unggulan/>
    <yellow-banner/>
  </div>
</template>

<script>
import MainFeature from '../components/MainFeature.vue'
import ProgramUnggulan from '../components/ProgramUnggulan.vue'
import YellowBanner from '../components/YellowBanner.vue'

export default {
  name: 'home',
  components: {
    MainFeature,
    ProgramUnggulan,
    YellowBanner
  }
}
</script>

<style>
  
</style>