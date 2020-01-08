<template>
  <div>
    <div id="program-unggulan" class="container">
      <h3 id="program-unggulan-title">PROGRAM UNGGULAN</h3>
      <div id="program-unggulan-menu">
        <div :style="styleAll" @click="changeBackground('all')">All</div>
        <div :style="styleKariermu" @click="changeBackground('kariermu')">Kariermu</div>
        <div :style="styleKelasmu" @click="changeBackground('kelasmu')">Kelasmu</div>
        <div :style="styleUjianmu" @click="changeBackground('ujianmu')">Ujianmu</div>
      </div>
      <transition-group name="list" id="program-unggulan-card">
        <card-program-unggulan v-for="program in programs" :key="program.id" :program="program"/>
      </transition-group>
    </div>
  </div>
</template>

<script>
import CardProgramUnggulan from './CardProgramUnggulan.vue'

export default {
  data() {
    return {
      styleAll: {
        'background-color': 'rgba(29, 115, 190, 1)',
        'color': 'white'
      },
      styleKariermu: {
        'background-color': 'rgba(29, 115, 190, 0)',
        'color': 'black'
      },
      styleKelasmu: {
        'background-color': 'rgba(29, 115, 190, 0)',
        'color': 'black'
      },
      styleUjianmu: {
        'background-color': 'rgba(29, 115, 190, 0)',
        'color': 'black'
      },
      menu: 'all',
    }
  },
  computed: {
    programs() {
      const dataProgram = this.$store.state.dataProgram
      if(this.menu == 'all') {
        return dataProgram
      }
      else if(this.menu == 'kariermu') {
        return dataProgram.filter(program => program.category_name === 'KARIERMU')
      }
      else if(this.menu == 'ujianmu') {
        return dataProgram.filter(program => program.category_name === 'UJIANMU')
      }
      else {
        return dataProgram.filter(program => program.category_name === 'KELASMU')
      }
    }
  },
  methods: {
    changeBackground(menu) {
      this.menu = menu
    }
  },
  watch: {
    menu(newValue) {
      const active = {
        'background-color': 'rgba(29, 115, 190, 1)',
        'color': 'white'
      }
      const inactive = {
        'background-color': 'rgba(29, 115, 190, 0)',
        'color': 'black'
      }

      if(this.menu == 'kariermu') {
        this.styleAll = inactive
        this.styleKariermu = active
        this.styleKelasmu = inactive
        this.styleUjianmu = inactive
      }
      else if(this.menu == 'kelasmu') {
        this.styleAll = inactive
        this.styleKariermu = inactive
        this.styleKelasmu = active
        this.styleUjianmu = inactive
      }
      else if(this.menu == 'ujianmu') {
        this.styleAll = inactive
        this.styleKariermu = inactive
        this.styleKelasmu = inactive
        this.styleUjianmu = active
      }
      else {
        this.styleAll = active
        this.styleKariermu = inactive
        this.styleKelasmu = inactive
        this.styleUjianmu = inactive
      }
    }
  },
  components: {
    CardProgramUnggulan
  }
}
</script>

<style>
  #program-unggulan-card {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: stretch;
  }
  
  #program-unggulan {
    margin-top: 100px
  }

  #program-unggulan-title {
    font-weight: 300;
    text-align: center
  }

  #program-unggulan-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px
  }

  #program-unggulan-menu div {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 40px;
    font-size: 90%;
    cursor: pointer;
    transition: 0.2s
  }

  @media screen and (max-width: 376px) {
    #program-unggulan-menu div {
      padding-left: 10px;
      padding-right: 10px;
      font-size: 80%
    }
  }

  .list-enter-active,
  .list-leave-active,
  .list-move {
    transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
    transition-property: opacity, transform;
  }

  .list-enter {
    opacity: 0;
    transform: translateX(50px) scaleY(0.5);
  }

  .list-enter-to {
    opacity: 1;
    transform: translateX(0) scaleY(1);
  }

  .list-leave-active {
    position: absolute;
  }

  .list-leave-to {
    opacity: 0;
    transform: scaleY(1);
    transform-origin: center top;
  }
</style>