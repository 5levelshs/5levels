// Toggle Menu
document.getElementById("menuToggle").onclick = () => {
  document.getElementById("menu").classList.toggle("active");
};

// Toggle Dark Mode
document.getElementById("toggleDark").onclick = () => {
  document.body.classList.toggle("dark");
};

// Toggle Language (عربي / English)
const translations = {
  ar: {
    introTitle: "مرحبا بك في 5Levels",
    introText: "موقع يشرح أي فكرة بخمس مستويات: من البسيط جدًا إلى الفلسفي العميق."
  },
  en: {
    introTitle: "Welcome to 5Levels",
    introText: "A website that explains any idea in five levels: from very simple to deep philosophy."
  }
};
let lang = "ar";
document.getElementById("toggleLanguage").onclick = () => {
  lang = lang === "ar" ? "en" : "ar";
  document.querySelector("[data-key='introTitle']").textContent = translations[lang].introTitle;
  document.querySelector("[data-key='introText']").textContent = translations[lang].introText;
};
