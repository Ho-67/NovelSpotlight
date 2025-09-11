import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "~pages";
import App from "./App.vue";
import "./style.css";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          return resolve(savedPosition);
        }

        if (to.hash) {
          const element = document.querySelector(to.hash);
          if (element) {
            // Calculate the position to center the element in the viewport
            const elementRect = element.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            const middle =
              absoluteElementTop -
              window.innerHeight / 2 +
              elementRect.height / 2;
            resolve({ top: middle, behavior: "smooth" });
          } else {
            // Fallback if element doesn't exist
            resolve({ top: 0, behavior: "smooth" });
          }
        } else {
          // Scroll to top if no hash
          resolve({ top: 0, behavior: "smooth" });
        }
      }, 200);
    });
  },
});

const baseTitle = "文輕小站";

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = `${baseTitle} - ${to.meta.title}`;
  } else {
    document.title = baseTitle;
  }
});

const app = createApp(App);

// 定義 v-intersect 指令
app.directive("intersect", {
  mounted(el, binding) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 只要 20% 進入 viewport 就算 visible
        if (entry.intersectionRatio > 0.2) {
          binding.value(true);
        } else {
          // 延遲設定 false，確保 CSS transition 有時間
          setTimeout(() => binding.value(false), 5);
        }
      },
      {
        threshold: [0, 0.2], // 0 = 完全消失也觸發
        rootMargin: "0px 0px -20px 0px", // 可調整提前觸發滑出
      }
    );
    observer.observe(el); // 只觸發一次，避免重複
    el._observer = observer;
  },
  unmounted(el) {
    el._observer.disconnect();
  },
});

app.use(router);
app.mount("#app");
