<template>
  <div
    class="landing-page font-sans antialiased text-gray-700 bg-white selection:bg-[rgba(0,119,137,0.2)] selection:text-[rgba(0,119,137,1)] overflow-x-hidden"
  >
    <!-- 1. Navigation Bar -->
    <NavbarLanding />

    <!-- 2. Hero Section dengan Parallax -->
    <header
      id="home"
      class="min-h-screen h-[calc(100vh-80px)] lg:h-screen bg-cover bg-center relative flex items-center justify-center text-white text-center overflow-hidden"
      style="
        background-image: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D');
      "
    >
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"
      ></div>

      <!-- Floating elements -->
      <div
        class="absolute top-20 left-10 w-6 h-6 bg-[rgba(127,220,214,0.3)] rounded-full blur-sm animate-float-slow"
      ></div>
      <div
        class="absolute top-40 right-20 w-8 h-8 bg-[rgba(0,119,137,0.2)] rounded-full blur-sm animate-float-medium"
      ></div>
      <div
        class="absolute bottom-32 left-20 w-5 h-5 bg-[rgba(127,220,214,0.4)] rounded-full blur-sm animate-float-fast"
      ></div>

      <div class="relative z-10 p-6 max-w-4xl lg:max-w-6xl">
        <div class="mb-8">
          <h1
            class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-6 lg:mb-8 !leading-tight tracking-tight"
            style="text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5)"
          >
            Hidup Sehat,
            <span class="text-[rgba(255, 255, 255, 1)]">
              Mulai Dari Sini.
            </span>
          </h1>
        </div>

        <div>
          <p
            class="text-xl sm:text-2xl lg:text-3xl mb-10 lg:mb-12 opacity-95 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
          >
            Temukan alat, inspirasi, dan dukungan yang Anda butuhkan untuk
            mencapai tujuan kesehatan Anda bersama Sehatin.
          </p>
        </div>

        <!-- Tombol di hero section dihilangkan -->
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div
          class="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>

    <!-- Tombol Floating yang muncul setelah scroll ke bawah -->
    <div
      v-if="showExploreOverlay"
      class="fixed bottom-8 right-8 z-50 transition-all duration-500"
      :class="
        showExploreOverlay
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      "
    >
      <button
        @click="handleNavigation('/dashboard')"
        class="group relative bg-[rgba(0,119,137,1)] hover:bg-[rgba(0,90,105,1)] cursor-pointer text-white font-medium py-4 px-8 rounded-full text-lg transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[rgba(0,119,137,0.4)] overflow-hidden shadow-2xl"
      >
        <span class="relative z-10">Jelajahi Sekarang</span>
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
        ></div>
      </button>
    </div>

    <!-- 3. Features Teaser Section dengan Hover Effects -->
    <section id="fitur" class="py-24 lg:py-32 bg-white relative">
      <!-- Background decoration -->
      <div
        class="absolute top-0 left-0 w-72 h-72 bg-[rgba(0,119,137,0.03)] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-96 h-96 bg-[rgba(127,220,214,0.03)] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
      ></div>

      <div class="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div
          class="text-center mb-20 lg:mb-24 animate-on-scroll"
          data-animation="fade-in-up"
        >
          <h2
            class="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-6"
          >
            Kenapa Memilih Sehatin?
          </h2>
          <p
            class="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Kami menyediakan fitur komprehensif untuk mendukung perjalanan
            kesehatan Anda secara menyeluruh.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div
            v-for="(feature, index) in teaserFeatures"
            :key="feature.title"
            class="group relative bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl transition-all duration-700 animate-on-scroll hover:bg-white hover:shadow-2xl hover:scale-105 border border-gray-100/50 hover:border-[rgba(0,119,137,0.1)]"
            data-animation="fade-in-up"
            :data-delay="100 + index * 150"
          >
            <!-- Hover effect background -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-[rgba(0,119,137,0.02)] to-[rgba(127,220,214,0.02)] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <div class="relative z-10">
              <div
                class="p-5 bg-gradient-to-br from-[rgba(0,119,137,0.1)] to-[rgba(127,220,214,0.1)] rounded-2xl mb-8 inline-flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
              >
                <!-- Ikon Lucide -->
                <component
                  :is="feature.icon"
                  class="w-8 h-8 lg:w-10 lg:h-10 text-[rgba(0,119,137,1)] group-hover:text-[rgba(0,90,105,1)] transition-colors duration-500"
                />
              </div>

              <h3
                class="text-2xl lg:text-3xl font-medium mb-4 text-gray-900 tracking-tight group-hover:text-[rgba(0,119,137,1)] transition-colors duration-300"
              >
                {{ feature.title }}
              </h3>

              <p
                class="text-gray-600 text-base leading-relaxed flex-grow font-light group-hover:text-gray-700 transition-colors duration-300"
              >
                {{ feature.description }}
              </p>

              <span
                class="mt-8 inline-block text-sm font-medium text-[rgba(0,119,137,0.8)] uppercase tracking-wider py-2 px-4 bg-[rgba(0,119,137,0.05)] rounded-full group-hover:bg-[rgba(0,119,137,0.1)] transition-colors duration-300"
              >
                Fitur Member
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Food Section dengan Grid Layout Modern -->
    <section id="resep" class="py-20 lg:py-28">
      <div class="container mx-auto px-6 lg:px-8">
        <div
          class="text-center mb-12 lg:mb-16 animate-on-scroll"
          data-animation="fade-in-up"
        >
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800">
            Resep Sehat & Lezat Pilihan
          </h2>
          <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan inspirasi hidangan bergizi yang mudah dibuat dan memanjakan
            lidah.
          </p>
        </div>
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-10">
          <div
            v-if="foods.length > 0"
            class="lg:col-span-8 bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl animate-on-scroll group"
            data-animation="fade-in-up"
          >
            <div class="md:flex h-full">
              <div class="md:w-1/2 lg:w-3/5 overflow-hidden h-64 md:h-full">
                <img
                  :src="foods[0].image"
                  :alt="'Gambar ' + foods[0].name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                class="p-6 lg:p-8 flex flex-col justify-center md:w-1/2 lg:w-2/5"
              >
                <span
                  class="text-xs font-semibold text-[rgba(0,119,137,1)] uppercase tracking-wider mb-2"
                  >Resep Unggulan</span
                >
                <h3
                  class="text-2xl lg:text-3xl font-semibold mb-3 text-gray-800"
                >
                  {{ foods[0].name }}
                </h3>
                <p
                  class="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3"
                >
                  {{ foods[0].description }}
                </p>
                <button
                  @click="handleNavigation('/dashboard/makanan')"
                  class="inline-flex items-center text-sm font-semibold text-white bg-[rgba(0,119,137,1)] hover:bg-[rgba(0,90,105,1)] py-2.5 px-5 rounded-lg transition-colors duration-200 self-start group"
                >
                  Lihat Detail
                  <span
                    class="opacity-0 group-hover:opacity-100 group-hover:ml-1.5 transition-all duration-300"
                    >&rarr;</span
                  >
                </button>
              </div>
            </div>
          </div>
          <div
            v-for="(food, index) in foods.slice(1)"
            :key="food.name"
            class="lg:col-span-4 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-on-scroll group"
            data-animation="fade-in-up"
            :data-delay="100 + index * 100"
          >
            <div class="overflow-hidden h-52">
              <img
                :src="food.image"
                :alt="'Gambar ' + food.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">
                {{ food.name }}
              </h3>
              <p
                class="text-gray-600 text-xs mb-4 leading-relaxed line-clamp-2"
              >
                {{ food.description }}
              </p>
              <button
                @click="handleNavigation('/dashboard/makanan')"
                class="inline-flex items-center text-xs font-semibold text-[rgba(0,119,137,1)] hover:text-[rgba(0,90,105,1)] transition-colors duration-200 group"
              >
                Selengkapnya
                <span
                  class="opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all duration-300"
                  >&rarr;</span
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Exercise Section dengan Interactive Cards -->
    <section id="latihan" class="py-24 lg:py-32 bg-white relative">
      <!-- Background pattern - menggunakan CSS class sederhana -->
      <div
        class="absolute inset-0 opacity-5 bg-[length:100px_100px] bg-repeat exercise-pattern"
      ></div>

      <div class="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div
          class="text-center mb-20 lg:mb-24 animate-on-scroll"
          data-animation="fade-in-up"
        >
          <h2
            class="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-6"
          >
            Rutinitas Latihan Efektif
          </h2>
          <p
            class="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Capai target kebugaran Anda dengan panduan latihan yang dirancang
            oleh para ahli.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <div
            v-for="(exercise, index) in exercises"
            :key="exercise.name"
            class="group relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-700 animate-on-scroll hover:shadow-2xl hover:scale-105 border border-gray-100/50"
            data-animation="fade-in-up"
            :data-delay="index * 200"
          >
            <div class="overflow-hidden h-64 relative">
              <img
                :src="exercise.image"
                :alt="'Gambar ' + exercise.name"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
            </div>

            <div class="p-7 lg:p-8 relative">
              <h3
                class="text-2xl lg:text-3xl font-medium mb-4 text-gray-900 tracking-tight group-hover:text-[rgba(0,119,137,1)] transition-colors duration-300"
              >
                {{ exercise.name }}
              </h3>

              <p
                class="text-gray-600 text-base mb-6 leading-relaxed line-clamp-3 font-light group-hover:text-gray-700 transition-colors duration-300"
              >
                {{ exercise.description }}
              </p>

              <button
                @click="handleNavigation('/dashboard/latihan')"
                class="group/btn inline-flex items-center text-base font-medium text-[rgba(0,119,137,1)] hover:text-[rgba(0,90,105,1)] transition-all duration-300"
              >
                <span class="mr-2">{{ exercise.linkText }}</span>
                <ArrowRight
                  class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                />
              </button>
            </div>

            <!-- Hover effect border -->
            <div
              class="absolute inset-0 border-2 border-transparent rounded-3xl group-hover:border-[rgba(0,119,137,0.1)] transition-all duration-500"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Call to Action Section dengan Particle Effect -->
    <section
      id="gabung"
      class="py-24 lg:py-32 relative bg-gradient-to-br from-[rgba(0,119,137,0.95)] via-[rgba(0,119,137,0.9)] to-[rgba(0,80,95,0.95)] text-white text-center overflow-hidden"
      ref="ctaSection"
    >
      <!-- Animated particles -->
      <div class="absolute inset-0 opacity-10">
        <div
          v-for="i in 15"
          :key="i"
          class="absolute w-2 h-2 bg-white rounded-full animate-float"
          :style="`left: ${Math.random() * 100}%; top: ${
            Math.random() * 100
          }%; animation-delay: ${Math.random() * 5}s;`"
        ></div>
      </div>

      <div class="container mx-auto px-6 lg:px-8 max-w-4xl relative z-10">
        <h2
          class="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 animate-on-scroll"
          data-animation="fade-in-up"
        >
          Siap Mengubah Hidup Anda?
        </h2>

        <p
          class="text-xl lg:text-2xl mb-12 opacity-90 max-w-2xl mx-auto animate-on-scroll font-light leading-relaxed"
          data-animation="fade-in-up"
          data-delay="150"
        >
          Bergabunglah dengan Sehatin hari ini dan dapatkan akses penuh ke semua
          fitur, konten eksklusif, dan dukungan komunitas.
        </p>

        <div
          class="animate-on-scroll"
          data-animation="fade-in-up"
          data-delay="300"
        >
          <button
            @click="handleNavigation('/dashboard/bmi')"
            class="group relative bg-white hover:bg-gray-100 text-[rgba(0,119,137,1)] font-medium py-4 px-10 rounded-xl transition-all duration-500 text-lg hover:shadow-2xl hover:scale-105 focus:outline-none overflow-hidden"
          >
            <span class="relative z-10">Daftar & Mulai</span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,119,137,0.1)] to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            ></div>
          </button>
        </div>
      </div>
    </section>

    <!-- 7. Footer dengan Style Modern -->
    <footer
      class="bg-gray-900 text-gray-400 py-20 text-center sm:text-left relative overflow-hidden"
    >
      <!-- Background pattern - menggunakan CSS class sederhana -->
      <div
        class="absolute inset-0 opacity-5 bg-[length:200px_200px] bg-repeat footer-pattern"
      ></div>

      <div class="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <!-- Branding -->
          <div class="animate-on-scroll" data-animation="fade-in-up">
            <h4 class="text-2xl font-medium text-white mb-6 tracking-tight">
              Sehatin
            </h4>
            <p class="text-base leading-relaxed font-light">
              Membantu Anda mencapai versi terbaik diri Anda melalui kesehatan
              dan kebugaran yang berkelanjutan.
            </p>
          </div>

          <!-- Navigasi -->
          <div
            class="animate-on-scroll"
            data-animation="fade-in-up"
            data-delay="100"
          >
            <h5 class="text-xl font-medium text-white mb-6 tracking-tight">
              Navigasi
            </h5>
            <ul class="space-y-3">
              <li v-for="(nav, index) in footerNav" :key="nav.name">
                <a
                  @click.prevent="nav.action"
                  class="hover:text-[rgba(0,119,137,1)] transition-all duration-300 text-base cursor-pointer font-light hover:translate-x-1 inline-block"
                >
                  {{ nav.name }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div
            class="animate-on-scroll"
            data-animation="fade-in-up"
            data-delay="200"
          >
            <h5 class="text-xl font-medium text-white mb-6 tracking-tight">
              Legal
            </h5>
            <ul class="space-y-3">
              <li v-for="(legal, index) in legalLinks" :key="legal.name">
                <a
                  @click.prevent="handleNavigation(legal.path)"
                  class="hover:text-[rgba(0,119,137,1)] transition-all duration-300 text-base cursor-pointer font-light hover:translate-x-1 inline-block"
                >
                  {{ legal.name }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Sosial Media -->
          <div
            class="animate-on-scroll"
            data-animation="fade-in-up"
            data-delay="300"
          >
            <h5 class="text-xl font-medium text-white mb-6 tracking-tight">
              Ikuti Kami
            </h5>
            <div class="flex space-x-5 sm:justify-start justify-center">
              <a
                v-for="(social, index) in socialLinks"
                :key="social.name"
                :href="social.url"
                :aria-label="social.name"
                class="text-2xl hover:text-[rgba(0,119,137,1)] transition-all duration-300 hover:scale-110"
              >
                <component :is="social.icon" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <hr
          class="my-14 border-gray-800 animate-on-scroll"
          data-animation="fade-in-up"
        />
        <p
          class="text-sm text-gray-500 text-center font-light animate-on-scroll"
          data-animation="fade-in-up"
        >
          &copy; {{ new Date().getFullYear() }} Sehatin. Semua Hak Dilindungi.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "../supabaseClient";
import NavbarLanding from "./NavbarLanding.vue";

// Import Lucide Icons
import {
  LineChart,
  Apple,
  Dumbbell,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Utensils,
  HeartPulse,
  Activity,
} from "lucide-vue-next";

const router = useRouter();

const isScrolled = ref(false);
const isMobileNavOpen = ref(false);
const showExploreOverlay = ref(false);
const ctaSection = ref(null);
let observer = null;
let scrollObserver = null;

// --- Data untuk Footer ---
const footerNav = ref([
  { name: "Fitur", action: () => scrollToSection("#fitur") },
  { name: "Resep", action: () => scrollToSection("#resep") },
  { name: "Latihan", action: () => scrollToSection("#latihan") },
  { name: "Gabung", action: () => handleNavigation("/dashboard/bmi") },
]);

const legalLinks = ref([
  { name: "Kebijakan Privasi", path: "/privacy-policy" },
  { name: "Syarat & Ketentuan", path: "/sk" },
  { name: "Hubungi Kami", path: "/contact" },
]);

const socialLinks = ref([
  { name: "Facebook", url: "#", icon: Facebook },
  { name: "Instagram", url: "#", icon: Instagram },
  { name: "Twitter", url: "#", icon: Twitter },
]);

// --- Data Statis untuk Tampilan ---
const teaserFeatures = ref([
  {
    title: "Analisis Kebugaran Personal",
    description:
      "Ketahui status gizi dan kebugaran Anda dengan alat analisis komprehensif kami.",
    icon: LineChart,
  },
  {
    title: "Rencana Nutrisi Cerdas",
    description:
      "Dapatkan rekomendasi menu harian yang disesuaikan dengan kebutuhan kalori dan target kesehatan Anda.",
    icon: Apple,
  },
  {
    title: "Program Latihan Dinamis",
    description:
      "Akses beragam program latihan interaktif, dari pemula hingga mahir, dengan panduan video.",
    icon: Dumbbell,
  },
]);

const foods = ref([
  {
    name: "Smoothie Bowl Buah Naga & Berry",
    description:
      "Energi pagi dengan smoothie bowl kaya antioksidan, topping granola, biji chia, dan irisan buah segar.",
    image:
      "https://images.unsplash.com/photo-1507120366498-4656eaece7fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGp1aWNlfGVufDB8fDB8fHww",
    link: "#",
  },
  {
    name: "Salmon Panggang Asparagus Lemon",
    description:
      "Hidangan utama lezat kaya protein dan omega-3, salmon fillet dipanggang dengan asparagus segar dan saus lemon dill.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80&h=1000",
    link: "#",
  },
  {
    name: "Salad Chickpea & Alpukat Segar",
    description:
      "Salad ringan namun mengenyangkan, paduan chickpea, alpukat, tomat ceri, dan dressing madu mustard.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80&h=1000",
    link: "#",
  },
  {
    name: "Salad Sayuran Mediterania Segar",
    description:
      "Kombinasi sayuran renyah, zaitun, keju feta, dan dressing lemon herb. Sempurna untuk makan siang ringan dan sehat.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    // 'link' tidak lagi digunakan untuk navigasi langsung jika Anda menggunakan handleNavigation
    link: "#",
  },
  {
    name: "Smoothie Mangga & Bayam Penuh Energi",
    description:
      "Boost energi pagi Anda dengan smoothie hijau kaya nutrisi, paduan mangga manis dan bayam segar. Nikmat dan menyehatkan!",
    image:
      "https://images.unsplash.com/photo-1619898804188-e7bad4bd2127?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuZ28lMjBzbW9vdGhpZXxlbnwwfHwwfHx8MA%3D%3D",
    link: "#",
  },
]);

const exercises = ref([
  {
    name: "Yoga Flow Pagi Hari",
    description:
      "Awali hari dengan sesi yoga vinyasa untuk meningkatkan fleksibilitas, keseimbangan, dan ketenangan pikiran.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80&h=1080",
    linkText: "Mulai Yoga",
  },
  {
    name: "Latihan Kekuatan Tubuh Bagian Atas",
    description:
      "Program 30 menit untuk memperkuat otot dada, punggung, dan lengan dengan dumbbell dan resistance band.",
    image:
      "https://images.unsplash.com/photo-1674834726923-3ba828d37846?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TGF0aWhhbiUyMEtla3VhdGFuJTIwVHVidWglMjBCYWdpYW4lMjBBdGFzfGVufDB8fDB8fHww",
    linkText: "Coba Latihan",
  },
  {
    name: "Latihan Kardio HIIT 20 Menit",
    description:
      "Sesi HIIT singkat namun intens untuk membakar kalori maksimal dan meningkatkan daya tahan jantung.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80&h=1080",
    linkText: "Coba HIIT",
  },
]);

// --- Logika Navigasi Cerdas ---
async function handleNavigation(targetPath) {
  const publicPaths = ["/privacy-policy", "/sk", "/contact"];

  if (publicPaths.includes(targetPath)) {
    return router.push(targetPath);
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    router.push(targetPath);
  } else {
    router.push({ path: "/login", query: { redirect: targetPath } });
  }
}

// --- Logika Scroll Halaman ---
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// --- Logika UI untuk Navbar Scroll ---
const handleNavbarScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
};

// --- Lifecycle Hooks ---
onMounted(() => {
  window.addEventListener("scroll", handleNavbarScroll);

  // Observer untuk mendeteksi kapan user scroll ke section CTA
  scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Jika section CTA terlihat di viewport (user sudah scroll ke bagian bawah)
        if (entry.isIntersecting) {
          showExploreOverlay.value = true;
        } else {
          // Jika user scroll kembali ke atas, sembunyikan tombol
          showExploreOverlay.value = false;
        }
      });
    },
    {
      threshold: 0.3, // Trigger ketika 30% section terlihat
    }
  );

  if (ctaSection.value) {
    scrollObserver.observe(ctaSection.value);
  }

  // Enhanced Intersection Observer untuk animasi scroll
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.dataset.delay) || 0;
          const animation = el.dataset.animation || "fade-in-up";

          setTimeout(() => {
            el.classList.remove("opacity-0");

            if (animation === "fade-in-up") {
              el.classList.remove("translate-y-10");
            } else if (animation === "fade-in-right") {
              el.classList.remove("translate-x-10");
            } else if (animation === "fade-in-left") {
              el.classList.remove("-translate-x-10");
            } else if (animation === "scale-in") {
              el.classList.remove("scale-90");
            }
          }, delay);

          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
  elementsToAnimate.forEach((el) => {
    const animation = el.dataset.animation || "fade-in-up";

    el.classList.add("opacity-0", "transition-all", "duration-700", "ease-out");

    if (animation === "fade-in-up") {
      el.classList.add("translate-y-10", "transform");
    } else if (animation === "fade-in-right") {
      el.classList.add("translate-x-10", "transform");
    } else if (animation === "fade-in-left") {
      el.classList.add("-translate-x-10", "transform");
    } else if (animation === "scale-in") {
      el.classList.add("scale-90", "transform");
    }

    observer.observe(el);
  });

  // Parallax effect untuk hero section
  const handleParallax = () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector("#hero-section");
    if (parallax) {
      parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  };

  window.addEventListener("scroll", handleParallax);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleNavbarScroll);
  if (observer) {
    observer.disconnect();
  }
  if (scrollObserver) {
    scrollObserver.disconnect();
  }
});
</script>

<style scoped>
/* Animasi Kustom */
@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes float-medium {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(90deg);
  }
}

@keyframes float-fast {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(45deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.1);
  }
}

@keyframes pulse-medium {
  0%,
  100% {
    opacity: 0.15;
    transform: scale(1);
  }
  50% {
    opacity: 0.25;
    transform: scale(1.05);
  }
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 4s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 3s ease-in-out infinite;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-pulse-medium {
  animation: pulse-medium 3s ease-in-out infinite;
}

/* Line clamp utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Background patterns */
.exercise-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23007789' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.footer-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21 57c-6 0-11-5-11-11s5-11 11-11 11 5 11 11-5 11-11 11zm88-44c-6 0-11-5-11-11s5-11 11-11 11 5 11 11-5 11-11 11zm-87 87c-6 0-11-5-11-11s5-11 11-11 11 5 11 11-5 11-11 11zm87-44c-6 0-11-5-11-11s5-11 11-11 11 5 11 11-5 11-11 11zm-44 87c-6 0-11-5-11-11s5-11 11-11 11 5 11 11-5 11-11 11zm44-44c-6 0-11-5-11-11s5-11 11-11 11 5 11 11-5 11-11 11zm87-87c-6 0-11-5-11-11s5-11 11-11 11 5 11 11-5 11-11 11zm-44 44c-6 0-11-5-11-11s5-11 11-11 11 5 11 11-5 11-11 11zm-44 44c-6 0-11-5-11-11s5-11 11-11 11 5 11 11-5 11-11 11zm87 44c-6 0-11-5-11-11s5-11 11-11 11 5 11 11-5 11-11 11z' fill='%237fdcd6' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
}

/* Selection styles */
::selection {
  background-color: rgba(0, 119, 137, 0.2);
  color: rgba(0, 119, 137, 1);
}

::-moz-selection {
  background-color: rgba(0, 119, 137, 0.2);
  color: rgba(0, 119, 137, 1);
}
</style>
