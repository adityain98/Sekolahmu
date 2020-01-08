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
        <div v-for="program in programs" :key="program.id" class="program-unggulan-cards">
          <div class="card-body">
            <div class="img-container">
              <img :src="program.avatar">
              <div class="overlay-img"></div>
            </div>
            <div style="padding: 20px">
              <div class="program-name">{{ program.name }}</div>
              <div class="program-price" v-if="program.price !== '0.00'">
                <div class="program-price-normal">Rp. {{ program.price_normal }}</div>
                <div class="program-price-discount">Rp. {{ program.price }}</div>
              </div>
              <div class="program-free" v-else>GRATIS</div>
              <p class="program-paragraph">
                {{ program.abstract }}
              </p>
            </div>
          </div>
          <div class="card-footer">
            <hr>
            <div class="card-footer-flex">
              <div class="card-footer-items">
                <i class="far fa-clock"></i>
                <div>{{ program.duration }}</div>
              </div>
              <div class="card-footer-items">
                <i class="fas fa-globe"></i>
                <div>Bahasa Indonesia</div>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
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
}
</script>

<style>
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

  #program-unggulan-card {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: stretch;
  }

  .program-unggulan-cards {
    max-width: 340px;
    margin: 10px;
    border-width: thin;
    border-color: rgba(214, 214, 214, 0.4);
    border-style: solid;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: space-between
  }  

  .program-unggulan-cards:hover {
    -webkit-box-shadow: 0px 0px 11px 6px rgba(0,0,0,0.09);
    -moz-box-shadow: 0px 0px 11px 6px rgba(0,0,0,0.09);
    box-shadow: 0px 0px 11px 6px rgba(0,0,0,0.09);
  }

  .program-unggulan-cards:hover .overlay-img{
    background-color: rgba(52,152,219,0.5);
  }

  .card-body {
    padding: 0
  }

  .img-container {
    position: relative;
  }

  .program-unggulan-cards img {
    width: 100%;
  }

  .program-unggulan-cards .overlay-img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(52,152,219,0);
    top: 0;
    transition: 0.4s;
    cursor: pointer;
  }

  .program-name {
    font-weight: 800;
    font-size: 120%;
    cursor: auto;
    transition: 0.4s;
    cursor: pointer;
  }

  .program-name:hover {
    color: #1e73be
  }

  .program-price {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    cursor: auto
  }

  .program-price-normal {
    color: #777777;
    text-decoration: line-through;
    text-decoration-color: rgb(52,152,219);
  }

  .program-price-discount {
    color: rgb(52,152,219);
  }

  .program-free {
    color: rgb(52,152,219);
    font-weight: 800;
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    cursor: auto;
  }

  .program-paragraph {
    color: #777777;
    font-size: 14px;
    font-weight: 100;
    margin-top: 10px;
    line-height: 1.8;
    cursor: auto
  }

  .card-footer {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-top: 0;
    background-color: #FFF;
    border: 0px;
  }

  .card-footer div {
    color: #777777;
    font-size: 12px;
    font-weight: lighter;
    line-height: 1.8;
    cursor: auto
  }

  .card-footer-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-footer-items {
    display: flex;
    align-items: center;
  }

  .card-footer-items i {
    color: rgb(52,152,219);
    font-size: 12px;
  }

  .card-footer-items div {
    margin-top: 0;
    margin-left: 5px
  }

  @media screen and (max-width: 1201px) {
    .program-unggulan-cards {
      max-width: 400px !important;
    }
  }

  @media screen and (max-width: 991px) {
    .program-unggulan-cards {
      max-width: 700px !important;
    }
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