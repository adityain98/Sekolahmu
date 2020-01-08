<template>
  <div class="program-unggulan-cards">
    <div class="card-body">
      <div class="img-container" @click="toProgram(program.id)">
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
</template>

<script>
export default {
  props: [
    'program'
  ],
  methods: {
    toProgram(id) {
      this.$router.push(`/programs/${id}`)
    }
  }
}
</script>

<style>
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
    padding: 0;
    background-color: #FFF
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
    align-items: center;
    margin-top: 10px;
    cursor: auto
  }

  .program-price-normal {
    color: #777777;
    text-decoration: line-through;
    text-decoration-color: rgb(52,152,219);
    font-size: 90%
  }

  .program-price-discount {
    color: rgb(52,152,219);
    font-size: 100%;
    font-weight: 600; 
    margin-left: 10px
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

</style>