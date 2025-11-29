<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-white">
    <!-- Header -->
    <header class="bg-white shadow-sm">
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
      <h2 class="text-3xl font-extrabold text-gray-800 mb-6">Syarat dan Ketentuan</h2>
      <div class="bg-white shadow-lg rounded-xl p-6 space-y-4 text-gray-700 leading-relaxed">
        <p>
          Selamat datang di <strong>Sehatin</strong>. Dengan menggunakan aplikasi ini, Anda setuju untuk mematuhi
          syarat dan ketentuan berikut. Mohon baca dengan seksama sebelum menggunakan layanan kami.
        </p>

        <h3 class="text-xl font-semibold mt-6">1. Penggunaan Aplikasi</h3>
        <p>
          Aplikasi ini disediakan untuk membantu Anda memantau kesehatan, termasuk BMI, kalori, dan latihan.
          Segala informasi yang ditampilkan hanya bersifat informasi umum dan tidak menggantikan nasihat medis profesional.
        </p>

        <h3 class="text-xl font-semibold mt-6">2. Privasi dan Data</h3>
        <p>
          Kami menjaga keamanan data Anda sesuai kebijakan privasi. Data tidak akan dibagikan kepada pihak ketiga
          tanpa izin kecuali diwajibkan oleh hukum.
        </p>

        <h3 class="text-xl font-semibold mt-6">3. Perubahan Layanan</h3>
        <p>
          Kami berhak mengubah atau menghentikan sebagian/seluruh layanan sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
        </p>

        <h3 class="text-xl font-semibold mt-6">4. Tanggung Jawab</h3>
        <p>
          Sehatin tidak bertanggung jawab atas kerugian yang timbul dari penggunaan informasi di aplikasi ini.
        </p>

        <h3 class="text-xl font-semibold mt-6">5. Kontak</h3>
        <p>
          Untuk pertanyaan lebih lanjut, silakan hubungi kami melalui email: 
          <a href="mailto:support@Sehatin.com" class="text-blue-600 hover:underline">support@Sehatin.com</a>.
        </p>
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
  name: "LegalPage",
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
