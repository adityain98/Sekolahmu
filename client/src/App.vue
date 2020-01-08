<template>
  <div style="background-color: #F3F3F3">
    <navbar/>
    <div style="padding-top: 10vh">
      <router-view/>
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

</style>
