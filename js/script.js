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
function view(obj) {
  obj.classList.add("show");
  obj.classList.remove("hidden");
}
function unview(obj) {
  obj.classList.remove("show");
  obj.classList.add("hidden");
}
function prevmain() {
  view(footer);
  view(header);
  view(main);
  unview(preview);
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
  unview(open_page);
  open_page = test;
  view(open_page);
  view(header);
});

home_btn.addEventListener("click", () => {
  open_btn = home_btn;
  unview(open_page);
  open_page = main;
  view(open_page);
  view(header);
});
prof_btn.addEventListener("click", () => {
  open_btn = prof_btn;
  unview(open_page);
  open_page = prof;
  view(open_page);
  unview(header);
});
profile_btn.addEventListener("click", () => {
  name.innerHTML = profile_input.value;
  name;
});
