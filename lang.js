const translations = {
  uz: {
    heroTitle: "Donatni hoziroq qabul qiling",
    heroDesc: "Asia uchun eng yaxshi streamer platformasi",
  },
  ru: {
    heroTitle: "Получай донаты сейчас",
    heroDesc: "Платформа для стримеров в Азии",
  },
  kz: {
    heroTitle: "Қазір донатты қабылдаңыз",
    heroDesc: "Азия стримерлері үшін платформа",
  },
  kg: {
    heroTitle: "Донат кабыл алыңыз",
    heroDesc: "Азия стримерлери үчүн платформа",
  },
  tj: {
    heroTitle: "Ҳозир донат гиред кунед",
    heroDesc: "Барои стримерҳо дар Осиё",
  }
};

document.getElementById("lang").addEventListener("change", function () {
  const lang = this.value;
  const t = translations[lang];
  if (t) {
    document.querySelector("main h1").textContent = t.heroTitle;
  }
});
