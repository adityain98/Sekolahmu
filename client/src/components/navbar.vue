<template>
  <nav :style="styleNavbar">
    <div id="nav">
      <img src="https://www.sekolah.mu/wp-content/uploads/2019/11/sekolahmu-logo-email.png" id="logo" @click="toHome()">
      <div class="nav-icons">
        <div class="menu-icons" v-if="numberQuery < 5" @click="toHome()">
          <i class="fas fa-home" style="background-color: #f1c40f"></i>
          <div class="menu-icon-desc">Beranda</div>
        </div>
        <div class="menu-icons" v-if="numberQuery < 4">
          <i class="fas fa-school" style="background-color: #dd9933"></i>
          <div class="menu-icon-desc">Tentang</div>
        </div>
        <div class="menu-icons" v-if="numberQuery < 3">
          <i class="fas fa-user-graduate" style="background-color: #1abc9c"></i>
          <div class="menu-icon-desc">Ikut Program</div>
        </div>
        <div class="menu-icons" v-if="numberQuery < 2">
          <i class="fas fa-people-carry" style="background-color: #e74c3c"></i>
          <div class="menu-icon-desc">Kolaborasi</div>
        </div>
        <div class="menu-icons" v-if="numberQuery < 1">
          <i class="fab fa-readme" style="background-color: #1e73be"></i>
          <div class="menu-icon-desc">Blog</div>
        </div>
        <div class="menu-icons" v-if="numberQuery > 0 && numberQuery < 5" data-toggle="dropdown">
          <div class="dropdown-toggle menu-icon-desc" id="dropdown-menu">
            More
          </div>
        </div>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
      <div class="nav-icons">
        <i class="fas fa-shopping-bag nav-tiny-icons"></i>
        <i class="fas fa-heart nav-tiny-icons"></i>
        <i class="fa fa-search nav-tiny-icons"></i>
        <i class="fa fa-user nav-tiny-icons" id="profile"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      styleNavbar: {
        'background-color': 'rgba(255, 255, 255, 1)',
        position: 'fixed',
        'z-index': 1000,
        display: 'block',
        transition: '0.3s',
      },
      posScroll: 0,
      isScrollUp: false,
      numberQuery: 0
    }
  },
  methods: {
    handleScroll() {
      // determine scroll up or not
      // if(this.posScroll < window.scrollY) {
      //   this.isScrollUp = true
      //   this.posScroll = window.scrollY
      // }
      // else {
      //   this.isScrollUp = false
      //   this.posScroll = window.scrollY
      // }

      // change opacity
      if(window.scrollY < 2) {
        if(this.$route.name === 'program') {
          this.styleNavbar['background-color'] = 'rgba(255, 255, 255, 1)'
        }
        else {
          this.styleNavbar['background-color'] = 'rgba(255, 255, 255, 0)'
        }
          this.styleNavbar['-webkit-box-shadow'] = '0px 0px 0px 0px rgba(0,0,0,0)'
          this.styleNavbar['-moz-box-shadow'] = '0px 0px 0px 0px rgba(0,0,0,0)'
          this.styleNavbar['box-shadow'] = '0px 0px 0px 0px rgba(0,0,0,0)'
      }
      if(window.scrollY > 1) {
        this.styleNavbar['background-color'] = 'rgba(255, 255, 255, 1)'
        this.styleNavbar['-webkit-box-shadow'] = '0px 0px 11px 7px rgba(0,0,0,0.17)'
        this.styleNavbar['-moz-box-shadow'] = '0px 0px 11px 7px rgba(0,0,0,0.17)'
        this.styleNavbar['box-shadow'] = '0px 0px 11px 7px rgba(0,0,0,0.17)'
      }

      // hide show navbar
      // if(window.scrollY > 99) {
      //   this.styleNavbar.position = 'fixed'
      //   if(this.isScrollUp) {
      //     console.log()
      //     this.styleNavbar.display = 'none'
      //   }
      //   else {
      //     console.log(1234)
      //     this.styleNavbar.display = 'block'
      //   }
      // }
      // if(window.scrollY < 100) {
      //   this.styleNavbar.position = 'absolute'
      //   this.styleNavbar.display = 'block'
      // }
    },
    onResize() {
      const width = window.innerWidth

      if(width < 600) {
        this.numberQuery = 5
      }
      else if(width < 740) {
        this.numberQuery = 4
      }
      else if(width < 910) {
        this.numberQuery = 3
      }
      else if(width < 1060) {
        this.numberQuery = 2
      }
      else if(width < 1082) {
        this.numberQuery = 1
      }
      else{
        this.numberQuery = 0
      }
    },
    initialScreen() {
      const width = window.screen.width

      if(width < 600) {
        this.numberQuery = 5
      }
      else if(width < 740) {
        this.numberQuery = 4
      }
      else if(width < 910) {
        console.log(3, '===')
        this.numberQuery = 3
      }
      else if(width < 1060) {
        this.numberQuery = 2
      }
      else if(width < 1082) {
        this.numberQuery = 1
      }
      else{
        this.numberQuery = 0
      }
    },
    toHome() {
      this.$router.push('/')
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.onResize)
    this.initialScreen()
  },
  destroyed () {
    // window.removeEventListener('scroll', this.handleScroll);
    // window.removeEventListener('resize', this.onResize);
  }
}
</script>

<style>
  #logo {
    width: 200px;
    cursor: pointer;
  }

  nav {
    width: 100%
  }

  #nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    padding-right: 20px;
    padding-left: 20px
  }

  .nav-icons {
    display: flex;
    justify-content: center
  }

  #dropdown-menu {
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0
  }

  .menu-icons {
    display: flex;
    align-items: center;
    height: 8vh;
    padding-left: 12px;
    padding-right: 12px;
    cursor: pointer;
  }

  .menu-icons i {
    width: 40px;
    height: 40px;
    color: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    /* padding: 10px; */
  }

  .menu-icons:hover .menu-icon-desc {
    color: #f1c40f
  }

  .nav-tiny-icons {
    font-size: 18px;
    padding: 10px;
    transition: 0.3s;
    cursor: pointer
  }

  .nav-tiny-icons:hover {
    color: #56C1E8;
  }

  .menu-icon-desc {
    font-size: 90%;
    font-weight: 600;
    margin-left: 10px;
    transition: 0.3s
  }

  @media screen and (max-width: 425px) {
    .nav-icons i {
      display: none
    }
    #profile {
      display: block
    }
    #logo {
      width: 150px
    }
  }

</style>