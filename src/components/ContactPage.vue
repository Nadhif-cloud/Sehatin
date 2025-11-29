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
      <h2 class="text-3xl font-extrabold text-gray-800 mb-6">Hubungi Kami</h2>
      <div class="bg-white shadow-lg rounded-xl p-6 space-y-6 text-gray-700 leading-relaxed">
        <p>
          Kami sangat senang mendengar masukan, pertanyaan, atau saran dari Anda.  
          Silakan gunakan informasi di bawah ini untuk menghubungi tim <strong>Sehatin</strong>.
        </p>

        <div class="space-y-4">
          <div>
            <h3 class="text-xl font-semibold">Email</h3>
            <p>
              <a href="mailto:support@Sehatin.com" class="text-blue-600 hover:underline">
                support@Sehatin.com
              </a>
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold">Telepon</h3>
            <p>
              <a href="tel:+6281234567890" class="text-blue-600 hover:underline">
                +62 812-3456-7890
              </a>
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold">Alamat Kantor</h3>
            <p>
              Jl. Kesehatan No. 123, Jakarta, Indonesia
            </p>
          </div>
        </div>

        <!-- Form Kontak -->
        <form class="space-y-4 mt-6">
          <input 
            type="text" 
            placeholder="Nama Anda" 
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="email" 
            placeholder="Email Anda" 
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea 
            placeholder="Pesan Anda" 
            rows="4" 
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button 
            type="submit" 
            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300"
          >
            Kirim Pesan
          </button>
        </form>
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
  name: "ContactPage",
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
