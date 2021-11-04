"use strict";

const tagInput = document.querySelector(".input");

tagInput.addEventListener("keypress", addTag);

let tagArr = [];

function addTag(e) {
  if (e.key === "Enter") {
    if (tagArr.includes(e.target.value)) {
      e.target.value = "";
      return;
    }
    const span = document.createElement("span");
    span.setAttribute("class", "tag");
    span.innerText = e.target.value;
    document.body.insertBefore(span, tagInput);

    tagArr.push(e.target.value);
    e.target.value = "";

    span.addEventListener("click", () => {
      span.remove();
    });
  }
}
