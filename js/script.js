$(document).ready(function () {
  $(".preview-slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: ".preview-next",
    prevArrow: "none",
    swipeToSlide: true,

    dotsClass: "preview-dots",
  });
});

let previewEndList = document.querySelectorAll(".preview-end");
let previewNextList = document.querySelectorAll(".preview-next");
let preview = document.querySelector(".preview");
let header = document.querySelector(".header");
let main = document.querySelector(".main");
let test = document.querySelector(".test");
let prof = document.querySelector(".profile");
let footer = document.querySelector(".footer");
let home_btn = document.getElementById("home");
let test_btn = document.getElementById("test");
let prof_btn = document.getElementById("profile");
let open_btn = home_btn;
let open_page = main;
let profile_btn = document.querySelector(".profile-btn");
let profile_input = document.querySelector(".profile-input");
let name = document.querySelector(".name");
function prevmain() {
  footer.classList.add("show");
  footer.classList.remove("hidden");
  header.classList.add("show");
  header.classList.remove("hidden");
  main.classList.add("show");
  main.classList.remove("hidden");
  preview.classList.remove("show");
  preview.classList.add("hidden");
}
previewNextList[previewEndList.length - 1].addEventListener("click", () => {
  prevmain();
});
for (let previewend of previewEndList) {
  previewend.addEventListener("click", () => {
    prevmain();
  });
}
test_btn.addEventListener("click", () => {
  open_btn = test_btn;
  open_page.classList.remove("show");
  open_page.classList.add("hidden");
  open_page = test;
  open_page.classList.add("show");
  open_page.classList.remove("hidden");
  header.classList.add("show");
  header.classList.remove("hidden");
});

home_btn.addEventListener("click", () => {
  open_btn = home_btn;
  open_page.classList.remove("show");
  open_page.classList.add("hidden");
  open_page = main;
  open_page.classList.add("show");
  open_page.classList.remove("hidden");
  header.classList.add("show");
  header.classList.remove("hidden");
});
prof_btn.addEventListener("click", () => {
  open_btn = prof_btn;
  open_page.classList.remove("show");
  open_page.classList.add("hidden");
  open_page = prof;
  open_page.classList.add("show");
  open_page.classList.remove("hidden");
  header.classList.remove("show");
  header.classList.add("hidden");
});
profile_btn.addEventListener("click", () => {
  name.innerHTML = profile_input.value;
  name;
});
