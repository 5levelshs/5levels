// ======== البيانات ========
const topics = [
  { ar:"الفلسفة العقلية", en:"Rational Philosophy", es:"Filosofía racional", de:"Rationale Philosophie" },
  { ar:"معرفة الذات", en:"Self Knowledge", es:"Conocimiento de sí mismo", de:"Selbstkenntnis" },
  { ar:"المنطق والتفكير", en:"Logic & Thinking", es:"Lógica y pensamiento", de:"Logik & Denken" },
  { ar:"أخلاق وسلوك", en:"Ethics & Behavior", es:"Ética y comportamiento", de:"Ethik & Verhalten" },
];

// ======== عرض المواضيع ========
let currentLang = 'ar';
function renderTopics(filter="") {
  const container = document.getElementById('topics-container');
  container.innerHTML = "";
  topics
    .filter(t => t[currentLang].toLowerCase().includes(filter.toLowerCase()))
    .forEach(t => {
      const card = document.createElement('div');
      card.className = 'card';
      card.textContent = t[currentLang];
      container.appendChild(card);
    });
}
renderTopics();

// ======== البحث ========
document.getElementById('search-input').addEventListener('input', e=>{
  renderTopics(e.target.value);
});

// ======== تغيير اللغة ========
document.querySelectorAll('.lang-selector button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    currentLang = btn.dataset.lang;
    document.body.dir = (currentLang==='ar')?'rtl':'ltr';
    renderTopics(document.getElementById('search-input').value);
  });
});

// ======== وضع داكن / فاتح ========
const toggle = document.getElementById('toggle-theme');
toggle.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
