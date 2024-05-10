"use strict";

const btnMenu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn-close");
const navLinks = document.querySelectorAll(".navlink");

btnMenu.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  document.querySelector("body").style.overflowY = "hidden";
});

btnClose.addEventListener("click", () => {
  overlay.classList.add("hidden");
  document.querySelector("body").style.overflowY = "scroll";
});

navLinks.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    overlay.classList.add("hidden");
    document.querySelector("body").style.overflowY = "scroll";
  });
});
