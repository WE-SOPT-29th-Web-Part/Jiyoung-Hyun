"use strict";

const period = document.querySelector(".period");
const dropdown = document.querySelector(".dropdown");

period.addEventListener("click", () => {
  dropdown.style.visibility == "hidden"
    ? (dropdown.style.visibility = "visible")
    : (dropdown.style.visibility = "hidden");
});

const periodText = document.querySelector(".period__text");
dropdown.addEventListener("click", (e) => {
  periodText.innerText = e.target.innerText;

  // 나머지 클릭안된 li들 색 변경 처리
  Array.from(dropdown.children).forEach((element) => {
    element.classList.remove("active");
  });
  e.target.classList.add("active");
});
