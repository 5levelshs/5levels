// زر يتغير لونه عند الضغط
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  button.style.background = "#4CAF50"; // أخضر
  button.textContent = "تم الضغط ✅";
});

// إظهار/إخفاء القائمة في الجوال
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});
