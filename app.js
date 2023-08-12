"use strict";
const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const closeBar = document.querySelector("#close");
console.log(closeBar);
if (bar) {
    bar.addEventListener("click", () => {
        nav === null || nav === void 0 ? void 0 : nav.classList.add("active");
    });
}
if (closeBar) {
    closeBar.addEventListener("click", () => {
        nav === null || nav === void 0 ? void 0 : nav.classList.remove("active");
    });
}
