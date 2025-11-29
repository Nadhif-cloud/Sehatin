<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-white">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 
          class="text-2xl font-bold text-blue-600 cursor-pointer hover:scale-105 transition-transform duration-300"
          @click="$router.push('/')"
        >
          Sehatin
        </h1>
        <button 
          @click="$router.back()" 
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300"
        >
          Kembali
        </button>
      </div>
    </header>

    <!-- Content -->
    <main class="container mx-auto px-6 py-10 flex-1 animate-fadeIn">
      <h2 class="text-3xl font-extrabold text-gray-800 mb-6">Syarat & Ketentuan</h2>
      <div class="bg-white shadow-lg rounded-xl p-6 space-y-6 text-gray-700 leading-relaxed">
        <p>
          Selamat datang di <strong>Sehatin</strong>. Dengan menggunakan layanan kami, Anda dianggap telah membaca,
          memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku.
        </p>

        <section>
          <h3 class="text-xl font-semibold mb-2">1. Penggunaan Aplikasi</h3>
          <p>
            Aplikasi ini hanya untuk tujuan informasi dan pendukung gaya hidup sehat. Informasi yang diberikan
            tidak dimaksudkan sebagai pengganti saran medis profesional.
          </p>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-2">2. Privasi & Data</h3>
          <p>
            Data pribadi Anda dilindungi sesuai dengan <router-link to="/privacy-policy" class="text-blue-600 hover:underline">Kebijakan Privasi</router-link>.
            Kami tidak akan membagikan informasi Anda kepada pihak ketiga tanpa persetujuan.
          </p>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-2">3. Perubahan Layanan</h3>
          <p>
            Sehatin berhak untuk mengubah, menghentikan, atau memperbarui layanan kapan saja tanpa pemberitahuan terlebih dahulu.
          </p>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-2">4. Tanggung Jawab</h3>
          <p>
            Segala kerugian yang terjadi akibat penggunaan aplikasi ini berada di luar tanggung jawab Sehatin.
          </p>
        </section>

        <section>
          <h3 class="text-xl font-semibold mb-2">5. Kontak</h3>
          <p>
            Jika ada pertanyaan, silakan hubungi kami di 
            <a href="mailto:support@Sehatin.com" class="text-blue-600 hover:underline"> support@Sehatin.com</a>.
          </p>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-6 text-center">
      <p>&copy; 2025 Sehatin. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TermsPage",
};
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-in-out;
}
</style>
