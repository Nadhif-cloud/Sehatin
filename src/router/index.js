import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '../supabaseClient'

// Impor komponen utama
import LandingPage from '../components/LandingPage.vue'
import LoginPage from '../components/LoginPage.vue'
import RegisterPage from '../components/RegisterPage.vue'
import DashboardLayout from '../components/DashboardLayout.vue'
import SKPage from '../components/SKPage.vue'
import ContactPage from '../components/ContactPage.vue'

// Impor komponen halaman dashboard
import DashboardHome from '../components/DashboardHome.vue'
import BmiCalculator from '../components/BmiCalculator.vue'
import CalorieCalculatorPage from '../components/CalorieCalculator.vue'
import ExercisePage from '../components/ExercisePage.vue'
import ExerciseDetailPage from '../components/ExerciseDetailPage.vue'
import FoodPage from '../components/FoodPage.vue'
import FoodDetailPage from '../components/FoodDetailPage.vue'
import FavoritesPage from '../components/FavoritesPage.vue'
import SettingsPage from '../components/SettingsPage.vue'

const routes = [
  { path: '/', name: 'Landing', component: LandingPage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/privacy-policy', name: 'PrivacyPolicy', component: () => import("../components/LegalPage.vue.vue") }, 
  { path: '/sk', name: 'SK', component: SKPage },
  { path: '/contact', name: 'Contact', component: ContactPage },

  {
  path: '/dashboard',
  component: DashboardLayout,
  meta: { requiresAuth: true }, // Proteksi route ini
  children: [
    { 
      path: '', 
      name: 'Beranda', 
      component: DashboardHome // <-- Halaman Home Ditambahkan
    },
    { 
      path: 'bmi', 
      name: 'Kalkulator BMI', 
      component: BmiCalculator 
    },
    { 
      path: 'kalori',
      name: 'Kalkulator Kalori', 
      component: CalorieCalculatorPage 
    },
    { 
      path: 'latihan', 
      name: 'Latihan', 
      component: ExercisePage 
    },
    { 
      path: 'latihan/:id',
      name: 'ExerciseDetail', 
      component: ExerciseDetailPage,
      props: true
    },
    { 
      path: 'makanan', 
      name: 'Makanan', 
      component: FoodPage 
    },
    { 
      path: 'makanan/:id',
      name: 'FoodDetail', 
      component: FoodDetailPage,
      props: true
    },
    { 
      path: 'favorit', 
      name: 'Favorit', 
      component: FavoritesPage 
    },
    { 
      path: 'pengaturan', 
      name: 'Pengaturan', 
      component: SettingsPage 
    },
  ]
},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

// Navigation Guard (Proteksi Route)
router.beforeEach(async (to, from, next) => {
  const { data: { session } } = await supabase.auth.getSession();
  
  if (to.meta.requiresAuth && !session) {
    // Jika route butuh login dan user tidak punya sesi, redirect ke login
    next({ name: 'Login' });
  } else {
    // Lanjutkan navigasi
    next();
  }
});

export default router
