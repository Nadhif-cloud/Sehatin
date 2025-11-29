<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/30 p-8 lg:p-12 mb-8">
      <div class="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl"></div>
      <div class="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl"></div>
      
      <div class="relative z-10 text-center">
        <div class="flex justify-center mb-6">
          <div class="text-6xl animate-bounce">👋</div>
        </div>
        
        <h1 class="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Selamat Datang Kembali!
        </h1>
        
        <p class="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          {{ greetingMessage }}, <span class="font-semibold text-cyan-600">{{ user.full_name || 'User' }}</span>! 
          Mari lanjutkan perjalanan kesehatan Anda hari ini.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <router-link 
            to="/dashboard/bmi" 
            class="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2"
          >
            <Calculator class="w-5 h-5" />
            Cek BMI
          </router-link>
          <router-link 
            to="/dashboard/kalori" 
            class="bg-white/60 hover:bg-white/80 text-gray-700 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 border border-white/30 flex items-center gap-2"
          >
            <Flame class="w-5 h-5" />
            Hitung Kalori
          </router-link>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:shadow-lg transition-all duration-300">
        <div class="flex items-center justify-between mb-4">
          <Calculator class="w-8 h-8 text-cyan-500" />
          <span class="text-xs font-semibold text-cyan-500 bg-cyan-100 px-2 py-1 rounded-full">BMI</span>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Indeks Massa Tubuh</h3>
        <p class="text-gray-600 text-sm mb-4">Ketahui status berat badan ideal Anda</p>
        <router-link 
          to="/dashboard/bmi" 
          class="text-cyan-500 hover:text-cyan-600 font-medium text-sm flex items-center gap-1"
        >
          Hitung Sekarang <ArrowRight class="w-4 h-4" />
        </router-link>
      </div>

      <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:shadow-lg transition-all duration-300">
        <div class="flex items-center justify-between mb-4">
          <Flame class="w-8 h-8 text-cyan-500" /> <span class="text-xs font-semibold text-cyan-500 bg-cyan-100 px-2 py-1 rounded-full">Kalori</span> </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Kebutuhan Kalori</h3>
        <p class="text-gray-600 text-sm mb-4">Hitung kebutuhan kalori harian Anda</p>
        <router-link 
          to="/dashboard/kalori" 
          class="text-cyan-500 hover:text-cyan-600 font-medium text-sm flex items-center gap-1" >
          Hitung Sekarang <ArrowRight class="w-4 h-4" />
        </router-link>
      </div>

      <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:shadow-lg transition-all duration-300">
        <div class="flex items-center justify-between mb-4">
          <Dumbbell class="w-8 h-8 text-cyan-500" /> <span class="text-xs font-semibold text-cyan-500 bg-cyan-100 px-2 py-1 rounded-full">Latihan</span> </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Program Latihan</h3>
        <p class="text-gray-600 text-sm mb-4">Temukan latihan yang sesuai untuk Anda</p>
        <router-link 
          to="/dashboard/latihan" 
          class="text-cyan-500 hover:text-cyan-600 font-medium text-sm flex items-center gap-1" >
          Jelajahi <ArrowRight class="w-4 h-4" />
        </router-link>
      </div>

      <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:shadow-lg transition-all duration-300">
        <div class="flex items-center justify-between mb-4">
          <Utensils class="w-8 h-8 text-cyan-500" /> <span class="text-xs font-semibold text-cyan-500 bg-cyan-100 px-2 py-1 rounded-full">Makanan</span> </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Resep Sehat</h3>
        <p class="text-gray-600 text-sm mb-4">Temukan resep makanan sehat dan bergizi</p>
        <router-link 
          to="/dashboard/makanan" 
          class="text-cyan-500 hover:text-cyan-600 font-medium text-sm flex items-center gap-1" >
          Jelajahi <ArrowRight class="w-4 h-4" />
        </router-link>
      </div>
    </div>

    <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Aktivitas Terbaru
        </h2>
        <span class="text-sm text-gray-500">Terakhir diperbarui</span>
      </div>
      
      <div class="space-y-4">
        <div class="flex items-center gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/70 transition-all duration-300">
          <div class="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
            <Calculator class="w-5 h-5 text-cyan-500" />
          </div>
          <div class="flex-1">
            <p class="font-medium text-gray-800">Perhitungan BMI terakhir</p>
            <p class="text-sm text-gray-500">Status: Berat Badan Ideal</p>
          </div>
          <span class="text-sm text-gray-400">2 jam lalu</span>
        </div>

        <div class="flex items-center gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/70 transition-all duration-300">
          <div class="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
            <Flame class="w-5 h-5 text-cyan-500" />
          </div>
          <div class="flex-1">
            <p class="font-medium text-gray-800">Perhitungan Kalori</p>
            <p class="text-sm text-gray-500">Kebutuhan harian: 2000 kkal</p>
          </div>
          <span class="text-sm text-gray-400">1 hari lalu</span>
        </div>

        <div class="flex items-center gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/70 transition-all duration-300">
          <div class="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
            <Dumbbell class="w-5 h-5 text-cyan-500" />
          </div>
          <div class="flex-1">
            <p class="font-medium text-gray-800">Latihan Yoga</p>
            <p class="text-sm text-gray-500">Selesai: 30 menit</p>
          </div>
          <span class="text-sm text-gray-400">2 hari lalu</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabaseClient'
import { 
  Calculator, 
  Flame, 
  Dumbbell, 
  Utensils, 
  ArrowRight,
  HeartPulse 
} from 'lucide-vue-next'

const router = useRouter()
const user = ref({})

// Greeting message based on time of day
const greetingMessage = computed(() => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Selamat pagi'
  else if (hour < 15) return 'Selamat siang'
  else if (hour < 19) return 'Selamat sore'
  else return 'Selamat malam'
})

onMounted(async () => {
  const { data: { session } } = await supabase.auth.getSession()
  if (session) {
    user.value = {
      email: session.user.email,
      full_name: session.user.user_metadata?.full_name,
      avatar_url: session.user.user_metadata?.avatar_url,
    }
  }
})
</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>