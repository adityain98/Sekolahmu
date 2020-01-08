<template>
  <div>
    <main-feature/>
    <program-unggulan/>
    <div v-waypoint="{ active: true, callback: onWaypoint }" id="info-sekolahmu">
      <div id="info-sekolahmu-inside" class="container">
        <div class="info-sekolahmu-items">
          <i class="fas fa-home info-sekolahmu-icons"></i>
          <div style="margin-left: 10px; margin-right: 10px">
            <div class="info-sekolahmu-numbers">
              <span>{{ displayTempatBelajar }}</span>
              <div style="color: white">+</div>
            </div>
            <div class="info-sekolahmu-description">Tempat Belajar</div>
          </div>
        </div>
        <div class="info-sekolahmu-items">
          <i class="fas fa-play-circle info-sekolahmu-icons"></i>
          <div style="margin-left: 10px; margin-right: 10px">
            <div class="info-sekolahmu-numbers">
              <span>{{ displayProgram }}</span>
              <div style="color: white">+</div>
            </div>
            <div class="info-sekolahmu-description">Tempat Belajar</div>
          </div>
        </div>
        <div class="info-sekolahmu-items">
          <i class="fas fa-school info-sekolahmu-icons"></i>
          <div style="margin-left: 10px; margin-right: 10px">
            <div class="info-sekolahmu-numbers">
              <span>{{ displaySekolah }}</span>
              <div style="color: white">+</div>
            </div>
            <div class="info-sekolahmu-description">Tempat Belajar</div>
          </div>
        </div>
        <div class="info-sekolahmu-items">
          <i class="fas fa-building info-sekolahmu-icons"></i>
          <div style="margin-left: 10px; margin-right: 10px">
            <div class="info-sekolahmu-numbers">
              <span>{{ displayKorporasi }}</span>
              <div style="color: white">+</div>
            </div>
            <div class="info-sekolahmu-description">Tempat Belajar</div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import MainFeature from '../components/MainFeature.vue'
import ProgramUnggulan from '../components/ProgramUnggulan.vue'

export default {
  name: 'home',
  data() {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0.25, 0.75]
      },
      tempatBelajar: 0,
      program: 0,
      sekolah: 0,
      korporasi: 0
    }
  },
  computed: {
    displayTempatBelajar() {
      return this.tempatBelajar.toFixed(0)
    },
    displayProgram() {
      return this.program.toFixed(0)
    },
    displaySekolah() {
      return this.sekolah.toFixed(0)
    },
    displayKorporasi() {
      return this.korporasi.toFixed(0)
    }
  },
  methods: {
    onWaypoint ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        TweenLite.to(this.$data, 2, { tempatBelajar: 150 })
        TweenLite.to(this.$data, 2, { program: 80 })
        TweenLite.to(this.$data, 2, { sekolah: 150 })
        TweenLite.to(this.$data, 2, { korporasi: 70 })

      }
    }
  },
  components: {
    MainFeature,
    ProgramUnggulan
  }
}
</script>

<style>
  #info-sekolahmu {
    width: 100%;
    background-color: #FFC211;
    margin-top: 150px;
    margin-bottom: 150px;
  }

  #info-sekolahmu-inside {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 90px;
    padding-bottom: 90px;
    flex-wrap: wrap
  }

  .info-sekolahmu-items {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 20px;
    margin-bottom: 20px
  }

  .info-sekolahmu-icons {
    font-size: 55px;
    color: white
  }

  .info-sekolahmu-numbers {
    display: flex;
    align-items: flex-start;
  }

  .info-sekolahmu-numbers span {
    font-size: 55px;
    display: inline-block;
    line-height: 55px;
    color: white
  }

  .info-sekolahmu-description {
    color: white
  }
  
</style>