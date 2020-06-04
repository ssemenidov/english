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
let footer = document.querySelector(".footer");

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
