"use strict";

const todosItems = document.querySelectorAll(".todos__items");
const todosInput = document.querySelectorAll(".todos__input");
const addBtn = document.querySelectorAll(".todos__btn");

// 리스트 추가
addBtn.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    onAdd(index);
  })
);

// 엔터 눌렀을 때 추가
todosInput.forEach((input, index) =>
  input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      onAdd(index);
    }
  })
);
const onAdd = (index) => {
  // 아무것도 안치고 그냥 엔터 눌렀을 때 리스트 올라가는 것 방지
  if (!todosInput[index].value) return;
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  // class 이름 설정하는 과정
  li.setAttribute("class", "todos__item");
  span.setAttribute("class", "todos__name");
  deleteBtn.setAttribute("class", "todos__delete");

  deleteBtn.setAttribute("src", "/assets/icons/delete_icon.svg");
  span.innerText = todosInput[index].value;

  li.appendChild(span);
  li.appendChild(deleteBtn);
  todosItems[index].appendChild(li);

  todosInput[index].value = "";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
};

const nav = document.querySelector(".options");
const todos = document.querySelectorAll(".todos > section");
console.log(todos);
nav.addEventListener("click", (event) => {
  if (event.target.className.includes("options__today")) {
    todos[0].classList.add("open");
    todos[1].classList.remove("open");
  } else if (event.target.className.includes("options__tomorrow")) {
    todos[0].classList.remove("open");
    todos[1].classList.add("open");
  } else if (event.target.className.includes("options__both")) {
    todos[0].classList.add("open");
    todos[1].classList.add("open");
  }
});
