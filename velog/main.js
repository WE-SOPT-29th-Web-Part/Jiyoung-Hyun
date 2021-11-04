"use strict";

// dropdown
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

// modal
const cardContainer = document.querySelector(".cards");
const card = document.querySelectorAll(".card");

cardContainer.addEventListener("click", (e) => {
  let el = e.target;

  while (el && !el.classList.contains("card")) {
    el = el.parentNode;
  }
  if (el.classList.contains("card__modal")) return;
  console.log(el);
  const modalBackground = document.createElement("div");
  const modalCard = document.createElement("article");
  modalBackground.appendChild(modalCard);
  modalBackground.setAttribute("class", "card__modal-bg");
  cardContainer.appendChild(modalBackground);
  modalCard.innerHTML = el.innerHTML;
  modalCard.setAttribute("class", "card card__modal");

  const modalCloseBtn = document.createElement("button");
  modalCloseBtn.innerText = "X";
  modalCloseBtn.setAttribute("class", "card__modal-close-btn");
  modalCard.appendChild(modalCloseBtn);
  document.body.style.overflow = "hidden";

  modalCloseBtn.addEventListener("click", () => {
    modalBackground.remove();
    document.body.style.overflow = "visible";
  });
});
