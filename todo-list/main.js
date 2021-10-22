"use strict";

const inputs = document.querySelectorAll("input");
const plusBtns = document.querySelectorAll(".plusBtn");
const items = document.querySelectorAll(".todo__items");
const nav = document.querySelector("nav");
const navBtn = document.querySelectorAll("nav > button");
const todos = document.querySelectorAll(".todo");

nav.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  switch (e.target.className) {
    case "nav__today":
      todos[0].classList.add("open");
      todos[1].classList.remove("open");
      break;
    case "nav__tomorrow":
      todos[0].classList.remove("open");
      todos[1].classList.add("open");
      break;
    case "nav__together":
      todos[0].classList.add("open");
      todos[1].classList.add("open");
      break;
  }
});

plusBtns.forEach((btn, index) =>
  btn.addEventListener("click", () => onAdd(index))
);

inputs.forEach((input, index) =>
  input.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      onAdd(index);
    }
  })
);

function createItem(text, index) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = text;
  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-trash-alt trashBtn");
  li.appendChild(span);
  li.appendChild(icon);

  icon.addEventListener("click", () => {
    items[index].removeChild(li);
  });
  return li;
}

function onAdd(index) {
  const text = inputs[index].value;
  if (!text) return;
  const item = createItem(text, index);
  items[index].appendChild(item);
  inputs[index].value = "";
  inputs[index].focus();
}
