<template>
  <div class="lg:py-24">
    <p class="text-3xl font-bold text-[#61777b] text-center mb-4">功能介紹</p>

    <div class="timeline">
      <div
        v-for="(item, index) in timelineItems"
        :key="item.id"
        :id="item.id"
        class="timeline-item"
        :style="{
          opacity: item.visible ? 1 : 0,
          transform: item.visible
            ? 'translateY(0)'
            : index % 2 === 0
            ? 'translateY(-3rem)'
            : 'translateY(3rem)',
        }"
        v-intersect="(isVisible) => (item.visible = isVisible)"
      >
        <div class="text-card">
          <p class="title">{{ item.title }}</p>
          <p class="desc">{{ item.text }}</p>
        </div>
        <div class="media-card">
          <video
            class="timeline-video"
            controls
            :src="getCloudinaryUrl(item.video)"
            preload="metadata"
            :poster="getCloudinaryUrl(item.cover)"
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getCloudinaryUrl } from "@/utils/cloudinary.js";

const timelineItems = ref([
  {
    id: "pets",
    title: "寵物功能",
    text: "在本功能裡您可以透過完成各項寫作任務來累積能量值，花費指定的能量值就可與寵物互動，此外，寵物切換功能可自由選取心愛的寵物，讓您的寫作時光在寵物的陪伴下變得更加有趣吧！",
    video: "寵物修_NOVELSPOTLIGHT.mp4",
    cover: "寵物封面圖_NOVELSPOTLIGHT.png",
    visible: false,
  },
  {
    id: "outline",
    title: "大綱功能",
    text: "本功能分為四段式大綱與三幕式大綱模式，您可以根據自己的需求來選擇要使用何種模式來編輯您的大綱，四段式大綱以起承轉合為主架構，並提供順敘倒敘插敘的寫作指引；三幕式大綱提供時間軸系統，可自由調整時間點高低區分事件關鍵性，此外，點擊指定的時間點可進行事件內容細項編輯，多元化創作大綱模式，讓您在編輯故事的過程更加清晰順手。",
    video: "大綱修_NOVELSPOTLIGHT.mp4",
    cover: "大綱封面圖_NOVELSPOTLIGHT.png",
    visible: false,
  },
  {
    id: "character",
    title: "人物關係圖功能",
    text: "在本功能裡您可以為自己的角色連接關係線，編輯設定角色之間的關係，更可以為角色間建立分組名稱，此外，點擊角色也可以進入角色編輯頁面，透過表格填寫整理為您的角色注入靈魂，功能豐富的角色編輯系統，讓您在編輯故事時更加清晰順手。",
    video: "人物修_NOVELSPOTLIGHT.mp4",
    cover: "關係圖封面圖_NOVELSPOTLIGHT.png",
    visible: false,
  },
  {
    id: "community",
    title: "社群功能",
    text: "在本功能裡您可以自由發佈自己創作的文章，或是查詢瀏覽他人所發佈的文章，此外，您也可以選擇單人遊玩或邀請好友進行故事接龍來提升寫作能力，試著透過與其他創作者的交流來提升自己的寫作能力吧！",
    video: "社群修_NOVELSPOTLIGHT.mp4",
    cover: "社群封面圖_NOVELSPOTLIGHT.png",
    visible: false,
  },
]);
</script>

<style scoped>
/* 影片卡片樣式 */
.timeline-video {
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 桌面版 */
@media (min-width: 1024px) {
  .timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  /* 中間時間軸線 */
  .timeline::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 3px;
    background-color: #7ea5aa;
    transform: translateX(-50%);
  }

  .timeline-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: all 0.7s ease-in-out;
    will-change: transform, opacity;
    height: 55vh;
  }

  /* 圓點置中 */
  .timeline-item::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background-color: #f4f3ec;
    border: 3px solid #7ea5aa;
    border-radius: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .text-card,
  .media-card {
    width: calc(50% - 3rem);
  }

  /* 左右交錯排列 */
  .timeline-item:nth-child(odd) {
    flex-direction: row-reverse;
  }

  .timeline-item:nth-child(even) {
    flex-direction: row;
  }
}
</style>

<route lang="yaml">
meta:
  title: "功能介紹"
</route>
