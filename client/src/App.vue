<template>
  <div>
    <navbar/>
    <div style="padding-top: 10vh">
      <router-view/>
    </div>
    <div id="footer">
      <div class="container">© 2020 Sekolahmu</div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
  #footer {
    height: 20vh;
    background-color: #11161A;
    color: #BABABA;
    display: flex;
    align-items: center
  }

  #footer div {
    font-size: 80%
  }

</style>
