<template>
  <div>
    <navbar/>
    <div style="padding-top: 8vh">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

</style>
