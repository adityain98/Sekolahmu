<template>
  <div class="container">
    <main-feature/>
    <div id="program-unggulan">
      <h3 id="program-unggulan-title">PROGRAM UNGGULAN</h3>
      <div id="program-unggulan-menu">
        <div :style="styleAll" @click="changeBackground('all')">All</div>
        <div :style="styleKariermu" @click="changeBackground('kariermu')">Kariermu</div>
        <div :style="styleKelasmu" @click="changeBackground('kelasmu')">Kelasmu</div>
        <div :style="styleUjianmu" @click="changeBackground('ujianmu')">Ujianmu</div>
      </div>
      <transition-group name="list" id="program-unggulan-card" mode="in-out">
        <div v-for="program in programs" :key="program.id" class="program-unggulan-cards">
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
      </transition-group>
    </div>
  </div>
</template>

<script>
import MainFeature from '../components/MainFeature.vue'

export default {
  name: 'home',
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
      dataProgram:[ 
        {
          "id": 1,
          "category_name": "UJIANMU",
          "name": "JAGO BIOLOGI 12",
          "avatar": "https://www.sekolah.mu/wp-content/uploads/2019/11/biologi-12.png", 
          "abstract": "Program ini akan membantumu menelusuri materi biologi kelas 12 dengan menantang sekaligus menyenangkan!",
          "description": "\nTelusuri materi **Biologi Kelas 12 **dengan menyenangkan dan menantang! Di program ini, kamu akan belajar dengan melihat video, rumus, dan latihan soal. Kalau saat belajar ada yang kamu tidak pahami, kamu bisa langsung tanya guru di [Tanyamu](https://www.sekolah.mu/tanyamu/) (hanya di aplikasi).\n\n## Deskripsi Program\n**Mata Pelajaran Terkait** : Biologi\n**Tingkatan Kelas** : Kelas 12/SMA 3\n**Durasi** : 1 tahun\n**Jumlah Video** : 10\n**Jumlah Kuis** : 10\n\n<!--EndFragment-->\n",
          "price_normal": "0.00", 
          "price": "0.00", 
          "status": true
        },
        {
          "id": 2,
          "category_name": "UJIANMU",
          "name": "JAGO EKONOMI 11",
          "avatar": "https://www.sekolah.mu/wp-content/uploads/2019/11/ekonomi-11.png", 
          "abstract": "Kuasai materi Ekonomi kelas 11 dan jadilah yang terbaik di kelasmu! Dengan mengikuti program ini, kamu akan belajar Ekonomi dengan cara yang seru dan menantang melalui video materi, infografis, dan latihan soal serta pembahasannya.",
          "description": "\nKuasai materi Ekonomi kelas 11 dan jadilah yang terbaik di kelasmu! Dengan mengikuti program ini, kamu akan belajar Ekonomi dengan cara yang seru dan menantang melalui video materi, infografis, dan latihan soal serta pembahasannya.\n\n## Deskripsi Program\n**Tingkatan Kelas** : Kelas 11 SMA\n**Mata Pelajaran** : Ekonomi \n**Durasi** : 6 bulan\n**Jumlah Video** : 9\n**Jumlah Kuis** : 9\n\n<!--EndFragment-->\n",
          "price_normal": "0.00", 
          "price": "0.00", 
          "status": true
        },
        {
          "id": 3,
          "category_name": "UJIANMU", 
          "name": "JAGO FISIKA 10",
          "avatar": "https://www.sekolah.mu/wp-content/uploads/2019/11/fisika-10-1.png",
          "abstract": "Telusuri materi Fisika Kelas 10 dengan menyenangkan dan menantang! Di program ini, kamu akan belajar dengan melihat video, rumus, dan latihan soal. Kalau saat belajar ada yang kamu tidak pahami, kamu bisa langsung tanya guru di Tanyamu (hanya di aplikasi).",
          "description": "\nTelusuri materi **Fisika Kelas 10 **dengan menyenangkan dan menantang! Di program ini, kamu akan belajar dengan melihat video, rumus, dan latihan soal. Kalau saat belajar ada yang kamu tidak pahami, kamu bisa langsung tanya guru di [Tanyamu](https://www.sekolah.mu/tanyamu/) (hanya di aplikasi).\n\n## Deskripsi Program\n**Mata Pelajaran Terkait** : Fisika\n**Tingkatan Kelas** : Kelas 10/SMA 1\n**Durasi** : 6 bulan\n**Jumlah Video** : 10\n**Jumlah Kuis** : 10\n",
          "price_normal": "0.00", 
          "price": "0.00", 
          "status": true
        },
        {
          "id": 4,
          "category_name": "KELASMU",
          "name": "Belajar Bermain Musik",
          "avatar": "https://www.sekolah.mu/wp-content/uploads/2019/11/BERMAIN-MUSIK.jpg", 
          "abstract": "Kalau kamu punya ketertarikan di bidang musik, tapi bingung mau mulai belajar dari mana. Program Belajar Bermain Musik adalah program yang sangat sesuai untuk mu. Program ini membantu mengenalkan teknik vokal dan bermain musik sederhana. Program diawali dengan pengenalan tentang teknik dasar vokal dan musik, dan di akhir kamu diminta menunjukkan kemampuan bermusik mu melalui video kreatif yang kamu buat sendiri.",
          "description": "\nKalau kamu punya ketertarikan di bidang musik, tapi bingung mau mulai belajar dari mana. Program Belajar Bermain Musik adalah program yang sangat sesuai untuk mu. Program ini membantu mengenalkan teknik vokal dan bermain musik sederhana. Program diawali dengan pengenalan tentang teknik dasar vokal dan musik, dan di akhir kamu diminta menunjukkan kemampuan bermusik mu melalui video kreatif yang kamu buat sendiri.\n\n## Deskripsi Program\n**Mata Pelajaran** : Seni Budaya dan Prakarya\n**Tingkatan Kelas** : SMP/MTs Kelas 7 – 13 Tahun\n**Durasi** : 1,5 bulan\n**Full Online/Blended** : Blended\n**Kuota** : 80\n**Tanggal Mulai** : 13 Januari 2020\n\n**Kompetensi** & **Tujuan Pembelajaran**\n\nBerorientasi aksi : Menyanyi dengan satu suara \nBekerjasama : Memainkan alat musik sederhana \n\n## Tentang Ibu Giceilla\n\nIbu Giceilla adalah guru Seni Budaya dan Prakarya di SMPN 211 Jakarta. Bermain musik adalah salah satu hobi beliau sejak muda, sehingga beliau senang mengajarkan murid-muridnya keterampilan bermusik dan bernyanyi.\n",
          "price_normal": "600000.00", 
          "price": "300000.00", 
          "status": true 
        },
        {
          "id": 5,
          "category_name": "KELASMU",
          "name": "Demo: Transformasi Energi (Blended)", 
          "avatar": "https://www.sekolah.mu/wp-content/uploads/2019/11/TRANSFORMASI-ENERGI.jpg", 
          "abstract": "Program ini mengajak kalian siswa kelas 10 untuk berkolaborasi membuat kontribusi langsung kepada lingkungan sekitar dengan mengaplikasikan Ilmu Fisika. Kalian akan diajak mengikuti pembelajaran yang menarik dan terlibat dalam proses penggunaan energi terbarukan. Jangan tunda lagi, yuk gabung bersama Ibu Yenis di program Transformasi Energi!",
          "description": "\nProgram ini mengajak kalian siswa kelas 10 untuk berkolaborasi membuat kontribusi langsung kepada lingkungan sekitar dengan mengaplikasikan Ilmu Fisika. Kalian akan diajak mengikuti pembelajaran yang menarik dan terlibat dalam proses penggunaan energi terbarukan. Jangan tunda lagi, yuk gabung bersama Ibu Yenis di program Transformasi Energi!\n\n## **Tentang Program **\n**Mata Pelajaran Terkait** : IPA, Fisika \n**Tingkat/Kelas** : 10\n**Durasi Program** : 3 Bulan\n**Full Online/Blended** : Blended\n**Kuota** : 30 siswa\n**Tanggal Mulai** : 13 Januari 2020\n**Kompetensi** : **Tujuan Program**\nCerdas**Menganalisis konsep energi, usaha (kerja) hubungan usaha (kerja) dan perubahan energi, hukum kekekalan energi serta penerapannya dalam peristiwa hari-hari**.\nInovatif**Menerapkan metode ilmiah untuk mengajukan gagasan penyelesaian masalah gerak dalam kehidupan sehari-hari yang berkaitan dengan konsep energi, usaha (kerja) dan hukum kekekalan energi**.\n\n## **Tentang Ibu Yenis**\n\nIbu Yenis sudah mengajar lebih dari 17 tahun. Sebelum bergabung di SMAN 60, Ibu Yenis pernah mengajar Fisika di sekolah Bakti Mulya. Selalu mengajak siswa berperan aktif dalam pembelajaran dan mendorong siswa melakukan ekperimen yang inovatif adalah ciri khas pengajarannya.\n\n## **Tentang Sekolah **\n\nSMAN 60 \n",
          "price_normal": "0.00", 
          "price": "0.00", 
          "status": true
        },
        {
          "id": 6,
          "category_name": "KELASMU",
          "name": "Desain Cita-cita",
          "avatar": "https://www.sekolah.mu/wp-content/uploads/2019/11/Web-Cover-Template-24.jpg", 
          "abstract": "Kamu mungkin pernah mengalami kebingungan atau takut salah mengambil langkah dalam menentukan masa depan. Tenang, program ini akan membantu mu untuk mendesain cita-cita dan masa depan. Kamu akan diajarkan bagaimana caranya menjadi pemecah masalah yang baik, didampingi menyusun rencana masa depan, dan dilatih kreativitasnya untuk menggapai cita-cita. Kamu akan diajarkan langsung oleh Kepala Sekolah _School of Human_, sekolah alternatif yang memang mengembangkan peserta didiknya berdasarkan kecerdasan majemuk yang dimiliki, bakat dan minat.",
          "description": "\nKamu mungkin pernah mengalami kebingungan atau takut salah mengambil langkah dalam menentukan masa depan. Tenang, program ini akan membantu mu untuk mendesain cita-cita dan masa depan. Kamu akan diajarkan bagaimana caranya menjadi pemecah masalah yang baik, didampingi menyusun rencana masa depan, dan dilatih kreativitasnya untuk menggapai cita-cita. Kamu akan diajarkan langsung oleh Kepala Sekolah **School of Human**, sekolah alternatif yang memang mengembangkan peserta didiknya berdasarkan kecerdasan majemuk yang dimiliki, bakat dan minat.\n\n## Deskripsi Program\n**Mata Pelajaran** : Bimbingan dan Konseling\n**Tingkatan Kelas** : SMA/MA (16-18 tahun) \n**Durasi** : 3 bulan\n**Full Online/Blended** : Blended\n**Kuota** : 200\n**Tanggal Mulai** : 13 Januari 2020\n\n**Kompetensi** & **Tujuan Pembelajaran**\n\nBerprinsip : Mampu menyelesaikan masalah baik yang berasal dari internal maupun external dalam rangka mencapai profesi impian sebuah dengan bakat dan minat \nBerkomitmen : Mampu melaksanakan komitmen sesuai dengan apa yang telah dibuat dalam dokumen desain cita cita \nCerdas : Mampu menyelesaikan masalah (Problem solving) dan kreatif (Kreatif) untuk menggapai cita-cita \n\n## Tentang Andi Budimanjaya\n\n Andi Budimanjaya adalah Kepala Sekolah dari SMA School of Human. \n\nSchool of Human adalah sekolah yang menghargai setiap potensi manusia dan membantu peserta didiknya menemukan profesi yang sesuai dengan bakat, minat dan pandangan dunianya. Sehingga setiap siswa di School of Human siap menghadapi era globalisasi dengan menjunjung tinggi akhlak. \n\nSekolah ini menggunakan metode **multiple intelligence research** untuk mengetahui gaya belajar dan kecenderungan kecerdasan siswa. Selain itu, sekolah ini juga menekankan pembelajaran dengan **project base learning** agar proses pembelajaran tidak hanya menyasar pada kebutuhan akademis, tetapi juga pembangunan karakter, keterampilan, kreativitas, dan juga pemecahan masalah.\n",
          "price_normal": "600000.00", 
          "price": "300000.00", 
          "status": true
        },
        {
          "id": 7,
          "category_name": "KARIERMU",
          "name": "Barista Muda – Gordi (Blended)",
          "avatar": "https://www.sekolah.mu/wp-content/uploads/2019/12/Icon-24.png",
          "abstract": "Apakah kamu pencinta kopi? Di program ini, kamu bisa kerja menjadi barista di salah satu kafe terkeren se-Jakarta, Gordi HQ Jeruk Purut. Ayo ikut program ini untuk belajar cara membuat kopi yang mantap dan mengalami hidup sebagai barista muda.",
          "description": "\nApakah kamu pencinta kopi? Di program ini, kamu bisa kerja menjadi barista di salah satu kafe terkeren se-Jakarta, Gordi HQ Jeruk Purut. Ayo ikut program ini untuk belajar cara membuat kopi yang mantap dan mengalami hidup sebagai barista muda. \n\n## Tentang Program\n**Mata Pelajaran Terkait** : Bisnis Layanan\n**Kelas** : SMA (16-18 tahun)\n**Durasi Belajar** : 1,5 bulan\n**Full Online/Blended** : Blended\n**Kuota** : 5\n**Tanggal Mulai** : 13 Januari 2020\n**Kompetensi** : **Tujuan Program**\nBerprinsipMenerapkan teori, konsep dan pengetahuan untuk menyelesaikan suatu permasalahan\nCerdasMenganalisa dan mengevaluasi suatu kondisi untuk menemukan penyebab dari suatu permasalahan\nBerorientasi tindakanMengidentifikasi tujuan, merumuskan ide, dan membuat keputusan selama proses belajar berlangsung\nBerorientasi tindakanMengusulkan ide solusi yang memberikan dampak positif\n\n## Tentang Gordi\n\nGordi hadir untuk menghubungkan penggemar kopi dengan beragam kopi terbaik dari rumah sangrai di seluruh Indonesia! Gordi melakukan ini dengan layanan pengiriman kopi mereka, dan juga melalui kedai kopi Gordi HQ di daerah Jeruk Purut, Jakarta Selatan. Gordi HQ adalah tempat dimana Anda dapat belajar semua yang ingin diketahui tentang kopi, dan kamu selalu menjadi bagian dari komunitas penggemar kopi Gordi. Click [link ini](https://www.gordi.id) untuk lihat website Gordi. \n\n## Jadwal Program\n**Aktivitas** : **Tanggal & Waktu** : **Lokasi**\nProgram Dibuka OnlineJanuari 13Sekolahmu App/Website\nWorkshop BaristaTBAGordi HQ\nOn-the-job training (2 pekan)TBA, 8:00-16:00Gordi HQ\n\n### Lokasi Gordi HQ\n\n<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.844291139457!2d10 6.80958851430054!3d-6.284189763259682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2 !1s0x2e69f1f6aaaaf82b%3A0x63c4be8f258156e3!2sGordi%20HQ!5e0!3m2!1sen!2sid!4v15750 15752657!5m2!1sen!2sid\" style=\"border:0;\" allowfullscreen=\"\" width=\"600\" height=\"450\" frameborder=\"0\"></iframe>\n",
          "price_normal": "1600000.00", 
          "price": "800000.00",
          "status": true
        },
        {
          "id": 8,
          "category_name": "KARIERMU",
          "name": "Content Creator Muda – Inibudi (Blended)",
          "avatar": "https://www.sekolah.mu/wp-content/uploads/2019/12/CONTENT-CREATOR-1.jpg",
          "abstract": "Sudah saatnya kamu mulai mengoptimalkan penggunaan digitalmu, salah satunya dengan membuat konten yang bisa menginspirasi banyak orang. Program Content Creator Muda akan memberi tahu kamu tips-tips yang keren gimana caranya memproduksi konten digital menarik. Dibimbing langsung oleh tim Inibudi, yang sudah berpengalaman dalam membuat konten-konten belajar yang bermanfaat.",
          "description": "\nSudah saatnya kamu mulai mengoptimalkan penggunaan digitalmu, salah satunya dengan membuat konten yang bisa menginspirasi banyak orang. Program Content Creator Muda akan memberi tahu kamu tips-tips yang keren gimana caranya memproduksi konten digital menarik. Dibimbing langsung oleh tim **Inibudi**, yang sudah berpengalaman dalam membuat konten-konten belajar yang bermanfaat.\n\n## Deskripsi Program\n**Mata Pelajaran** : Teknologi Terapan\n**Tingkatan Kelas** : SMA/MA (16-18 tahun) \n**Durasi** : 1,5 bulan\n**Full Online/Blended** : Blended\n**Kuota** : 5\n**Tanggal Mulai** : 13 Januari, 2020\n\n**Kompetensi** & **Tujuan Pembelajaran**\n\nKomunikatif : Murid mampu membuat konten digital untuk menggugah masyarakat agar terlibat dalam suatu kampanye positif\nKomunikatif : Murid mampu menuangkan dan mengkomunikasikan gagasan dalam beragam bentuk multimedia \nInovatif : Mendemonstrasikan kemampuan menggunakan beberapa alat bantu untuk menciptakan media komunikasi yang menarik dan inovatif \n\n## Tentang Inibudi\n\nInibudi adalah inisiatif pendidikan yang membuat dan membagikan materi digital berupa video belajar berkualitas untuk mempercepat peningkatan mutu dan akses pendidikan di Indonesia.\n\nInibudi melibatkan partisipasi masyarakat melalui program #GuruBerbudi, #TemanBelajar, dan #DukungBelajar. Didirikan pada 2013, semua video Inibudi dirancang oleh guru dan orang-orang yang kompeten di bidangnya, yang disesuaikan dengan tujuan dan materi kurikulum nasional.\n",
          "price_normal": "1600000.00", 
          "price": "800000.00",
          "status": true
        },
        {
          "id": 9,
          "category_name": "KARIERMU",
          "name": "Content Strategist Muda – The Body Shop (Blended)",
          "avatar": "https://www.sekolah.mu/wp-content/uploads/2019/12/CONTENT-STRATEGIST-MUDA.jpg",
          "abstract": "Gimana ya caranya buat konten yang menarik dan efektif untuk target penonton? Program Content Strategist Muda akan mengajarimu bagaimana caranya mengekspresikan ide, memahami target penontonmu, dan sesuai dengan barang/jasa yang ditawarkan dan memiliki nilai sosial. Ayok gabung di program ini, karena kamu akan belajar langsung dengan ahlinya dari tim The Body Shop.",
          "description": "\nGimana ya caranya buat konten yang menarik dan efektif untuk target penonton? Program Content Strategist Muda akan mengajarimu bagaimana caranya mengekspresikan ide, memahami target penontonmu, dan sesuai dengan barang/jasa yang ditawarkan dan memiliki nilai sosial. Ayok gabung di program ini, karena kamu akan belajar langsung dengan ahlinya dari tim The Body Shop.\n\n## Deskripsi Program\n**Mata Pelajaran** : Seni Budaya dan Prakarya\n**Tingkatan Kelas** : SMA/MA (16-18 tahun) \n**Durasi** : 1,5 bulan\n**Full Online/Blended** : Blended\n**Kuota** : 5\n**Tanggal Mulai** : 13 Januari 2020\n\n**Kompetensi** & **Tujuan Pembelajaran**\n\n Komunikatif : Mengekspresikan konsep, ide, dan makna melalui sebuah postingan \n Inovatif : Membuat konten yang menarik sesuai dengan barang dan jasa yang ditawarkan dan memiliki nilai sosial \n Cerdas : Memahami cara membuat postingan yang menarik sesuai dengan target penonton, produk dan/atau jasa yang akan ditawarkan \n\n## Tentang The Body Shop\n\n **The Body Shop International plc**, atau lebih dikenal dengan **The Body Shop**, adalah perusahaan franchise kosmetika kedua terbesar di dunia. Perusahaan ini, yang berpusat di [Littlehampton](https://id.wikipedia.org/wiki/Littlehampton), [Sussex Barat](https://id.wikipedia.org/wiki/Sussex_Barat), Inggris, didirikan oleh Dame [Anita Roddick](https://id.wikipedia.org/wiki/Anita_Roddick) dan terkenal oleh produk-produknya yang menggunakan zat herbal mulai dari Body Butter, Peppermint Foot Lotion, dan Hemp. The Body Shop juga menekankan dukungannya terhadap berbagai macam isu yang beredar di seluruh dunia. Slogan-slogan mereka antara lain adalah: **Against Animal Testing** (Lawan Uji Coba terhadap Hewan), **Support Community Trade**, **Activate Self Esteem**, **Defend Human Rights** (Tegakkan HAM), dan **Protect Our Planet** (Proteksikan Planet Kita). \n",
          "price_normal": "1600000.00", 
          "price": "800000.00",
          "status": true
        }
      ],
      amountAll: 6
    }
  },
  computed: {
    allPrograms() {
      const arr = []
      this.dataProgram.forEach(program => {
        if(arr.length < this.amountAll) {
          arr.push(program)
        }
      })
      return arr
    },
    kariermuPrograms() {
      return this.dataProgram.filter(program => program.category_name === 'KARIERMU')
    },
    ujianmuPrograms() {
      return this.dataProgram.filter(program => program.category_name === 'UJIANMU')
    },
    kelasmuPrograms() {
      return this.dataProgram.filter(program => program.category_name === 'KELASMU')
    },
    programs() {
      if(this.menu == 'all') {
        const arr = []
        this.dataProgram.forEach(program => {
          if(arr.length < this.amountAll) {
            arr.push(program)
          }
        })
        return arr
      }
      else if(this.menu == 'kariermu') {
        return this.dataProgram.filter(program => program.category_name === 'KARIERMU')
      }
      else if(this.menu == 'ujianmu') {
        return this.dataProgram.filter(program => program.category_name === 'UJIANMU')
      }
      else {
        return this.dataProgram.filter(program => program.category_name === 'KELASMU')
      }
    }
  },
  methods: {
    changeBackground(menu) {
      this.menu = menu
    },

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
  components: {
    MainFeature
  }
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
    cursor: pointer;
  }

  .program-unggulan-cards {
    width: 340px;
    margin: 10px;
    border-width: thin;
    border-color: rgba(214, 214, 214, 0.4);
    border-style: solid;
    transition: 0.4s
  }  

  .program-unggulan-cards:hover {
    -webkit-box-shadow: 0px 0px 11px 6px rgba(0,0,0,0.09);
    -moz-box-shadow: 0px 0px 11px 6px rgba(0,0,0,0.09);
    box-shadow: 0px 0px 11px 6px rgba(0,0,0,0.09);
  }

  .program-unggulan-cards:hover .overlay-img{
    background-color: rgba(52,152,219,0.5);
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
    transition: 0.4s
  }

  .program-name {
    font-weight: 800;
    font-size: 120%;
    cursor: auto;
    transition: 0.4s
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
    text-decoration-color: #56C1E8;
  }

  .program-price-discount {
    color: #56C1E8;
  }

  .program-free {
    color: #56C1E8;
    font-weight: 800;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    cursor: auto;
  }

  .program-paragraph {
    color: #777777;
    font-size: 14px;
    font-weight: lighter;
    margin-top: 10px;
    line-height: 1.8;
    cursor: auto
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