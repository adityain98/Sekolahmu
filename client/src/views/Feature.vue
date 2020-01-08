<template>
  <div id="feature" style="min-height: 72vh;" class="container">
    <h3 class="mt-4">{{ $route.params.feature.toUpperCase() }}</h3>
    <div id="cards-container">
      <card-program-unggulan v-for="(program, i) in dataProgram" :key="i" :program="program" />
    </div>
  </div>
</template>

<script>
import CardProgramUnggulan from '../components/CardProgramUnggulan.vue'

export default {
  computed: {
    dataProgram() {
      if(this.$route.params.feature == 'tanyamu') {
        return this.$store.state.dataProgram
      }
      else {
        return this.$store.state.dataProgram.filter(program => program.category_name.toLowerCase() === this.$route.params.feature)
      }
    }
  },
  components: {
    CardProgramUnggulan
  }
}
</script>

<style>
  #feature {
    display: flex;
    flex-direction: column;
    align-items: center
  }

  #cards-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: stretch;
    margin-bottom: 20px
  }

</style>