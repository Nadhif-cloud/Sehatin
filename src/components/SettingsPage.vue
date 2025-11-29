<template>
  <div class="p-4 sm:p-6 lg:p-8 bg-slate-50 min-h-screen">
    <!-- Header Halaman -->
    <header class="mb-8">
      <h1 class="text-3xl lg:text-4xl font-bold text-gray-800">
        Pengaturan Akun
      </h1>
      <p class="mt-2 text-gray-600">
        Kelola informasi profil, keamanan, dan preferensi Anda.
      </p>
    </header>

    <div v-if="isLoading" class="flex justify-center items-center py-20">
      <div class="loader"></div>
    </div>

    <div v-else class="w-full max-w-7xl mx-auto space-y-6">
  <!-- Grid Layout untuk Cards -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    
    <!-- Kartu Informasi Profil -->
    <div class="bg-white/80 backdrop-blur-lg p-6 lg:p-8 rounded-3xl shadow-xl border border-gray-200/60 hover:shadow-2xl transition-all duration-300">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h2 class="text-2xl font-semibold text-gray-800">Informasi Profil</h2>
      </div>
      
      <form @submit.prevent="updateProfile" class="space-y-5">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Alamat Email</label>
          <input 
            id="email"
            type="email"
            :value="userEmail"
            disabled
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl cursor-not-allowed text-gray-500"
          />
        </div>
        
        <div>
          <label for="fullName" class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
          <input
            id="fullName"
            type="text"
            v-model="fullName"
            placeholder="Masukkan nama lengkap Anda"
            class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all duration-200"
          />
        </div>
        
        <div class="flex items-center justify-between pt-2">
          <p v-if="profileMessage" class="text-sm flex-1" :class="profileMessageType === 'success' ? 'text-green-600' : 'text-red-600'">
            {{ profileMessage }}
          </p>
          <button
            type="submit"
            :disabled="loadingProfile"
            class="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-wait ml-auto"
          >
            <span v-if="loadingProfile">Menyimpan...</span>
            <span v-else>Simpan Perubahan</span>
          </button>
        </div>
      </form>
    </div>

    <!-- Kartu Ubah Password -->
    <div class="bg-white/80 backdrop-blur-lg p-6 lg:p-8 rounded-3xl shadow-xl border border-gray-200/60 hover:shadow-2xl transition-all duration-300">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 class="text-2xl font-semibold text-gray-800">Ubah Password</h2>
      </div>
      
      <form @submit.prevent="updatePassword" class="space-y-5">
        <div>
          <label for="newPassword" class="block text-sm font-medium text-gray-700 mb-2">Password Baru</label>
          <input 
            id="newPassword"
            type="password"
            v-model="newPassword"
            placeholder="Minimal 6 karakter"
            class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-200"
          />
        </div>
        
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">Konfirmasi Password Baru</label>
          <input 
            id="confirmPassword"
            type="password"
            v-model="confirmPassword"
            placeholder="Ulangi password baru"
            class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-200"
          />
        </div>
        
        <div class="flex items-center justify-between pt-2">
          <p v-if="passwordMessage" class="text-sm flex-1" :class="passwordMessageType === 'success' ? 'text-green-600' : 'text-red-600'">
            {{ passwordMessage }}
          </p>
          <button
            type="submit"
            :disabled="loadingPassword"
            class="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-wait ml-auto"
          >
            <span v-if="loadingPassword">Mengubah...</span>
            <span v-else>Ubah Password</span>
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Kartu Logout - Full Width -->
  <div class="bg-white/80 backdrop-blur-lg p-6 lg:p-8 rounded-3xl shadow-xl border border-gray-200/60 hover:shadow-2xl transition-all duration-300">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div class="flex items-start space-x-3">
        <div class="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </div>
        <div>
          <h2 class="text-2xl font-semibold text-gray-800 mb-1">Sesi Akun</h2>
          <p class="text-gray-600 text-sm">Keluar dari sesi Anda saat ini di perangkat ini.</p>
        </div>
      </div>
      
      <button
        @click="handleLogout"
        class="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg whitespace-nowrap"
      >
        Keluar (Logout)
      </button>
    </div>
  </div>
</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/supabaseClient";
import { useRouter } from "vue-router";

const router = useRouter();

// State untuk data pengguna
const isLoading = ref(true);
const userEmail = ref("");
const fullName = ref("");

// State untuk form profil
const loadingProfile = ref(false);
const profileMessage = ref("");
const profileMessageType = ref(""); // 'success' atau 'error'

// State untuk form password
const loadingPassword = ref(false);
const newPassword = ref("");
const confirmPassword = ref("");
const passwordMessage = ref("");
const passwordMessageType = ref(""); // 'success' atau 'error'

// Mengambil data pengguna saat komponen dimuat
onMounted(async () => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      userEmail.value = user.email;
      fullName.value = user.user_metadata?.full_name || "";
    } else {
      // Jika tidak ada user, mungkin redirect ke login
      router.push({ name: "Login" });
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  } finally {
    isLoading.value = false;
  }
});

// Fungsi untuk memperbarui profil (nama lengkap)
async function updateProfile() {
  loadingProfile.value = true;
  profileMessage.value = "";

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) throw new Error("User not found");

    const { error } = await supabase.auth.updateUser({
      data: { full_name: fullName.value },
    });

    if (error) throw error;

    profileMessage.value = "Profil berhasil diperbarui!";
    profileMessageType.value = "success";
  } catch (error) {
    profileMessage.value = `Gagal memperbarui profil: ${error.message}`;
    profileMessageType.value = "error";
    console.error("Error updating profile:", error);
  } finally {
    loadingProfile.value = false;
    setTimeout(() => {
      profileMessage.value = "";
    }, 4000);
  }
}

// Fungsi untuk memperbarui password
async function updatePassword() {
  if (newPassword.value !== confirmPassword.value) {
    passwordMessage.value = "Password baru dan konfirmasi tidak cocok.";
    passwordMessageType.value = "error";
    return;
  }
  if (newPassword.value.length < 6) {
    passwordMessage.value = "Password baru harus minimal 6 karakter.";
    passwordMessageType.value = "error";
    return;
  }

  loadingPassword.value = true;
  passwordMessage.value = "";

  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword.value,
    });

    if (error) throw error;

    passwordMessage.value = "Password berhasil diubah!";
    passwordMessageType.value = "success";
    newPassword.value = "";
    confirmPassword.value = "";
  } catch (error) {
    passwordMessage.value = `Gagal mengubah password: ${error.message}`;
    passwordMessageType.value = "error";
    console.error("Error updating password:", error);
  } finally {
    loadingPassword.value = false;
    setTimeout(() => {
      passwordMessage.value = "";
    }, 4000);
  }
}

// Fungsi untuk logout
async function handleLogout() {
  const confirmed = confirm("Anda yakin ingin keluar?");
  if (confirmed) {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      // Redirect ke halaman login setelah berhasil logout
      router.push({ name: "Landing" });
    } catch (error) {
      alert(`Gagal logout: ${error.message}`);
      console.error("Error logging out:", error);
    }
  }
}
</script>

<style scoped>
.loader {
  border: 6px solid #f3f3f3; /* Abu-abu terang */
  border-top: 6px solid rgba(0, 119, 137, 1); /* Warna aksen */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
