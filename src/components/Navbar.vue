<template>
  <nav
    class="bg-[#EEE9D6] w-full flex justify-between items-center h-[64px] px-20 fixed top-0"
  >
    <!-- Logo -->
    <div class="text-xl font-bold">
      <router-link to="/">
        <img
          :src="getCloudinaryUrl('LOGO_NOVELSPOTLIGHT.png')"
          alt="文輕小站"
          class="w-20"
        />
      </router-link>
    </div>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex space-x-6 text-lg font-bold">
      <li>
        <router-link to="/experience" @click="toggleMenu" class="flex flex-row">
          <Icon icon="mdi:gesture" class="w-6 h-6" />
          <span>互動體驗</span>
        </router-link>
      </li>
      <li>
        <router-link to="/about" @click="toggleMenu" class="flex flex-row">
          <Icon icon="mdi:feather" class="w-6 h-6" />
          <span>關於我們</span>
        </router-link>
      </li>
    </ul>

    <!-- Mobile Menu Button -->
    <div
      class="md:hidden flex items-center text-[#7ea5aa] hover:text-[#096982]"
    >
      <button @click="toggleMenu" class="cursor-pointer">
        <Icon v-if="!isMenuOpen" icon="mdi:menu" class="w-6 h-6" />
        <Icon v-else icon="mdi:close" class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="absolute top-full left-0 w-full bg-[#EEE9D6] md:hidden py-4"
    >
      <ul class="flex flex-col items-center space-y-4 py-8 text-md font-bold">
        <li>
          <router-link
            to="/experience"
            @click="toggleMenu"
            class="flex flex-row space-x-1"
          >
            <Icon icon="mdi:gesture" class="w-6 h-6" />
            <span>互動體驗</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            @click="toggleMenu"
            class="flex flex-row space-x-1"
          >
            <Icon icon="mdi:feather" class="w-6 h-6" />
            <span>聯絡我們</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { getCloudinaryUrl } from "@/utils/cloudinary.js";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
