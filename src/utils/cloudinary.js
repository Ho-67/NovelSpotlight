/**
 * 產生 Cloudinary 檔案 URL（自動判斷圖片 / 影片 / 音訊 / 其他）
 * @param {string} fileName - 檔名（包含副檔名，例如 dog.jpg, cat.mp4, song.mp3）
 * @returns {string} Cloudinary 完整 URL
 */
export function getCloudinaryUrl(fileName) {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  // 分離 public_id 與副檔名
  const parts = fileName.split(".");
  const publicId = parts.slice(0, -1).join("."); // 移除最後的副檔名
  const format = parts[parts.length - 1].toLowerCase();

  // 常見圖片格式
  const imageFormats = ["jpg", "jpeg", "png", "gif", "webp", "svg"];
  // 常見影音格式（mp3 也算在 video 類別）
  const videoFormats = ["mp4", "webm", "mov", "avi", "mkv", "mp3", "wav"];

  let resourceType = "raw"; // 預設 raw
  if (imageFormats.includes(format)) {
    resourceType = "image";
  } else if (videoFormats.includes(format)) {
    resourceType = "video";
  }

  // f_auto,q_auto 自動選最新檔案，避免 404
  return `https://res.cloudinary.com/${cloudName}/${resourceType}/upload/f_auto,q_auto/${publicId}.${format}`;
}
