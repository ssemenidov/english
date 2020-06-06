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
function testgroup(title, tests) {
  (this.title = title), (this.tests = tests);
}
function testsection(title, groups) {
  (this.title = title), (this.groups = groups);
}
let sections = ["noun", "verb", "adj"];
let data = [
  new testsection("сущ.", [
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
  ]),
  new testsection("глаг", [
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
  ]),
  new testsection("прил.", [
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
    new testgroup("title", [new test(), new test()]),
  ]),
];
let previewEndList = document.querySelectorAll(".preview-end");
let previewNextList = document.querySelectorAll(".preview-next");
let preview = document.querySelector(".preview");

let header = document.querySelector(".header");

let home_page = document.querySelector(".main");
let test_page = document.querySelector(".test");
let prof_page = document.querySelector(".profile");

let sectionTitles = document.querySelector(".main-section-titles");

let sectionList = document.querySelectorAll(".main-section");

for (let i = 0; i < data.length; i++) {
  var sectiontitle = document.createElement("li");
  sectiontitle.classList.add("main-section-title");
  sectiontitle.classList.add(sections[i]);

  var p = document.createElement("p");
  sectiontitle.appendChild(p);
  p.innerHTML = data[i].title;
  sectionTitles.appendChild(sectiontitle);
  for (let j = 0; j < data[i].groups.length; j++) {
    var grouptitle = document.createElement("li");
    grouptitle.classList.add("main-group");
    grouptitle.innerHTML = data[i].groups[j].title;
    sectionList[i].appendChild(grouptitle);
  }
}
let sectionTitleList = document.querySelectorAll(".main-section-title");
let groupList = [];
// let groupList = document.querySelectorAll(".main-group");
for (let i = 0; i < sectionList.length; i++) {
  groupList.push(sectionList[i].querySelectorAll(".main-group"));
}
let sectionActive = 0;
let groupActive = 0;
let footer = document.querySelector(".footer");

let testSectionList = document.querySelectorAll(".test-section");
let testGroupList = [];
let testList = [];
for (let i = 0; i < testSectionList.length; i++) {
  testGroupList.push(testSectionList[i].querySelectorAll(".test-group"));
  testList.push([]);
  for (let j = 0; j < testGroupList[i].length; j++) {
    testList[i].push(testSectionList[i].querySelectorAll(".test-content"));
  }
}
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
function viewFast(obj) {
  obj.classList.add("show-fast");
  obj.classList.remove("hidden-fast");
}
function unview(obj) {
  obj.classList.add("hidden");
  obj.classList.remove("show");
}
function unviewFast(obj) {
  obj.classList.add("hidden-fast");
  obj.classList.remove("show-fast");
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
function openTestpage() {
  unviewFast(open_btn.children[0]);
  viewFast(open_btn.children[1]);
  open_btn = test_btn;
  viewFast(open_btn.children[0]);
  unviewFast(open_btn.children[1]);
  unview(open_page);
  open_page = test_page;
  view(open_page);
  view(header);
  view(testSectionList[sectionActive]);
  view(testGroupList[sectionActive][groupActive]);
}
test_btn.addEventListener("click", () => {
  openTestpage();
});

home_btn.addEventListener("click", () => {
  unviewFast(open_btn.children[0]);
  viewFast(open_btn.children[1]);
  open_btn = home_btn;
  viewFast(open_btn.children[0]);
  unviewFast(open_btn.children[1]);
  unview(open_page);
  closetests();
  open_page = home_page;
  view(open_page);
  view(sectionTitles);
  view(header);
});
prof_btn.addEventListener("click", () => {
  unviewFast(open_btn.children[0]);
  viewFast(open_btn.children[1]);
  open_btn = prof_btn;
  viewFast(open_btn.children[0]);
  unviewFast(open_btn.children[1]);
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
      groupActive = i;
      openTestpage();
    });
  }
}
