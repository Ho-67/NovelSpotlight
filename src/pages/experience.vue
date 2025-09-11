<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="mx-auto px-4">
      <div
        class="flex flex-col lg:flex-row items-center justify-center bg-[#F4F3EC] md:p-4 rounded-lg gap-8 shadow-lg"
      >
        <!-- Video Player -->
        <div class="w-full lg:w-3/5">
          <video
            controls
            preload="metadata"
            class="rounded-lg w-full h-auto"
            :src="getCloudinaryUrl('完整操作畫面_NOVELSPOTLIGHT.mp4')"
            :poster="getCloudinaryUrl('操作封面圖_NOVELSPOTLIGHT.png')"
          ></video>
        </div>

        <!-- QR Code and Link -->
        <div
          class="w-full lg:w-2/5 flex flex-col items-center gap-4 pb-8 md:pb-0"
        >
          <img
            class="w-66 object-contain"
            :src="getCloudinaryUrl('qrCode_NOVELSPOTLIGHT.png')"
            alt="掃碼操作"
          />
          <a
            href="https://www.figma.com/proto/X3sJVpnhkt3dGKRUcNlvwJ/app%E6%A6%82%E5%BF%B5%E4%BA%92%E5%8B%95%E9%AB%94%E9%A9%97%E7%89%88_%E6%96%87%E8%BC%95%E5%B0%8F%E7%AB%99?page-id=0%3A1&node-id=548-29430&viewport=-46%2C18427%2C0.63&scaling=scale-down&starting-point-node-id=1%3A7447"
            target="_blank"
            class="link"
          >
            跳轉操作 Prototype
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCloudinaryUrl } from "@/utils/cloudinary.js";
</script>

<style scoped>
.link {
  border: #7ea5aa 3px solid;
  width: 100%;
  max-width: 250px; /* Set a max-width for larger screens */
  border-radius: 12px;
  padding: 8px;
  text-align: center;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.link:hover {
  background-color: #7ea5aa;
  color: #f1efe2;
}
</style>

<route lang="yaml">
meta:
  title: "互動體驗"
</route>
