"use strict";

// Задача 1
const fromInput = document.getElementById("from");
const spanElement = document.querySelector("span");

fromInput.addEventListener("input", () => {
    spanElement.textContent = fromInput.value;
});

// Задача 2
const messageBtn = document.querySelector(".messageBtn");
const messageDiv = document.querySelector(".message");

messageBtn.addEventListener("click", () => {
    messageDiv.classList.add("animate_animated", "animate_fadeInLeftBig");
    messageDiv.style.visibility = 'visible';
});

// Задача 3
const form = document.querySelector("form");
const firstInput = form.querySelector("input");
const secondInput = form.querySelector("select");

form.addEventListener("submit", (event) => {
    if (firstInput.value.trim() === "") {
        firstInput.classList.add("error");
        event.preventDefault();
    } else {
        firstInput.classList.remove("error");
    }

    if (secondInput.value === "") {
        secondInput.classList.add("error");
        event.preventDefault();
    } else {
        secondInput.classList.remove("error");
    }
});

firstInput.addEventListener("input", () => {
    if (firstInput.value.trim() === "") {
        firstInput.classList.add("error");
    } else {
        firstInput.classList.remove("error");
    }
});

secondInput.addEventListener("input", () => {
    if (secondInput.value === "") {
        secondInput.classList.add("error");
    } else {
        secondInput.classList.remove("error");
    }
});
