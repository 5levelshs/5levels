// ===== البيانات =====
const topics = [
  { ar:"الفلسفة العقلية", en:"Rational Philosophy", es:"Filosofía racional", de:"Rationale Philosophie" },
  { ar:"معرفة الذات",     en:"Self Knowledge",       es:"Conocimiento de sí mismo", de:"Selbstkenntnis" },
  { ar:"المنطق والتفكير",  en:"Logic & Thinking",     es:"Lógica y pensamiento",     de:"Logik & Denken" },
  { ar:"أخلاق وسلوك",      en:"Ethics & Behavior",    es:"Ética y comportamiento",   de:"Ethik & Verhalten" },
];

const UI = {
  placeholder: {
    ar: "ابحث عن موضوع...",
    en: "Search a topic...",
    es: "Buscar un tema...",
    de: "Thema suchen..."
  }
};

let currentLang = localStorage.getItem("lang") || "ar";
let currentTheme = localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

// ===== مساعدات =====
function applyLang(lang){
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  const input = document.getElementById("search-input");
  if (input) input.placeholder = UI.placeholder[lang] || UI.placeholder.en;

  // تفعيل زر اللغة المختار
  document.querySelectorAll(".lang-selector button").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  renderTopics(document.getElementById("search-input")?.value || "");
}

function applyTheme(theme){
  currentTheme = theme;
  localStorage.setItem("theme", theme);
  document.body.classList.toggle("dark", theme === "dark");
  const btn = document.getElementById("toggle-theme");
  if (btn) btn.textContent = (theme === "dark") ? "☀️" : "🌙";
}

function renderTopics(filter=""){
  const container = document.getElementById("topics-container");
  if (!container) return;
  container.innerHTML = "";

  topics
    .filter(t => (t[currentLang] || t.ar).toLowerCase().includes(filter.toLowerCase()))
    .forEach(t => {
      const card = document.createElement("div");
      card.className = "card";
      const h = document.createElement("h3");
      h.textContent = t[currentLang] || t.ar;
      const p = document.createElement("p");
      p.textContent = { ar:"ملخص قصير للموضوع.", en:"Short summary.", es:"Resumen breve.", de:"Kurze Zusammenfassung." }[currentLang] || "";
      card.appendChild(h);
      card.appendChild(p);
      container.appendChild(card);
    });
}

// ===== تهيئة =====
function init(){
  // سنة الفوتر
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // لغات
  document.querySelectorAll(".lang-selector button").forEach(btn=>{
    btn.addEventListener("click", ()=> applyLang(btn.dataset.lang));
  });

  // ثيم
  const themeBtn = document.getElementById("toggle-theme");
  if (themeBtn){
    themeBtn.addEventListener("click", ()=> applyTheme(currentTheme === "dark" ? "light" : "dark"));
  }

  // بحث
  const search = document.getElementById("search-input");
  if (search){
    search.addEventListener("input", e => renderTopics(e.target.value));
  }

  // تطبيق الإعدادات الحالية
  applyTheme(currentTheme);
  applyLang(currentLang);
  renderTopics();
}

// مع defer سيعمل بعد بناء DOM، لكن نضمن أيضًا:
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
