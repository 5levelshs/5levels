// Menu toggle
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => { menu.classList.toggle("show"); });

// Scroll to Top
const scrollTopBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";

  // Scroll Animation
  document.querySelectorAll("section").forEach(sec => {
    if(sec.getBoundingClientRect().top < window.innerHeight - 100){
      sec.classList.add("visible");
    }
  });
});
scrollTopBtn.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// المواضيع مع 5 مستويات
const topicsData = {
  "الذكاء الاصطناعي":{
    1:"👶 المستوى 1: الكمبيوتر يحاول التفكير مثل الإنسان.",
    2:"📘 المستوى 2: برامج تتعلم وتساعدنا.",
    3:"🎓 المستوى 3: خوارزميات وشبكات عصبية.",
    4:"🧠 المستوى 4: تعلم الآلة والتعلم العميق.",
    5:"📚 المستوى 5: أنظمة قادرة على اتخاذ قرارات مستقلة."
  },
  "البرمجة":{
    1:"👶 المستوى 1: إعطاء الكمبيوتر تعليمات بسيطة.",
    2:"📘 المستوى 2: تعلم لغات مثل Python أو Scratch.",
    3:"🎓 المستوى 3: حلقات ودوال ومصفوفات.",
    4:"🧠 المستوى 4: برامج وخوارزميات متقدمة.",
    5:"📚 المستوى 5: البرمجة كعلم وهندسة."
  },
  "الصحة":{
    1:"👶 المستوى 1: الأكل الصحي مهم للنمو.",
    2:"📘 المستوى 2: النوم والرياضة جزء من الحياة.",
    3:"🎓 المستوى 3: أساسيات التغذية واللياقة.",
    4:"🧠 المستوى 4: دراسة الأمراض والوقاية.",
    5:"📚 المستوى 5: أبحاث متقدمة في الطب والصحة."
  },
  "الرياضيات":{
    1:"👶 المستوى 1: الأرقام والجمع والطرح.",
    2:"📘 المستوى 2: الجبر البسيط والمعادلات.",
    3:"🎓 المستوى 3: الهندسة والإحصاء.",
    4:"🧠 المستوى 4: التفاضل والتكامل.",
    5:"📚 المستوى 5: نظريات رياضية متقدمة."
  },
  "التاريخ":{
    1:"👶 المستوى 1: الأحداث البسيطة والشخصيات.",
    2:"📘 المستوى 2: العصور القديمة والوسطى.",
    3:"🎓 المستوى 3: الحروب والثورات.",
    4:"🧠 المستوى 4: التاريخ السياسي والاجتماعي.",
    5:"📚 المستوى 5: تحليلات تاريخية متعمقة."
  }
};

// توليد المواضيع ديناميكياً
const topicsSection = document.getElementById("topics");
for(let topic in topicsData){
  const div = document.createElement("div");
  div.classList.add("topic");

  const h3 = document.createElement("h3");
  h3.textContent = topic;
  div.appendChild(h3);

  const levelsDiv = document.createElement("div");
  levelsDiv.classList.add("levels");

  for(let i=1;i<=5;i++){
    const btn = document.createElement("button");
    btn.classList.add("level-btn","level"+i);
    btn.dataset.topic = topic;
    btn.dataset.level = i;
    btn.textContent = `المستوى ${i}`;
    levelsDiv.appendChild(btn);
  }
  div.appendChild(levelsDiv);

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("level-content");
  contentDiv.id = `content-${topic.replace(/\s+/g,'')}`;
  contentDiv.innerHTML="<p>اختر مستوى لتبدأ 🚀</p>";
  div.appendChild(contentDiv);

  topicsSection.appendChild(div);
}

// الضغط على أزرار المستوى
document.querySelectorAll(".level-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const topic = btn.dataset.topic;
    const level = btn.dataset.level;
    const contentDiv = document.getElementById(`content-${topic.replace(/\s+/g,'')}`);
    contentDiv.innerHTML=`<p>${topicsData[topic][level]}</p>`;
  });
});

// زر intro
document.getElementById("myButton").addEventListener("click",()=>{
  alert("مرحبًا! استكشف المواضيع المختلفة على 5Levels 🚀");
});

// توليد المقالات 5 طرق لكل موضوع
const articlesContainer = document.getElementById("articlesContainer");
for(let topic in topicsData){
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML=`<h3>${topic}</h3>
    <ul>
      <li>${topicsData[topic][1]}</li>
      <li>${topicsData[topic][2]}</li>
      <li>${topicsData[topic][3]}</li>
      <li>${topicsData[topic][4]}</li>
      <li>${topicsData[topic][5]}</li>
    </ul>`;
  articlesContainer.appendChild(card);
}
