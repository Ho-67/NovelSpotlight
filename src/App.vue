<template>
  <div class="flex flex-col min-h-screen">
    <Navbar style="z-index: 100" />
    <main class="grow p-20 lg:py-0">
      <router-view />
    </main>
    <Footer style="z-index: 100" />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
