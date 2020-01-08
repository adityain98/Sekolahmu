<template>
  <div id="main-feature">
    <h3 id="main-feature-title">FITUR UTAMA SEKOLAHMU</h3>
    <div id="main-feature-desc">
      <div>
        Beragam kebutuhan belajar dalam satu tempat, terhubung melalui smartphone. Sekolahmu menghadirkan semuanya untuk murid, supaya murid bisa fokus dan berhasil meraih impian.
      </div>
    </div>
    <div id="main-feature-card">
      <div class="main-feature-cards" style="background-color: #56C1E8">
        <i class="far fa-comments"></i>
        <h3>Tanyamu</h3>
        <div>
          Tanyakan latihan soal atau tugas rumah yang sulit kepada guru dan temanmu dari berbagai daerah.
        </div>
      </div>
      <div class="main-feature-cards" style="background-color: #68D5B9">
        <i class="fa fa-tasks"></i>
        <h3>Ujianmu</h3>
        <div>
          Pemahaman belajar yang lebih terstruktur untuk menghadapi berbagai ujian pendidikan.
        </div>
      </div>
      <div class="main-feature-cards" style="background-color: #F7A01D">
        <i class="fa fa-school"></i>
        <h3>Kelasmu</h3>
        <div>
          Jadi lebih kompeten melalui program blended learning yang menyenangkan bersama siswa sekolah lain.
        </div>
      </div>
      <div class="main-feature-cards" style="background-color: #F17E58">
        <i class="far fa-building"></i>
        <h3>Kariermu</h3>
        <div>
          Program magang bersertifikasi di perusahaan dan interaksi langsung dengan para pakar.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#main-feature {
    margin-top: 200px;
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
    width: 50vw
  }

  #main-feature-card {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap
  }

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