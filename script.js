// القائمة والتمرير
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => { menu.classList.toggle("show"); });

const scrollTopBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  document.querySelectorAll("section").forEach(sec => {
    if(sec.getBoundingClientRect().top < window.innerHeight - 100){ sec.classList.add("visible"); }
  });
});
scrollTopBtn.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// الوضع الداكن
document.getElementById("toggleDark").addEventListener("click", () => { document.body.classList.toggle("dark"); });

// النصوص العربية والإنجليزية
const texts = {
  "ar": {
    introTitle:"ما هو 5Levels؟",
    introText:"موقع يشرح أي موضوع بخمس مستويات: من البسيط جدًا إلى المعقد جدًا، مع تجربة ممتعة ومرئية.",
    introButton:"جرب الآن 🚀",
    featuresTitle:"ميزات الموقع",
    feature1:"قائمة متجاوبة",
    feature2:"5 مستويات لكل موضوع",
    feature3:"ألوان متناسقة",
    feature4:"حركة عند التمرير",
    feature5:"نموذج تواصل",
    feature6:"مقالات تعليمية",
    topicsTitle:"اختر موضوعك",
    articlesTitle:"مقالاتنا",
    contactTitle:"اتصل بنا",
    sendButton:"إرسال",
    footer:"تبسيط المعرفة للجميع",
    name:"الاسم",
    email:"البريد الإلكتروني",
    message:"رسالتك"
  },
  "en": {
    introTitle:"What is 5Levels?",
    introText:"5Levels explains any topic in five levels: from very simple to very complex, with an enjoyable visual experience.",
    introButton:"Try Now 🚀",
    featuresTitle:"Website Features",
    feature1:"Responsive Menu",
    feature2:"5 Levels per Topic",
    feature3:"Colorful Design",
    feature4:"Scroll Animation",
    feature5:"Contact Form",
    feature6:"Educational Articles",
    topicsTitle:"Choose Your Topic",
    articlesTitle:"Our Articles",
    contactTitle:"Contact Us",
    sendButton:"Send",
    footer:"Simplifying Knowledge for Everyone",
    name:"Name",
    email:"Email",
    message:"Your Message"
  }
};
let currentLang="ar";
document.getElementById("toggleLanguage").addEventListener("click", ()=>{
  currentLang = currentLang==="ar"?"en":"ar";
  document.getElementById("toggleLanguage").innerText=currentLang==="ar"?"EN":"AR";
  document.querySelectorAll("[data-key]").forEach(el=>{
    el.innerText=texts[currentLang][el.dataset.key];
  });
  document.querySelectorAll("[data-key-placeholder]").forEach(el=>{
    el.placeholder=texts[currentLang][el.dataset.keyPlaceholder];
  });
});

// المواضيع والفقرات لكل مستوى
const topicsData = {
  "الذكاء الاصطناعي": {
    ar:[
      "👶 المستوى 1 للأطفال: الذكاء الاصطناعي يجعل الكمبيوتر يفكر مثل الإنسان. فقرة كاملة تشرح بطريقة بسيطة.",
      "📘 المستوى 2 مبتدئين: برامج تتعلم من البيانات وتساعدنا في حياتنا اليومية. فقرة مفصلة تشرح الفكرة.",
      "🎓 المستوى 3 طلاب: خوارزميات التعلم الآلي والشبكات العصبية البسيطة، مع أمثلة عملية.",
      "🧠 المستوى 4 خبراء: التعلم العميق، معالجة اللغة، الرؤية الحاسوبية واتخاذ القرارات الذكية. شرح مفصل.",
      "📚 المستوى 5 أكاديمي: أبحاث متقدمة في النماذج التوليدية، الذكاء الاصطناعي العام، والتطبيقات العلمية."
    ],
    en:[
      "👶 Level 1 Kids: AI makes computers think like humans. Full paragraph explaining simply.",
      "📘 Level 2 Beginners: Programs learn from data and help us in daily life. Detailed paragraph.",
      "🎓 Level 3 Students: Machine learning algorithms and basic neural networks, with practical examples.",
      "🧠 Level 4 Experts: Deep learning, NLP, computer vision, decision making. Full explanation.",
      "📚 Level 5 Academic: Advanced research in generative models, AGI, and scientific applications."
    ]
  },
  "البرمجة": {
    ar:[
      "👶 المستوى 1 للأطفال: البرمجة تعني إعطاء الكمبيوتر تعليمات بسيطة.",
      "📘 المستوى 2 مبتدئين: تعلم لغات مثل Python أو Scratch لكتابة برامج صغيرة.",
      "🎓 المستوى 3 طلاب: فهم الحلقات، الدوال، المصفوفات، وإنشاء برامج متوسطة.",
      "🧠 المستوى 4 خبراء: تصميم برامج متقدمة، خوارزميات قوية، تطبيقات ويب وذكاء اصطناعي.",
      "📚
