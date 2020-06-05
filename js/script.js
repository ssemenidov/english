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
function test() {
  (this.right = 0),
    (this.answers = ["answer", "answer", "answer"]),
    (this.word = "Word");
}
function testgroup() {
  (this.title = ""), (this.tests = []);
}
let testtems = [
  [
    [new testgroup("title", [new test(), new test()])],
    [new testgroup("title", [new test(), new test()])],
    [new testgroup("title", [new test(), new test()])],
    [new testgroup("title", [new test(), new test()])],
    [new testgroup("title", [new test(), new test()])],
    [new testgroup("title", [new test(), new test()])],
  ],
  [
    [new testgroup("title", [new test(), new test()])],
    [new testgroup("title", [new test(), new test()])],
    [new testgroup("title", [new test(), new test()])],
    [new testgroup("title", [new test(), new test()])],
    [new testgroup("title", [new test(), new test()])],
    [new testgroup("title", [new test(), new test()])],
  ],
  [
    [new testgroup("title", [new test(), new test()])],
    [new testgroup("title", [new test(), new test()])],
    [new testgroup("title", [new test(), new test()])],
    [new testgroup("title", [new test(), new test()])],
    [new testgroup("title", [new test(), new test()])],
    [new testgroup("title", [new test(), new test()])],
  ],
];
let previewEndList = document.querySelectorAll(".preview-end");
let previewNextList = document.querySelectorAll(".preview-next");
let preview = document.querySelector(".preview");

let header = document.querySelector(".header");

let home_page = document.querySelector(".main");
let test_page = document.querySelector(".test");
let prof_page = document.querySelector(".profile");

let topics = document.querySelector(".main-topics");

let footer = document.querySelector(".footer");

let home_btn = document.getElementById("home");
let test_btn = document.getElementById("test");
let prof_btn = document.getElementById("profile");
let open_btn = home_btn;
let open_page = home_page;

let profile_btn = document.querySelector(".profile-btn");
let profile_input = document.querySelector(".profile-input");
let name = document.querySelector(".name");

let topicList = document.querySelectorAll(".main-topic");
let testsList = document.querySelectorAll(".main-tests");
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
  view(home_page);
  unview(preview);
}
function closetests() {
  for (let i = 0; i < testsList.length; i++) {
    unview(testsList[i]);
  }
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
  open_page = test_page;
  view(open_page);
  view(header);
});

home_btn.addEventListener("click", () => {
  open_btn = home_btn;
  unview(open_page);
  closetests();
  unview;
  open_page = home_page;
  view(open_page);
  view(topics);
  view(header);
});
prof_btn.addEventListener("click", () => {
  open_btn = prof_btn;
  unview(open_page);
  open_page = prof_page;
  view(open_page);
  unview(header);
});
profile_btn.addEventListener("click", () => {
  name.innerHTML = profile_input.value;
  name;
});
for (let i = 0; i < topicList.length; i++) {
  topicList[i].addEventListener("click", () => {
    unview(topics);
    view(testsList[i]);
  });
}
