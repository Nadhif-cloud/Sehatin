<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 flex font-sans antialiased"
  >
    <!-- Sidebar untuk Desktop dengan Liquid Glass Effect (WHITE) - Floating -->
    <aside
      class="fixed top-4 left-4 h-[calc(100vh-2rem)] bg-white/80 backdrop-blur-2xl text-gray-700 flex-col justify-between hidden lg:flex transition-all duration-500 ease-in-out z-30 border border-gray-200/60 rounded-3xl shadow-2xl"
      :class="{ 'w-80': !isSidebarCollapsed, 'w-20': isSidebarCollapsed }"
    >
      <div class="flex flex-col h-full">
        <!-- Logo Area dengan Liquid Glass - Clickable untuk ke Beranda -->
        <div
          class="flex items-center justify-center h-24 border-b border-gray-200/50 px-6 relative overflow-hidden cursor-pointer hover:bg-white/40 transition-all duration-300 rounded-t-3xl"
          @click="goToHome"
        >
          <!-- Background glow effect -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-60"
          ></div>

          <div class="transition-all duration-300 relative z-10">
            <!-- Logo Penuh (saat sidebar terbuka) -->
            <div
              v-show="!isSidebarCollapsed"
              class="flex items-center space-x-4"
            >
              <div
                class="w-12 h-12 bg-white/60 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-gray-200/50 shadow-lg"
              >
                <img
                  src="/logo-gym.svg"
                  alt="Sehatin Logo"
                  class="h-9 w-9 object-contain"
                />
              </div>
              <span
                class="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                >Sehatin</span
              >
            </div>

            <!-- Logo Ringkas (saat sidebar diciutkan) -->
            <div
              v-show="isSidebarCollapsed"
              class="flex items-center justify-center"
            >
              <div
                class="w-12 h-12 bg-white/60 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-gray-200/50 shadow-lg"
              >
                <img
                  src="/logo-gym.svg"
                  alt="Sehatin Logo"
                  class="h-9 w-9 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Menu Navigasi dengan Liquid Glass -->

        <nav class="mt-6 flex-grow px-4 overflow-y-auto">
          <ul class="space-y-3">
            <li v-for="item in menuItems" :key="item.name">
              <router-link
                :to="item.path"
                class="flex items-center py-4 rounded-2xl hover:bg-white/60 backdrop-blur-lg transition-all duration-300 group relative cursor-glow-container overflow-hidden border border-transparent hover:border-gray-200/50"
                :class="isSidebarCollapsed ? 'justify-center px-2' : 'px-5'"
                active-class="bg-cyan-50/90 shadow-lg border-gray-200/50 text-cyan-600"
                @mousemove="handleMenuMouseMove($event, item.name)"
                @mouseleave="handleMenuMouseLeave(item.name)"
              >
                <div
                  :ref="(el) => (menuGlowRefs[item.name] = el)"
                  class="absolute w-16 h-16 bg-gradient-to-r from-cyan-500/15 to-blue-500/10 rounded-full blur-lg pointer-events-none transition-all duration-200 ease-out opacity-0 -translate-x-1/2 -translate-y-1/2"
                ></div>

                <div
                  v-if="!isSidebarCollapsed"
                  class="absolute left-3 top-1/2 transform -translate-y-1/2 w-1.5 h-8 bg-cyan-500 rounded-full transition-all duration-300 scale-y-0 group-[.router-link-active]:scale-y-100"
                ></div>

                <component
                  :is="item.icon"
                  class="w-6 h-6 text-gray-500 group-hover:text-cyan-500 group-[.router-link-active]:text-cyan-500 transition-colors duration-300 relative z-10 flex-shrink-0"
                  :class="!isSidebarCollapsed ? 'ml-1' : ''"
                />

                <span
                  v-if="!isSidebarCollapsed"
                  class="ml-5 font-medium text-gray-700 whitespace-nowrap relative z-10 group-[.router-link-active]:text-cyan-600"
                >
                  {{ item.name }}
                </span>

                <span
                  v-if="isSidebarCollapsed"
                  class="absolute left-full ml-4 px-3 py-2 bg-blue-200/80 backdrop-blur-lg text-gray-700 text-sm font-medium rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-50 border border-gray-200/50 shadow-lg"
                >
                  {{ item.name }}
                </span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>

    <!-- Sidebar untuk Mobile (Overlay) -->
    <transition name="fade">
      <div
        v-show="isMobileSidebarOpen"
        class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
        @click="isMobileSidebarOpen = false"
      ></div>
    </transition>

    <transition name="slide-in">
      <aside
        v-show="isMobileSidebarOpen"
        class="fixed top-0 left-0 h-full w-80 bg-white/90 backdrop-blur-2xl text-gray-700 z-50 flex flex-col lg:hidden border-r border-gray-200/60"
      >
        <!-- Logo & Tombol Tutup Mobile - Clickable untuk ke Beranda -->
        <div
          class="flex items-center justify-between h-24 border-b border-gray-200/50 px-6 relative overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-60"
          ></div>
          <div
            @click="goToHomeAndCloseMobile"
            class="flex items-center space-x-4 relative z-10 cursor-pointer"
          >
            <div
              class="w-12 h-12 bg-white/60 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-gray-200/50 shadow-lg"
            >
              <HeartPulse class="w-6 h-6 text-cyan-500" />
            </div>
            <span
              class="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              >Sehatin</span
            >
          </div>
          <button
            @click="isMobileSidebarOpen = false"
            class="text-gray-500 hover:text-cyan-500 text-3xl relative z-10 transition-colors duration-200"
          >
            &times;
          </button>
        </div>

        <!-- Menu Navigasi Mobile (TANPA Beranda) -->
        <nav class="mt-6 px-4 overflow-y-auto flex-grow">
          <ul class="space-y-3">
            <li v-for="item in menuItems" :key="item.name">
              <router-link
                :to="item.path"
                @click="isMobileSidebarOpen = false"
                class="flex items-center py-4 px-5 rounded-2xl hover:bg-white/60 backdrop-blur-lg transition-all duration-300 group border border-transparent hover:border-gray-200/50"
                active-class="bg-white/70 shadow-lg border-gray-200/50 text-cyan-600"
              >
                <div
                  class="absolute left-3 top-1/2 transform -translate-y-1/2 w-1.5 h-8 bg-cyan-500 rounded-full transition-all duration-300 scale-y-0 group-[.router-link-active]:scale-y-100"
                ></div>
                <component
                  :is="item.icon"
                  class="w-6 h-6 text-gray-500 group-hover:text-cyan-500 group-[.router-link-active]:text-cyan-500 transition-colors duration-300 ml-1"
                />
                <span
                  class="ml-5 font-medium text-gray-700 group-[.router-link-active]:text-cyan-600"
                  >{{ item.name }}</span
                >
              </router-link>
            </li>
          </ul>
        </nav>
      </aside>
    </transition>

    <!-- Konten Utama -->
    <div
      class="flex-1 flex flex-col transition-all duration-500 ease-in-out min-h-screen"
      :class="{
        'lg:ml-[22rem]': !isSidebarCollapsed,
        'lg:ml-28': isSidebarCollapsed,
      }"
    >
      <!-- Header -->
      <header
        class="bg-white/80 backdrop-blur-2xl shadow-xl mx-4 my-2 rounded-3xl p-6 flex items-center justify-between z-10 sticky top-2 border border-gray-200/60"
      >
        <!-- Tombol Kontrol Sidebar (Desktop & Mobile) -->
        <button
          @click="toggleSidebar"
          class="relative group cursor-glow-container overflow-hidden rounded-2xl"
          @mousemove="handleButtonMouseMove($event, 'header-menu')"
          @mouseleave="handleButtonMouseLeave('header-menu')"
        >
          <div
            class="absolute inset-0 bg-white/60 backdrop-blur-lg rounded-2xl border border-white/30 group-hover:shadow-lg transition-all duration-300"
          ></div>
          <div
            ref="headerMenuButtonGlow"
            class="absolute w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-md pointer-events-none transition-all duration-200 ease-out opacity-0 -translate-x-1/2 -translate-y-1/2"
          ></div>

          <!-- Animasi Icon Menu/X di Header -->
          <div class="relative z-10 w-6 h-6 m-2">
            <Menu
              v-if="isSidebarCollapsed || screenWidth < 1024"
              class="w-5 h-5 text-gray-600 group-hover:text-cyan-500 transition-all duration-300 absolute inset-0"
            />
            <X
              v-else
              class="w-5 h-5 text-gray-600 group-hover:text-cyan-500 transition-all duration-300 absolute inset-0"
            />
          </div>
        </button>

        <!-- Judul Halaman Dinamis -->
        <h2
          class="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent ml-4 hidden sm:block truncate"
        >
          {{ currentRouteName }}
        </h2>

        <!-- Menu User -->
        <div class="relative ml-auto">
          <button
            @click="isUserMenuOpen = !isUserMenuOpen"
            class="flex items-center space-x-3 p-2 rounded-2xl hover:bg-white/60 backdrop-blur-lg transition-all duration-300 border border-transparent hover:border-gray-200/50 group"
          >
            <img
              class="h-10 w-10 rounded-xl object-cover border-2 border-white/40 shadow-sm"
              :src="
                user.avatar_url ||
                `https://ui-avatars.com/api/?name=${
                  user.full_name || 'U'
                }&background=0D8ABC&color=fff`
              "
              alt="User Avatar"
            />
            <span class="hidden md:block font-semibold text-sm text-gray-700">{{
              user.full_name || "User"
            }}</span>
            <ChevronDown
              class="w-4 h-4 text-gray-500 hidden md:block transition-transform duration-200"
              :class="{ 'rotate-180': isUserMenuOpen }"
            />
          </button>

          <!-- Dropdown Menu User -->
          <transition name="fade-down">
            <div
              v-if="isUserMenuOpen"
              class="absolute right-0 mt-3 w-64 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-xl z-20 py-3 border border-gray-200/60"
            >
              <div class="px-5 py-3 border-b border-gray-200/40">
                <p class="font-semibold text-sm text-gray-800 truncate">
                  {{ user.full_name || "User" }}
                </p>
                <p class="text-xs text-gray-500 truncate mt-1">
                  {{ user.email || "user@email.com" }}
                </p>
              </div>
              <router-link
                to="/dashboard/pengaturan"
                @click="isUserMenuOpen = false"
                class="flex items-center px-5 py-3 text-sm text-gray-700 hover:bg-white/60 transition-colors duration-200 rounded-xl mx-2 my-1"
              >
                <Settings class="w-4 h-4 mr-3 text-gray-500" />
                Pengaturan Akun
              </router-link>
              <a
                href="#"
                @click.prevent="handleLogout"
                class="flex items-center w-full text-left px-5 py-3 text-sm text-red-600 hover:bg-red-50/60 transition-colors duration-200 rounded-xl mx-2 my-1"
              >
                <LogOut class="w-4 h-4 mr-3 text-red-500" />
                Logout
              </a>
            </div>
          </transition>
        </div>
      </header>

      <!-- Area Router View -->
      <main class="flex-1 px-6 sm:px-8 lg:px-10 pb-10 overflow-y-auto">
        <router-view v-slot="{ Component }">
          <transition name="fade-slide" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { supabase } from "../supabaseClient";

// Import Lucide Icons
import {
  HeartPulse,
  Calculator,
  Flame,
  Dumbbell,
  Utensils,
  Heart,
  Settings,
  LogOut,
  ChevronDown,
  Menu,
  X,
} from "lucide-vue-next";

const router = useRouter();
const route = useRoute();

// --- State Management ---
const isSidebarCollapsed = ref(false);
const isMobileSidebarOpen = ref(false);
const isUserMenuOpen = ref(false);
const user = ref({});
const screenWidth = ref(window.innerWidth);

// --- Menu Items TANPA Beranda ---
const menuItems = ref([
  { name: "Kalkulator BMI", path: "/dashboard/bmi", icon: Calculator },
  { name: "Kalkulator Kalori", path: "/dashboard/kalori", icon: Flame },
  { name: "Latihan", path: "/dashboard/latihan", icon: Dumbbell },
  { name: "Makanan", path: "/dashboard/makanan", icon: Utensils },
  { name: "Favorit", path: "/dashboard/favorit", icon: Heart },
  { name: "Pengaturan", path: "/dashboard/pengaturan", icon: Settings },
]);

// --- Cursor Glow References ---
const menuGlowRefs = ref({});
const toggleButtonGlow = ref(null);
const headerMenuButtonGlow = ref(null);

// --- Computed Properties ---
const currentRouteName = computed(() => {
  const routeName = route.name || "Dashboard";
  return routeName.charAt(0).toUpperCase() + routeName.slice(1);
});

// --- Methods ---
const toggleSidebar = () => {
  if (screenWidth.value >= 1024) {
    isSidebarCollapsed.value = !isSidebarCollapsed.value;
  } else {
    isMobileSidebarOpen.value = !isMobileSidebarOpen.value;
  }
};

const goToHome = () => {
  router.push("/dashboard");
};

const goToHomeAndCloseMobile = () => {
  router.push("/dashboard");
  isMobileSidebarOpen.value = false;
};

// Cursor Glow Handlers
const handleMenuMouseMove = (event, menuName) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const glowRef = menuGlowRefs.value[menuName];

  if (glowRef) {
    glowRef.style.left = event.clientX - rect.left + "px";
    glowRef.style.top = event.clientY - rect.top + "px";
    glowRef.style.opacity = "0.6";
  }
};

const handleMenuMouseLeave = (menuName) => {
  const glowRef = menuGlowRefs.value[menuName];
  if (glowRef) {
    glowRef.style.opacity = "0";
  }
};

const handleButtonMouseMove = (event, buttonType) => {
  const rect = event.currentTarget.getBoundingClientRect();
  let glowRef;

  switch (buttonType) {
    case "toggle":
      glowRef = toggleButtonGlow.value;
      break;
    case "header-menu":
      glowRef = headerMenuButtonGlow.value;
      break;
  }

  if (glowRef) {
    glowRef.style.left = event.clientX - rect.left + "px";
    glowRef.style.top = event.clientY - rect.top + "px";
    glowRef.style.opacity = "0.4";
  }
};

const handleButtonMouseLeave = (buttonType) => {
  let glowRef;

  switch (buttonType) {
    case "toggle":
      glowRef = toggleButtonGlow.value;
      break;
    case "header-menu":
      glowRef = headerMenuButtonGlow.value;
      break;
  }

  if (glowRef) {
    glowRef.style.opacity = "0";
  }
};

const handleLogout = async () => {
  isUserMenuOpen.value = false;
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    router.push("/");
  } catch (error) {
    console.error("Error logging out:", error.message);
  }
};

const closeUserMenu = (e) => {
  if (!e.target.closest(".relative")) {
    isUserMenuOpen.value = false;
  }
};

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

// --- Lifecycle Hooks ---
onMounted(async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    user.value = {
      email: session.user.email,
      full_name: session.user.user_metadata?.full_name,
      avatar_url: session.user.user_metadata?.avatar_url,
    };
  }
  document.addEventListener("click", closeUserMenu);
  window.addEventListener("resize", updateScreenWidth);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closeUserMenu);
  window.removeEventListener("resize", updateScreenWidth);
});

watch(screenWidth, (newWidth) => {
  if (newWidth >= 1024) {
    isMobileSidebarOpen.value = false;
  }
});
</script>

<style scoped>
/* Enhanced Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

.fade-down-enter-active,
.fade-down-leave-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-12px) scale(0.95);
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(-100%);
}

/* Custom cursor glow container */
.cursor-glow-container {
  position: relative;
  overflow: hidden;
}

/* Enhanced scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(6, 182, 212, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(6, 182, 212, 0.5);
}

/* Selection colors */
::selection {
  background: rgba(6, 182, 212, 0.2);
  color: rgb(8, 145, 178);
}

::-moz-selection {
  background: rgba(6, 182, 212, 0.2);
  color: rgb(8, 145, 178);
}

/* Hide scrollbar for sidebar */
aside::-webkit-scrollbar {
  display: none;
}
aside {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
