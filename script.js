"use strict";

const ratingEls = document.querySelectorAll(".rating");
const revBtn = document.getElementById("btn");
const containerEl = document.getElementById("container");

let smileName = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();
    ratingEl.classList.add("active");
    smileName = event.target.innerText || event.target.parentNode.innerText;
    console.log(smileName);
  });
});

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}

revBtn.addEventListener("click", (e) => {
  if (smileName !== "") {
    console.log(smileName);
    containerEl.innerHTML = `
    <strong>Thank you!</strong>
    <br>
    <br>
    <strong>Feedback: ${smileName}</strong>
    <br>
    <p>We'll use your feedback to improve our customer support.</p>`;
  }
});
