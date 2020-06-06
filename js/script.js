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

let sectionTitles = document.querySelector(".main-section-titles");
let sectionTitleList = document.querySelectorAll(".main-section-title");
let sectionList = document.querySelectorAll(".main-section");
let groupList = [];
// let groupList = document.querySelectorAll(".main-group");
for (let i = 0; i < sectionList.length; i++) {
  groupList.push(sectionList[i].querySelectorAll(".main-group"));
}
let sectionActive = 0;
let groupActive = 0;
let footer = document.querySelector(".footer");

let testSectionList = document.querySelectorAll(".test-section");

let home_btn = document.getElementById("home");
let test_btn = document.getElementById("test");
let prof_btn = document.getElementById("profile");
let open_btn = home_btn;
let open_page = home_page;

let profile_btn = document.querySelector(".profile-btn");
let profile_input = document.querySelector(".profile-input");
let name = document.querySelector(".name");

function view(obj) {
  obj.classList.add("show");
  obj.classList.remove("hidden");
}
function unview(obj) {
  obj.classList.add("hidden");
  obj.classList.remove("show");
}
function prevmain() {
  view(footer);
  view(header);
  view(home_page);
  unview(preview);
}
function closetests() {
  for (let i = 0; i < sectionList.length; i++) {
    unview(sectionList[i]);
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

// function openPage(page){

// }
// function closePage(page){
//   if (page==test_page){
//     unview(testSectionList[sectionActive]);
//     unview(page);
//   }
//   else if(page==home_page){
//     unview(page);
//     view(sectionTitles);
//   view(header);

//   }

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
  view(sectionTitles);
  view(header);
});
prof_btn.addEventListener("click", () => {
  open_btn = prof_btn;
  unview(open_page);

  open_page = prof_page;
  view(open_page);
  unview(header);
});

profile_input.addEventListener("click", () => {
  profile_input.classList.add("profile-input--active");
});
profile_btn.addEventListener("click", () => {
  name.innerHTML = profile_input.value;
  profile_input.classList.remove("profile-input--active");
});

for (let i = 0; i < sectionTitleList.length; i++) {
  sectionTitleList[i].addEventListener("click", () => {
    unview(testSectionList[sectionActive]);
    sectionActive = i;
    unview(sectionTitles);
    view(sectionList[i]);
    testOpen(sectionActive);
  });
}
function testOpen(sectionActive) {
  for (let i = 0; i < groupList[sectionActive].length; i++) {
    groupList[sectionActive][i].addEventListener("click", () => {
      unview(home_page);
      open_page = test_page;
      groupActive = i;
      view(test_page);

      view(testSectionList[sectionActive]);
    });
  }
}
