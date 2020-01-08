<template>
  <div style="min-height: 72vh; background-color: #fff">
    <div style="background-color: #3498db; width: 100%; height: 40vh">
      <div class="container d-flex justify-content-between" style="height: 100%">
        <div class="d-flex justify-content-center flex-column" style="padding-top: 50px; padding-bottom: 50px">
          <div style="font-size: 70%; color: white" class="mb-2">Sekolahmu > Program > {{ program.name }}</div>
          <div style="font-size: 36px; color: white; font-weight: 600" class="mt-2 mb-2">{{ program.name }}</div>
          <div class="d-flex align-items-center mt-5">
            <i class="fas fa-user-friends" style="color: white; font-size: 13px"></i>
            <div style="color: white; font-size: 13px" class="ml-2">0 murid terdaftar</div>
          </div>
          <div class="d-flex align-items-center mt-2">
            <i class="fas fa-globe" style="color: white; font-size: 13px"></i>
            <div style="color: white; font-size: 13px" class="ml-2">Bahasa Indonesia</div>
          </div>
        </div>
        <img style="align-self: flex-end; width: 330px" :src="program.avatar"/>
      </div>
    </div>
    <div style="background-color: #F0F3F6; height: 6vh">
      <div class="container d-flex" style="color: white; height: 100%;">
        <div class="pl-4 pr-4 d-flex align-items-center" style="background-color: #3498db; height: 100%; font-size: 14px; font-weight: 600">Deskripsi</div>
      </div>
    </div>
    <div class="container d-flex justify-content-between mt-4 pb-5">
      <div class="mr-5">
        <div class="d-flex justify-content-center mb-4">
          <img :src="program.avatar" style="max-width: 500px">
        </div>
        <div>
          {{ program.description }}
        </div>
      </div>
      <div>
        <div style="width: 330px"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    program() {
      return this.$store.state.dataProgram.filter(program => program.id == this.$route.params.id)[0]
    }
  }
}
</script>

<style>

</style>