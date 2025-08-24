// Theme toggle
const themeBtn = document.getElementById('toggle-theme');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Language buttons
const content = document.getElementById('content');
const translations = {
  en: "Welcome to 5Levels. Here you will find knowledge and articles from different fields.",
  es: "Bienvenido a 5Levels. Aquí encontrarás conocimiento y artículos de diferentes campos.",
  de: "Willkommen bei 5Levels. Hier finden Sie Wissen und Artikel aus verschiedenen Bereichen.",
  ar: "مرحباً بك في موقع 5Levels. هنا ستجد مقالات ومعرفة من مختلف المجالات."
};

document.getElementById('lang-en').addEventListener('click', () => content.innerHTML = `<p>${translations.en}</p>`);
document.getElementById('lang-es').addEventListener('click', () => content.innerHTML = `<p>${translations.es}</p>`);
document.getElementById('lang-de').addEventListener('click', () => content.innerHTML = `<p>${translations.de}</p>`);
document.getElementById('lang-ar').addEventListener('click', () => content.innerHTML = `<p>${translations.ar}</p>`);
