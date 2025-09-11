<template>
  <!-- 設計理念 -->
  <div
    class="mt-4 md:mt-8 lg:mt-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full text-center"
  >
    <p class="text-3xl font-bold text-[#61777b] col-span-full mb-2">設計理念</p>
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="py-2 col-span-1 lg:col-span-2 rounded-lg shadow-md card transition-transform opacity-0"
      v-intersect="(isVisible) => (card.visible = isVisible)"
      :class="{ 'slide-up visible': card.visible }"
    >
      <img
        :src="card.img"
        class="h-48 object-contain mx-auto filter contrast-80 sepia-20 brightness-110 saturate-150"
        :alt="card.title"
      />
      <p class="font-medium text-md md:text-lg">{{ card.text }}</p>
    </div>
  </div>

  <!-- 時間軸 -->
  <div class="my-8 w-full text-center">
    <p class="text-3xl font-bold text-[#61777b] col-start-1 col-end-7 py-4">
      開發里程碑
    </p>
    <div class="timeline">
      <div
        v-for="(item, index) in timelineItems"
        :key="item.year"
        class="timeline-item"
        :class="[
          item.visible
            ? 'visible'
            : index % 2 === 0
            ? 'slide-left'
            : 'slide-right',
        ]"
        v-intersect="
          (isVisible) => {
            // 只要滑入就設定 visible = true
            item.visible = isVisible;
          }
        "
      >
        <div class="text-card">
          <p class="title">{{ item.year }}</p>
          <ul class="desc">
            <li v-for="event in item.events" :key="event">{{ event }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- 開發團隊 -->
  <div
    class="p-4 mb-4 md:mb-8 lg:mb-24 grid grid-cols-1 lg:grid-cols-6 gap-4 w-full shadow-md rounded-lg"
  >
    <!-- 標題區 -->
    <div class="rounded-lg col-span-full text-center">
      <div class="flex flex-col lg:flex-row items-center lg:items-start">
        <img
          src="@/assets/7139.svg"
          class="h-30 object-contain mb-4 lg:mb-0 lg:ml-auto lg:mr-8 contrast-80 sepia-20 brightness-110 saturate-150"
          alt="開發團隊"
        />
        <div class="text-left lg:mr-auto">
          <p
            class="text-[#61777b] text-lg md:text-2xl lg:text-3xl font-bold text-center lg:text-left"
          >
            開發團隊<b>｜</b>文青製作委員會
          </p>
          <p class="my-2 text-sm lg:text-base text-center lg:text-left">
            文輕小站 APP 由三人共同製作，於 2023
            年完成，為學生時期的畢業專題。<br />
            當時的成果為 Figma Prototype 與電腦版的介紹網頁。<br />
            原網頁設計負責人在 2025 年重新改版 RWD
            展示網頁，讓設計理念與流程能完整呈現。
          </p>
        </div>
      </div>
      <hr class="mt-4" />
    </div>

    <!-- 三個小卡片 -->
    <div class="p-4 col-span-1 lg:col-span-2 bg-[#f1efe2] rounded-lg shadow-sm">
      <p class="text-md font-semibold text-[#61777b] text-center mb-1">
        視覺設計負責人
      </p>
      <div class="text-sm text-center">
        主要設計：寵物、社群、檔案統整處項目線框圖<br />
        其他工作：APP 內所有插圖、Logo & 海報
      </div>
    </div>

    <div class="p-4 col-span-1 lg:col-span-2 bg-[#f1efe2] rounded-lg shadow-sm">
      <p class="text-md font-semibold text-[#61777b] text-center mb-1">
        工程互動負責人
      </p>
      <div class="text-sm text-center">
        主要設計：人物關係圖項目線框圖<br />
        其他工作：專案策劃、原型製作、網頁設計
      </div>
    </div>

    <div class="p-4 col-span-1 lg:col-span-2 bg-[#f1efe2] rounded-lg shadow-sm">
      <p class="text-md font-semibold text-[#61777b] text-center mb-1">
        媒體製作負責人
      </p>
      <div class="text-sm text-center">
        主要設計：大綱項目線框圖<br />
        其他工作：影片剪輯、行政宣傳
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// import SVG
import freedomSvg from "@/assets/11369.svg";
import phoneSvg from "@/assets/7077.svg";
import upgradeSvg from "@/assets/13467.svg";

const cards = ref([
  {
    img: freedomSvg,
    title: "自由",
    text: "推廣中文小說創作自由，降低新手創作者門檻",
    visible: false,
  },
  {
    img: phoneSvg,
    title: "手機",
    text: "以手機取代紙本，提供隨身創作工具，即時記錄靈感",
    visible: false,
  },
  {
    img: upgradeSvg,
    title: "升級",
    text: "打造乾淨舒適的創作體驗，鼓勵新手展開創作之路",
    visible: false,
  },
]);

const timelineItems = ref([
  {
    year: "2022 年",
    events: [
      "◆ 專案發想與主題確立",
      "◆ 完成使用者研究、資訊架構",
      "◆ 完成市場分析與問卷調查",
    ],
    visible: false,
  },
  {
    year: "2023 年",
    events: [
      "◆ 完成使用者旅程規劃",
      "◆ 完成線框圖、Mockup、Prototype（Figma 原型）",
    ],
    visible: false,
  },
  {
    year: "2025 年",
    events: [
      "◆ 團隊工程互動負責人重製展示網站",
      "◆ 網站完整呈現專案理念、設計過程與成果",
    ],
    visible: false,
  },
]);
</script>

<style scoped>
.card {
  transition: transform 0.7s ease, opacity 0.7s ease;
}

.slide-up {
  transform: translateY(0);
  opacity: 1;
}

/* 初始狀態 */
.card:not(.slide-up) {
  transform: translateY(3rem);
  opacity: 0;
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
    justify-content: flex-end;
    align-items: flex-start;
    gap: 2rem;
    transition: all 0.7s ease-in-out;
    will-change: transform, opacity;
  }

  /* 圓點置中 */
  .timeline-item::after {
    content: "";
    position: absolute;
    top: 50%; /* Adjust this value to vertically center with the title */
    width: 20px;
    height: 20px;
    background-color: #f4f3ec;
    border: 3px solid #7ea5aa;
    border-radius: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .text-card {
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
  title: "關於我們"
</route>
