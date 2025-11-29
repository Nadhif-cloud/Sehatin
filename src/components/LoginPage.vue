<template>
  <div class="min-h-screen grid grid-cols-1 lg:grid-cols-2">
    <!-- Kolom Kiri: Branding & Visual -->
    <div
      class="hidden lg:flex flex-col justify-center items-center p-12 bg-cover bg-center relative"
      style="
        background-image: url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80');
      "
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-[rgba(0,119,137,1)] to-[rgba(0,80,95,1)] opacity-90"
      ></div>
      <div class="relative text-white text-center z-10 animate-on-load">
        <!-- Logo dan Tulisan Sehatin -->
        <div class="flex items-center justify-center mb-6">
          <div class="relative">
            <!-- Logo dengan bentuk hati dan plus -->
            <div>
              <img
                src="/Sehatin.svg"
                alt="Sehatin Logo"
                class="h-13 w-13 object-contain"
              />
            </div>
          </div>
          <h1
            class="text-5xl font-bold ml-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
          >
            Sehatin
          </h1>
        </div>
        <p class="text-xl max-w-sm text-white/90">
          Selamat datang kembali! Lanjutkan perjalanan kesehatan Anda bersama
          kami.
        </p>
      </div>
    </div>

    <!-- Kolom Kanan: Form Login -->
    <div
      class="bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 flex flex-col justify-center items-center p-6 sm:p-8 relative overflow-hidden"
    >
      <!-- Background decorative elements -->
      <div
        class="absolute top-10 right-10 w-32 h-32 bg-[rgba(0,119,137,0.03)] rounded-full blur-xl"
      ></div>
      <div
        class="absolute bottom-10 left-10 w-24 h-24 bg-[rgba(127,220,214,0.03)] rounded-full blur-xl"
      ></div>

      <div class="max-w-md w-full mx-auto animate-on-load relative z-10">
        <!-- Logo untuk tampilan mobile -->
        <div class="flex items-center justify-center mb-8 lg:hidden">
          <div class="relative">
            <div
              class="w-12 h-12 bg-[rgba(0,119,137,0.1)] backdrop-blur-sm rounded-xl flex items-center justify-center border border-[rgba(0,119,137,0.2)] shadow-lg"
            >
              <svg
                class="w-6 h-6 text-[rgba(0,119,137,1)]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                  fill="currentColor"
                />
                <path
                  d="M16 11H13V8H11V11H8V13H11V16H13V13H16V11Z"
                  fill="currentColor"
                  class="text-white"
                />
              </svg>
            </div>
          </div>
          <h1 class="text-3xl font-bold ml-3 text-[rgba(0,119,137,1)]">
            Sehatin
          </h1>
        </div>

        <!-- Card dengan Liquid Glass Effect -->
        <div class="relative">
          <!-- Glass morphism effect -->
          <div
            class="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/40 shadow-2xl"
          ></div>

          <!-- Inner glow effect -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl opacity-60"
          ></div>

          <!-- Content -->
          <div class="relative p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-2 text-center">
              Masuk ke Akun Anda
            </h2>
            <p class="text-center text-sm text-gray-500 mb-8">
              Gunakan detail akun Anda untuk login.
            </p>

            <form @submit.prevent="handleLogin" class="space-y-6">
              <!-- Social Login dengan Liquid Glass -->
              <button
                @click.prevent="loginWithGoogle"
                type="button"
                class="w-full relative group"
              >
                <div
                  class="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]"
                ></div>
                <div
                  class="relative flex justify-center items-center gap-3 py-3.5 px-4"
                >
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.022,36.218,44,30.561,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  <span class="text-sm font-medium text-gray-700"
                    >Lanjutkan dengan Google</span
                  >
                </div>
              </button>

              <div class="flex items-center text-center">
                <hr class="flex-grow border-gray-200/50" />
                <span class="mx-4 text-xs text-gray-400 font-medium uppercase"
                  >Atau</span
                >
                <hr class="flex-grow border-gray-200/50" />
              </div>

              <div class="space-y-4">
                <div class="relative">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 mb-1.5"
                    >Alamat Email</label
                  >
                  <div class="relative">
                    <div
                      class="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50"
                    ></div>
                    <input
                      v-model="email"
                      id="email"
                      type="email"
                      required
                      autocomplete="email"
                      placeholder="contoh@email.com"
                      class="relative w-full px-4 py-3 bg-transparent rounded-xl focus:ring-2 focus:ring-[rgba(0,119,137,0.3)] focus:border-[rgba(0,119,137,1)] transition-all duration-200 border-none outline-none"
                    />
                  </div>
                </div>

                <div class="relative">
                  <div class="flex justify-between items-center mb-1.5">
                    <label
                      for="password"
                      class="block text-sm font-medium text-gray-700"
                      >Password</label
                    >
                    <a
                      href="#"
                      class="text-xs font-medium text-[rgba(0,119,137,1)] hover:underline"
                      >Lupa Password?</a
                    >
                  </div>
                  <div class="relative">
                    <div
                      class="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50"
                    ></div>
                    <input
                      v-model="password"
                      id="password"
                      type="password"
                      required
                      autocomplete="current-password"
                      placeholder="••••••••"
                      class="relative w-full px-4 py-3 bg-transparent rounded-xl focus:ring-2 focus:ring-[rgba(0,119,137,0.3)] focus:border-[rgba(0,119,137,1)] transition-all duration-200 border-none outline-none"
                    />
                  </div>
                </div>
              </div>

              <div
                v-if="errorMessage"
                class="relative bg-red-50/80 backdrop-blur-sm text-red-700 p-3 rounded-xl text-sm text-center transition-all duration-300 border border-red-200/50"
              >
                {{ errorMessage }}
              </div>

              <!-- Tombol Login dengan Style Apple Liquid -->
              <button
                type="submit"
                :disabled="loading"
                class="w-full relative group overflow-hidden"
              >
                <!-- Background dengan gradient dan blur -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-[rgba(0,119,137,1)] to-[rgba(0,90,105,1)] rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                ></div>

                <!-- Hover effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-[rgba(0,119,137,0.9)] to-[rgba(0,90,105,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                ></div>

                <!-- Shine effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                ></div>

                <!-- Loading overlay -->
                <div
                  v-if="loading"
                  class="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                >
                  <svg
                    class="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>

                <!-- Text content -->
                <div class="relative py-4">
                  <span
                    v-if="!loading"
                    class="text-white font-semibold text-base"
                    >Login</span
                  >
                  <span v-else class="text-white font-semibold text-base"
                    >Memproses...</span
                  >
                </div>
              </button>
            </form>
          </div>
        </div>

        <p class="text-center text-sm text-gray-600 mt-8 relative">
          Belum punya akun?
          <router-link
            to="/register"
            class="font-semibold text-[rgba(0,119,137,1)] hover:underline relative z-10"
          >
            Daftar di sini
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabaseClient";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const email = ref("");
const password = ref("");
const loading = ref(false);
const errorMessage = ref(null);

const handleLogin = async () => {
  try {
    loading.value = true;
    errorMessage.value = null;

    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) throw error;

    router.push({ name: "beranda" });
  } catch (error) {
    errorMessage.value = error.message || "Email atau password salah.";
  } finally {
    loading.value = false;
  }
};

const loginWithGoogle = async () => {
  try {
    // Ambil redirect path dari URL saat ini, jika tidak ada => ke Dashboard (beranda)
    const redirectDestination = route.query.redirect || "/dashboard";

    const redirectPathAfterLogin = `${window.location.origin}${redirectDestination}`;

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectPathAfterLogin,
      },
    });

    if (error) throw error;
  } catch (error) {
    errorMessage.value = error.message || "Login gagal.";
  }
};
</script>

<style scoped>
/* Animasi sederhana untuk memuat halaman */
.animate-on-load {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Enhanced glass morphism effects */
.glass-effect {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
