<template>
  <div
    class="grow flex flex-col items-center justify-center min-h-screen my-auto"
  >
    <div
      class="flex flex-row flex-wrap justify-center text-3xl font-bold text-center text-[#61777b]"
    >
      <span class="text-nowrap mb-4 mx-2"> 創作輔助APP </span>
      <span class="text-nowrap mb-4 mx-2"> 四大功能一次滿足 </span>
    </div>
    <div
      class="grid content-center justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 md:mb-4 lg:mb-0"
    >
      <router-link to="/introduction#pets">
        <div
          class="group relative w-full h-80 rounded-lg overflow-hidden hover:shadow-xl transition-transform duration-500 hover:scale-105"
        >
          <img
            :src="getCloudinaryUrl('寵物_NOVELSPOTLIGHT.png')"
            alt="寵物功能"
            class="pt-4 w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute bottom-0 w-full h-14 bg-[#61777b] text-[#EEE9D6] rounded-lg p-3 transition-all duration-500 group-hover:h-26 group-hover:bg-[#314143] group-hover:opacity-90"
          >
            <h3 class="font-semibold text-lg text-center">寵物功能</h3>
            <p
              class="text-sm text-center opacity-0 group-hover:opacity-100 mt-2 transition-opacity duration-500"
            >
              寫作任務、寵物養成
            </p>
          </div>
        </div>
      </router-link>

      <router-link to="/introduction#outline">
        <div
          class="group relative w-full h-80 rounded-lg overflow-hidden hover:shadow-xl transition-transform duration-500 hover:scale-105"
        >
          <img
            :src="getCloudinaryUrl('大綱_NOVELSPOTLIGHT.png')"
            alt="大綱功能"
            class="pt-4 w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute bottom-0 w-full h-14 bg-[#61777b] text-[#EEE9D6] rounded-lg p-3 transition-all duration-500 group-hover:h-26 group-hover:bg-[#314143] group-hover:opacity-90"
          >
            <h3 class="font-semibold text-lg text-center">大綱功能</h3>
            <p
              class="text-sm text-center opacity-0 group-hover:opacity-100 mt-2 transition-opacity duration-500"
            >
              四段式寫作、三幕式寫作
            </p>
          </div>
        </div>
      </router-link>

      <router-link to="/introduction#character">
        <div
          class="group relative w-full h-80 rounded-lg overflow-hidden hover:shadow-xl transition-transform duration-500 hover:scale-105"
        >
          <img
            :src="getCloudinaryUrl('人物_NOVELSPOTLIGHT.png')"
            alt="人物關係圖功能"
            class="pt-4 w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute bottom-0 w-full h-14 bg-[#61777b] text-[#EEE9D6] rounded-lg p-3 transition-all duration-500 group-hover:h-26 group-hover:bg-[#314143] group-hover:opacity-90"
          >
            <h3 class="font-semibold text-lg text-center">人物關係圖功能</h3>
            <p
              class="text-sm text-center opacity-0 group-hover:opacity-100 mt-2 transition-opacity duration-500"
            >
              角色設定、關係圖編輯
            </p>
          </div>
        </div>
      </router-link>

      <router-link to="/introduction#community">
        <div
          class="group relative w-full h-80 rounded-lg overflow-hidden hover:shadow-xl transition-transform duration-500 hover:scale-105"
        >
          <img
            :src="getCloudinaryUrl('社群_NOVELSPOTLIGHT.png')"
            alt="社群功能"
            class="pt-4 w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute bottom-0 w-full h-14 bg-[#61777b] text-[#EEE9D6] rounded-lg p-3 transition-all duration-500 group-hover:h-26 group-hover:bg-[#314143] group-hover:opacity-90"
          >
            <h3 class="font-semibold text-lg text-center">社群功能</h3>
            <p
              class="text-sm text-center opacity-0 group-hover:opacity-100 mt-2 transition-opacity duration-500"
            >
              故事接龍、寫作交流
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { getCloudinaryUrl } from "@/utils/cloudinary.js";
</script>

<route lang="yaml">
meta:
  title: "首頁"
</route>
