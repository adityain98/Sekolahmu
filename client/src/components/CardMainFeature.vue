<template>
  <div class="main-feature-cards" :style="{'background-color': backgroundColor}" @click="toFeature(mainFeature)">
    <i :class="iconClass"></i>
    <h3>{{ mainFeature }}</h3>
    <div>
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardMainFeature',
  props: [
    'iconClass',
    'mainFeature',
    'description',
    'backgroundColor'
  ],
  methods: {
    toFeature(feature) {
      this.$router.push(`/${feature.toLowerCase()}`)
    }
  }
}
</script>

<style>
  .main-feature-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 250px;
    padding-top: 60px;
    padding-bottom: 60px;
    padding-right: 20px;
    padding-left: 20px;
    transition: 0.5s;
    cursor: pointer;
    margin: 10px
  }

  .main-feature-cards i {
    font-size: 400%;
    color: white;
    transition: 0.5s
  }

  .main-feature-cards h3 {
    margin-top: 10px;
    color: white;
    font-weight: 500;
  }

  .main-feature-cards div {
    text-align: center;
    color: white;
    margin-top: 10px;
    font-size: 90%
  }

  .main-feature-cards:hover {
    -webkit-box-shadow: 0px 0px 11px 6px rgba(0,0,0,0.17);
    -moz-box-shadow: 0px 0px 11px 6px rgba(0,0,0,0.17);
    box-shadow: 0px 0px 11px 6px rgba(0,0,0,0.17);
  }

  .main-feature-cards:hover i{
    color: black
  }

</style>