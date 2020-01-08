<template>
  <div id="main-feature" class="container">
    <h3 id="main-feature-title">FITUR UTAMA SEKOLAHMU</h3>
    <div id="main-feature-desc">
      <div>
        Beragam kebutuhan belajar dalam satu tempat, terhubung melalui smartphone. Sekolahmu menghadirkan semuanya untuk murid, supaya murid bisa fokus dan berhasil meraih impian.
      </div>
    </div>
    <div id="main-feature-card">
      <card-main-feature 
        v-for="(feature, i) in features" :key="i"
        :background-color="feature.backgroundColor"
        :icon-class="feature.iconClass" 
        :main-feature="feature.mainFeature" 
        :description="feature.description"
      />
    </div>
  </div>
</template>

<script>
import CardMainFeature from './CardMainFeature.vue'

export default {
  name: 'MainFeature',
  data() {
    return {
      features: [
        {
          backgroundColor: '#56C1E8',
          iconClass: {
            far: true,
            'fa-comments': true
          },
          mainFeature: 'Tanyamu',
          description: 'Tanyakan latihan soal atau tugas rumah yang sulit kepada guru dan temanmu dari berbagai daerah.'
        },
        {
          backgroundColor: '#68D5B9',
          iconClass: {
            fa: true,
            'fa-tasks': true
          },
          mainFeature: 'Ujianmu',
          description: 'Pemahaman belajar yang lebih terstruktur untuk menghadapi berbagai ujian pendidikan.'
        },
        {
          backgroundColor: '#F7A01D',
          iconClass: {
            fa: true,
            'fa-school': true
          },
          mainFeature: 'Kelasmu',
          description: 'Jadi lebih kompeten melalui program blended learning yang menyenangkan bersama siswa sekolah lain.'
        },
        {
          backgroundColor: '#F17E58',
          iconClass: {
            far: true,
            'fa-building': true
          },
          mainFeature: 'Kariermu',
          description: 'Program magang bersertifikasi di perusahaan dan interaksi langsung dengan para pakar.'
        },
      ]
    }
  },
  components: {
    CardMainFeature
  }
}
</script>

<style>
  #main-feature {
    margin-top: 50px;
  }

  #main-feature-title {
    font-weight: 300;
    text-align: center
  }

  #main-feature-desc {
    color: #777777;
    font-size: 90%;
    font-weight: 200;
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }

  #main-feature-desc div {
    max-width: 720px;
    text-align: center
  }

  #main-feature-card {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 1201px) {
    .main-feature-cards {
      max-width: 400px !important;
    }
  }

  @media screen and (max-width: 991px) {
    .main-feature-cards {
      max-width: 700px !important;
    }
  }

</style>