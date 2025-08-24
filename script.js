// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Language switcher
const langSwitcher = document.getElementById("language-switcher");
const welcomeText = document.getElementById("welcome-text");

const translations = {
  en: "Welcome to 5Levels – Explore knowledge step by step.",
  es: "Bienvenido a 5Levels – Explora el conocimiento paso a paso.",
  de: "Willkommen bei 5Levels – Erkunde Wissen Schritt für Schritt.",
  ar: "مرحبًا بك في 5Levels – اكتشف المعرفة خطوة بخطوة."
};

langSwitcher.addEventListener("change", (e) => {
  const lang = e.target.value;
  welcomeText.textContent = translations[lang];
});
