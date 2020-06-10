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
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let data = `{
  "title": "data",
  "sections": [
    {
      "title": "noun",
      "theme": "red",
      "groups": [
        {
          "title": "люди",
          "tests": [
            { "word": "Woman ", "tran": " женщина " },
            { "word": "Man ", "tran": " мужчина " },
            { "word": "Girl ", "tran": " девочка " },
            { "word": "Boy ", "tran": " мальчик" },
            { "word": "People ", "tran": " люди " },
            { "word": "Child ", "tran": " ребенок " },
            { "word": "Friend ", "tran": " друг " },
            { "word": "Twins ", "tran": " близнецы" },
            { "word": "Teenager ", "tran": " подросток " },
            { "word": "Guy ", "tran": " парень " }
          ]
        },
        {
          "title": "еда",
          "tests": [
            { "word": "Sausage ", "tran": " сосиска" },
            { "word": "Cheese ", "tran": " сыр" },
            { "word": "Bread ", "tran": " хлеб" },
            { "word": "Flour ", "tran": " мука" },
            { "word": "Soda ", "tran": " газировка " },
            { "word": "Tea ", "tran": " чай" },
            { "word": "Water ", "tran": " вода" },
            { "word": "Mustard ", "tran": " горчица" },
            { "word": "Rice ", "tran": " рис" },
            { "word": "Buckwheat ", "tran": " гречка" }
          ]
        },
        {
          "title": "животные",
          "tests": [
            { "word": "Bull ", "tran": " бык" },
            { "word": "Goat ", "tran": " коза" },
            { "word": "Cow ", "tran": " корова" },
            { "word": "Donkey ", "tran": " осел" },
            { "word": "Calf ", "tran": " теленок" },
            { "word": "Cat ", "tran": " кот" },
            { "word": "Dog ", "tran": " собака" },
            { "word": "Puppy ", "tran": " щенок" },
            { "word": "Rhino ", "tran": " носорог" },
            { "word": "Lizard ", "tran": " ящерица" }
          ]
        },
        {
          "title": "фрукты",
          "tests": [
            { "word": "Tangerine ", "tran": " мандарин" },
            { "word": "Orange ", "tran": " апельсин" },
            { "word": "Peach ", "tran": " персик" },
            { "word": "Plum ", "tran": " слива" },
            { "word": "Pear ", "tran": " груша" },
            { "word": "Fig ", "tran": " инжир" },
            { "word": "Apple ", "tran": " яблоко" },
            { "word": "Cranberry ", "tran": " клюква" },
            { "word": "Watermelon ", "tran": " арбуз" },
            { "word": "Grape ", "tran": " виноград" }
          ]
        },
        {
          "title": "овощи",
          "tests": [
            { "word": "Beans ", "tran": " фасоль;" },
            { "word": "Beet ", "tran": " свекла" },
            { "word": "Carrot ", "tran": " морковь" },
            { "word": "Cabbage ", "tran": " капуста" },
            { "word": "Cucumber ", "tran": " огурец" },
            { "word": "Peas ", "tran": " горох" },
            { "word": "Tomatoes ", "tran": " помидоры" },
            { "word": "Asparagus ", "tran": " спаржа" },
            { "word": "Potato ", "tran": " картофель" },
            { "word": "Spinach ", "tran": " шпинат" }
          ]
        },
        {
          "title": "природа",
          "tests": [
            { "word": "World ", "tran": " мир" },
            { "word": "Wind ", "tran": " ветер " },
            { "word": "West ", "tran": " запад " },
            { "word": "South ", "tran": "юг " },
            { "word": "East ", "tran": " восток" },
            { "word": "North ", "tran": " север " },
            { "word": "Tree ", "tran": "  дерево" },
            { "word": "Mountain ", "tran": "  гора" },
            { "word": "Forest ", "tran": "  лес" },
            { "word": "Grass ", "tran": "  трава" }
          ]
        },
        {
          "title": "учеба",
          "tests": [
            { "word": "Bag ", "tran": "   сумка" },
            { "word": "Diary ", "tran": "   дневник" },
            { "word": "Pen ", "tran": "   ручка" },
            { "word": "Pencil ", "tran": "   карандаш" },
            { "word": "Paper ", "tran": "   бумага" },
            { "word": "Book ", "tran": "   книга" },
            { "word": "Notebook ", "tran": "  тетрадь" },
            { "word": "Stationery ", "tran": "   канцтовары" },
            { "word": "Eraser ", "tran": "   ластик" },
            { "word": "Scissors ", "tran": "   ножницы" }
          ]
        },
        {
          "title": "тело",
          "tests": [
            { "word": "Head ", "tran": " голова" },
            { "word": "Body ", "tran": " тело" },
            { "word": "Hand ", "tran": " рука" },
            { "word": "Foot ", "tran": " нога" },
            { "word": "Finger ", "tran": " палец" },
            { "word": "Neck ", "tran": " шея" },
            { "word": "Teeth ", "tran": " зубы" },
            { "word": "Nail ", "tran": " ноготь" },
            { "word": "Tongue ", "tran": " язык" },
            { "word": "Knee ", "tran": " колено" }
          ]
        },
        {
          "title": "техника/мебель",
          "tests": [
            { "word": "Smartphone ", "tran": " смартфон" },
            { "word": "Tablet ", "tran": " планшет" },
            { "word": "Laptop ", "tran": " ноутбук" },
            { "word": "Fridge ", "tran": " холодильник" },
            { "word": "Socket ", "tran": " розетка" },
            { "word": "Cupboard ", "tran": " шкаф" },
            { "word": "Sofa", "tran": " диван" },
            { "word": "Armchair ", "tran": " кресло" },
            { "word": "Bed ", "tran": " кровать" },
            { "word": "Lightbulb ", "tran": " лампочка" }
          ]
        },
        {
          "title": "семья",
          "tests": [
            { "word": "Brother ", "tran": " брат " },
            { "word": "Sister ", "tran": " сестра " },
            { "word": "Grandmother ", "tran": " бабушка" },
            { "word": "Grandfather ", "tran": " дедушка" },
            { "word": "Uncle ", "tran": " дядя" },
            { "word": "Aunt ", "tran": " тетя" },
            { "word": "Mother ", "tran": " мама " },
            { "word": "Father ", "tran": " папа" },
            { "word": "Cousin ", "tran": " двоюродный" },
            { "word": "Family ", "tran": " семья " }
          ]
        }
      ]
    },
    {
      "title": "verb",
      "theme": "green",
      "groups": [
        {
          "title": "начало",
          "tests": [
            { "word": "Be ", "tran": "быть" },
            { "word": "Have ", "tran": "иметь" },
            { "word": "Do ", "tran": "делать" },
            { "word": "Say ", "tran": "говорить" },
            { "word": "Go ", "tran": "идти" },
            { "word": "Get ", "tran": "получать" },
            { "word": "Make ", "tran": "делать" },
            { "word": "Know ", "tran": "знать" },
            { "word": "Think ", "tran": "думать" },
            { "word": "Take ", "tran": "брать" }
          ]
        },
        {
          "title": "тест2",
          "tests": [
            { "word": "See ", "tran": "видеть" },
            { "word": "Come ", "tran": "приходить" },
            { "word": "Want ", "tran": "хотеть" },
            { "word": "Use ", "tran": "использовать" },
            { "word": "Find ", "tran": "находить" },
            { "word": "Give ", "tran": "давать" },
            { "word": "Tell ", "tran": "рассказывать" },
            { "word": "Work ", "tran": "работать" },
            { "word": "Call ", "tran": "звонить" },
            { "word": "Try ", "tran": "пытаться" }
          ]
        },
        {
          "title": "тест3",
          "tests": [
            { "word": "Ask ", "tran": "спрашивать" },
            { "word": "Need ", "tran": "нуждаться" },
            { "word": "Feel ", "tran": "чувствовать" },
            { "word": "Become ", "tran": "становиться" },
            { "word": "Leave ", "tran": "оставлять" },
            { "word": "Put ", "tran": "класть" },
            { "word": "Mean ", "tran": "значить" },
            { "word": "Keep ", "tran": "хранить" },
            { "word": "Let ", "tran": "позволять" },
            { "word": "Begin ", "tran": "начинать" }
          ]
        },
        {
          "title": "тест4",
          "tests": [
            { "word": "Seem ", "tran": "казаться" },
            { "word": "Help ", "tran": "помогать" },
            { "word": "Show", "tran": "показывать" },
            { "word": "Hear ", "tran": "слышать" },
            { "word": "Play ", "tran": "играть" },
            { "word": "Run ", "tran": "бежать" },
            { "word": "Move ", "tran": "двигаться" },
            { "word": "Live ", "tran": "жить" },
            { "word": "Believe ", "tran": "верить" },
            { "word": "Bring ", "tran": "приносить" }
          ]
        },
        {
          "title": "тест5 ",
          "tests": [
            { "word": "Happen ", "tran": "случаться" },
            { "word": "Write", "tran": "писать" },
            { "word": "Sit ", "tran": "сидеть" },
            { "word": "Stand ", "tran": "стоять" },
            { "word": "Lose ", "tran": "терять" },
            { "word": "Pay ", "tran": "платить" },
            { "word": "Meet ", "tran": "встречать" },
            { "word": "Include ", "tran": "включать" },
            { "word": "Continue ", "tran": "продолжать" },
            { "word": "Set ", "tran": "устанавливать" }
          ]
        },
        {
          "title": "тест6",
          "tests": [
            { "word": "Learn ", "tran": "учить" },
            { "word": "Change ", "tran": "менять" },
            { "word": "Lead ", "tran": "вести" },
            { "word": "Understand ", "tran": "понимать" },
            { "word": "Watch ", "tran": "смотреть" },
            { "word": "Follow ", "tran": "следовать" },
            { "word": "Stop ", "tran": "останавливать" },
            { "word": "Create ", "tran": "создавать" },
            { "word": "Speak ", "tran": "говорить" },
            { "word": "Read ", "tran": "читать" }
          ]
        },
        {
          "title": "тест7",
          "tests": [
            { "word": "Spend ", "tran": "тратить" },
            { "word": "Grow ", "tran": "расти" },
            { "word": "Open ", "tran": "открывать" },
            { "word": "Walk ", "tran": "идти" },
            { "word": "Win ", "tran": "побеждать" },
            { "word": "Teach ", "tran": "учить" },
            { "word": "Offer ", "tran": "предлагать" },
            { "word": "Remember ", "tran": "помнить" },
            { "word": "Consider ", "tran": "считать" },
            { "word": "Appear ", "tran": "появляться" }
          ]
        },
        {
          "title": "тест8",
          "tests": [
            { "word": "Buy ", "tran": "покупать" },
            { "word": "Serve ", "tran": "служить" },
            { "word": "Die ", "tran": "умирать" },
            { "word": "Send ", "tran": "посылать" },
            { "word": "Build ", "tran": "строить" },
            { "word": "Stay ", "tran": "оставаться" },
            { "word": "Fall ", "tran": "падать" },
            { "word": "Cut ", "tran": "резать" },
            { "word": "Reach ", "tran": "достигать" },
            { "word": "Kill ", "tran": "убивать" }
          ]
        },
        {
          "title": "тест9",
          "tests": [
            { "word": "Raise ", "tran": "поднимать" },
            { "word": "Pass ", "tran": "миновать" },
            { "word": "Sell ", "tran": "продавать" },
            { "word": "Decide ", "tran": "решать" },
            { "word": "Return ", "tran": "возвращаться" },
            { "word": "Explain ", "tran": "объяснять" },
            { "word": "Hope ", "tran": "надеяться" },
            { "word": "Develop ", "tran": "развивать" },
            { "word": "Carry ", "tran": "нести" },
            { "word": "Break", "tran": "ломать" }
          ]
        },
        {
          "title": "конец",
          "tests": [
            { "word": "Receive ", "tran": "получать" },
            { "word": "Agree ", "tran": "соглашаться" },
            { "word": "Support ", "tran": "поддерживать" },
            { "word": "Hit", "tran": "ударять" },
            { "word": "Produce ", "tran": "производить" },
            { "word": "Eat ", "tran": "есть" },
            { "word": "Cover ", "tran": "покрывать" },
            { "word": "Catch ", "tran": "ловить" },
            { "word": "Draw ", "tran": "рисовать" },
            { "word": "Choose ", "tran": "выбирать" }
          ]
        }
      ]
    },
    {
      "title": "adj",
      "theme": "blue",
      "groups": [
        {
          "title": "цвет",
          "tests": [
            { "word": "Blue ", "tran": "синий" },
            { "word": "Green ", "tran": "зелёный" },
            { "word": "Red ", "tran": "красный" },
            { "word": "Yellow ", "tran": "жёлтый" },
            { "word": "Orange ", "tran": "оранжевый" },
            { "word": "Purple ", "tran": "фиолетовый" },
            { "word": "White ", "tran": "белый" },
            { "word": "Black ", "tran": "черный" },
            { "word": "Dark ", "tran": "тёмный" },
            { "word": "Light ", "tran": "светлый" }
          ]
        },
        {
          "title": "вкус",
          "tests": [
            { "word": "Raw ", "tran": "сырая" },
            { "word": "Tasteless ", "tran": "безвкусная" },
            { "word": "Salty ", "tran": "соленая" },
            { "word": "Bitter ", "tran": "горькая" },
            { "word": "Sour ", "tran": "кислая" },
            { "word": "Rancid ", "tran": "протухшая" },
            { "word": "Spicy ", "tran": "острая" },
            { "word": "Nutritious ", "tran": "сытный" },
            { "word": "Palatable ", "tran": "вкусный" },
            { "word": "Appetizing ", "tran": "аппетитный" }
          ]
        },
        {
          "title": "мера",
          "tests": [
            { "word": "Heavy ", "tran": "тяжелый " },
            { "word": "Light ", "tran": "лёгкий" },
            { "word": "High ", "tran": "высокий " },
            { "word": "Low ", "tran": "низкий" },
            { "word": "Long ", "tran": "длинный" },
            { "word": "Short ", "tran": "короткий" },
            { "word": "Easy ", "tran": "лёгкий" },
            { "word": "Difficult ", "tran": "сложный" },
            { "word": "Big ", "tran": "большой" },
            { "word": "Little ", "tran": "маленький" }
          ]
        },
        {
          "title": "качество",
          "tests": [
            { "word": "Attentive ", "tran": " внимательный" },
            { "word": "Brave ", "tran": " смелый" },
            { "word": "Careful ", "tran": " осторожный" },
            { "word": "Cheeky ", "tran": " нахальный" },
            { "word": "Discreet ", "tran": " сдержанный" },
            { "word": "Worried ", "tran": " тревожный" },
            { "word": "Tidy ", "tran": " опрятный" },
            { "word": "Smart ", "tran": " умный" },
            { "word": "Stupid ", "tran": "глупый" },
            { "word": "Mean ", "tran": " скупой" }
          ]
        },
        {
          "title": "статус",
          "tests": [
            { "word": "Open ", "tran": "открытый " },
            { "word": "Close ", "tran": "закрытый" },
            { "word": "Poor ", "tran": "бедный" },
            { "word": "Rich ", "tran": "богатый" },
            { "word": "Available ", "tran": "доступный" },
            { "word": "Free ", "tran": "свободный" },
            { "word": "Fresh ", "tran": "свежий" },
            { "word": "Great ", "tran": "великий" },
            { "word": "Busy ", "tran": "занятой " },
            { "word": "Ready ", "tran": "готовый" }
          ]
        },
        {
          "title": "cостояние",
          "tests": [
            { "word": "Sick ", "tran": "больной" },
            { "word": "Healthy ", "tran": "здоровый" },
            { "word": "Sad ", "tran": "печальный" },
            { "word": "Cheerful ", "tran": "жизнерадостный" },
            { "word": "Glad ", "tran": "довольный" },
            { "word": "Afraid ", "tran": "испуганный" },
            { "word": "Unhappy ", "tran": "несчастливый" },
            { "word": "Happy ", "tran": "счастливый" },
            { "word": "Miserable ", "tran": "унылый" },
            { "word": "Excited ", "tran": " возбужденный" }
          ]
        },
        {
          "title": "звук",
          "tests": [
            { "word": "Loud ", "tran": " громкий" },
            { "word": "Quiet ", "tran": " тихий" },
            { "word": "Noisy ", "tran": " шумный" },
            { "word": "Musical ", "tran": " музыкальный" },
            { "word": "Auditory ", "tran": " слуховой" },
            { "word": "Acoustic ", "tran": " акустический" },
            { "word": "Sonic ", "tran": " звуковой" },
            { "word": "Phonal ", "tran": " голосовой " },
            { "word": "Silent ", "tran": "молчаливый" },
            { "word": "Cultural ", "tran": "культурный" }
          ]
        },
        {
          "title": "вещество",
          "tests": [
            { "word": "Glass ", "tran": " стеклянный " },
            { "word": "Wooden ", "tran": " деревянный" },
            { "word": "Ferreous ", "tran": " железный" },
            { "word": "Tin ", "tran": " оловянный" },
            { "word": "Woolen ", "tran": " шерстяной " },
            { "word": "Tissular ", "tran": " тканевый" },
            { "word": "Solid ", "tran": " твердый " },
            { "word": "Soft ", "tran": " мягкий " },
            { "word": "Gentle ", "tran": " нежный" },
            { "word": "Hard ", "tran": " жесткий " }
          ]
        },
        {
          "title": "внешность",
          "tests": [
            { "word": "Bald ", "tran": "лысый" },
            { "word": "Skinny ", "tran": "худой" },
            { "word": "Curly ", "tran": "кудрявый" },
            { "word": "Beautiful ", "tran": "красивый" },
            { "word": "Pleasant ", "tran": "приятный" },
            { "word": "Ginger ", "tran": "рыжий" },
            { "word": "Attractive ", "tran": "привлекательный" },
            { "word": "Athletic ", "tran": "спортивный" },
            { "word": "Handsome ", "tran": "благородный" },
            { "word": "Thick ", "tran": " толстый" }
          ]
        },
        {
          "title": "возраст",
          "tests": [
            { "word": "Adult ", "tran": "взрослый" },
            { "word": "Young ", "tran": "молодой" },
            { "word": "Wise ", "tran": "мудрый" },
            { "word": "Ugly ", "tran": "уродливый" },
            { "word": "Stubborn ", "tran": "упрямый" },
            { "word": "Careless ", "tran": "неосторожный" },
            { "word": "Elderly ", "tran": " пожилой" },
            { "word": "Naughty ", "tran": " непослушный" },
            { "word": "Smelly ", "tran": "вонючий" },
            { "word": "Smooth ", "tran": "гладкий" }
          ]
        }
      ]
    }
  ]
}
`;
async function getdata(url) {
  //const result = await fetch(url);
  data = await result.json();
}

getdata("data")
  .then((result) => {
    console.log("yay");
    console.log(data);

    let previewEndList = document.querySelectorAll(".preview-end");
    let previewNextList = document.querySelectorAll(".preview-next");
    let preview = document.querySelector(".preview");

    let header = document.querySelector(".header");
    //ссылки страниц
    let home_page = document.querySelector(".main");
    let test_page = document.querySelector(".test");
    let prof_page = document.querySelector(".profile");
    //ссылки на секций и из блоки на главной
    let sectionTitles = document.querySelector(".main-section-titles");
    let sectionList = document.querySelectorAll(".main-section");

    let testSectionList = document.querySelectorAll(".test-section");

    //создания контента и массивов ссылок
    let sectionTitleList = [];
    let groupList = [];

    let sectionActive = 0;
    let groupActive = 0;
    let testActive = 0;

    let testGroupList = [];
    let testList = [];
    let wrongList = [];
    let correctList = [];
    let transList = [];
    let dotList = [];

    //generated and querry

    for (let i = 0; i < data.sections.length; i++) {
      var sectiontitle = document.createElement("li");
      sectiontitle.classList.add("main-section-title");
      sectiontitle.classList.add(sections[i]);

      var p = document.createElement("p");
      sectiontitle.appendChild(p);
      p.innerHTML = data.sections[i].title;
      sectionTitles.appendChild(sectiontitle);
      sectionTitleList.push(sectiontitle);
      groupList.push([]);

      testGroupList.push([]);
      testList.push([]);
      wrongList.push([]);
      correctList.push([]);
      transList.push([]);
      dotList.push([]);

      for (let j = 0; j < data.sections[i].groups.length; j++) {
        var grouptitle = document.createElement("li");
        grouptitle.classList.add("main-group");
        grouptitle.innerHTML = data.sections[i].groups[j].title;
        sectionList[i].appendChild(grouptitle);
        groupList[i].push(grouptitle);

        var testGroup = document.createElement("li");
        testGroup.classList.add("test-group");
        testGroup.classList.add("hidden");
        testGroupList[i][j] = testGroup;

        var testDots = document.createElement("ul");
        testDots.classList.add("test-dots");

        testList[i].push([]);
        wrongList[i].push([]);
        correctList[i].push([]);
        dotList[i].push([]);
        transList[i].push([]);

        for (let l = 0; l < data.sections[i].groups[j].tests.length; l++) {
          var testContent = document.createElement("div");
          testContent.classList.add("test-content");
          testContent.classList.add("hidden");
          testList[i][j][l] = testContent;
          var testStatus = document.createElement("div");
          testStatus.classList.add("test-status");

          var testWrong = document.createElement("div");
          testWrong.classList.add("test-wrong");
          testWrong.classList.add("hidden-fast");
          testWrong.innerHTML = "Неверно";
          wrongList[i][j][l] = testWrong;

          var testCorrect = document.createElement("div");
          testCorrect.classList.add("test-correct");
          testCorrect.classList.add("hidden-fast");
          testCorrect.innerHTML = "Верно";
          correctList[i][j][l] = testCorrect;

          testStatus.appendChild(testWrong);
          testStatus.appendChild(testCorrect);
          testContent.appendChild(testStatus);

          var testWord = document.createElement("div");
          testWord.classList.add("test-word");
          testWord.innerHTML = data.sections[i].groups[j].tests[l].word;
          testContent.appendChild(testWord);

          var testTranList = document.createElement("ul");
          testTranList.classList.add("test-tran-list");

          transList[i][j].push([]);

          for (
            let y = 0;
            y < data.sections[i].groups[j].tests[l].answers.length;
            y++
          ) {
            var testTran = document.createElement("ul");
            testTran.classList.add("test-tran");
            testTran.innerHTML = data.sections[i].groups[j].tests[l].answers[y];
            testTranList.appendChild(testTran);
            transList[i][j][l][y] = testTran;
          }

          testContent.appendChild(testTranList);
          var testDot = document.createElement("li");
          testDot.classList.add("test-dot");
          testDot.innerHTML = `<button></button>`;
          testGroup.appendChild(testContent);
          testDots.appendChild(testDot);
          dotList[i][j][l] = testDot;
        }
        testGroup.appendChild(testDots);

        testSectionList[i].appendChild(testGroup);
      }
    }

    //появление исчезновение элементов
    function view(obj) {
      obj.classList.add("show");
      obj.classList.remove("hidden");
      if (obj.classList.contains("hidden-fast")) {
        obj.classList.remove("hidden-fast");
      }
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
    function closesections() {
      for (let i = 0; i < sectionList.length; i++) {
        unview(sectionList[i]);
      }
    }
    function closetestspages(sectionActive, groupActive) {
      for (let i = 1; i < testList[sectionActive][groupActive].length; i++) {
        unview(testList[sectionActive][groupActive][i]);
        dotList[sectionActive][groupActive][i].classList.remove("dot-active");
      }
    }

    //footer btns
    let footer = document.querySelector(".footer");

    let home_btn = document.getElementById("home");
    let test_btn = document.getElementById("test");
    let prof_btn = document.getElementById("profile");
    let open_btn = home_btn;
    let open_page = home_page;

    let profile_btn = document.querySelector(".profile-btn");
    let profile_input = document.querySelector(".profile-input");
    let name = document.querySelector(".name");

    //open close pages
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
      view(testList[sectionActive][groupActive][testActive]);
      dotList[sectionActive][groupActive][0].classList.add("dot-active");
    }
    function closeTestpage() {
      unview(testSectionList[sectionActive]);
      unview(testGroupList[sectionActive][groupActive]);
      unview(testList[sectionActive][groupActive][testActive]);
      dotList[sectionActive][groupActive][testActive].classList.remove(
        "dot-active"
      );
      testActive = 0;
      unview(wrongList[sectionActive][groupActive][testActive]);
      unview(correctList[sectionActive][groupActive][testActive]);
    }
    function openHomepage() {
      unviewFast(open_btn.children[0]);
      viewFast(open_btn.children[1]);
      open_btn = home_btn;
      viewFast(open_btn.children[0]);
      unviewFast(open_btn.children[1]);
      unview(open_page);
      open_page = home_page;
      view(open_page);
      view(sectionTitles);
      view(header);
      closesections();
    }
    function openPreviewpage() {
      unviewFast(open_btn.children[0]);
      viewFast(open_btn.children[1]);
      open_btn = prof_btn;
      viewFast(open_btn.children[0]);
      unviewFast(open_btn.children[1]);
      unview(open_page);

      // closeTestpage();
      open_page = prof_page;
      view(open_page);
      unview(header);
    }

    test_btn.addEventListener("click", () => {
      openTestpage();
    });

    home_btn.addEventListener("click", () => {
      openHomepage();

      closeTestpage();
    });
    prof_btn.addEventListener("click", () => {
      openPreviewpage();
      closeTestpage();
    });

    //preview
    previewNextList[previewEndList.length - 1].addEventListener("click", () => {
      prevmain();
    });
    for (let previewend of previewEndList) {
      previewend.addEventListener("click", () => {
        prevmain();
      });
    }
    //profile
    profile_input.addEventListener("click", () => {
      profile_input.classList.add("profile-input--active");
    });
    profile_btn.addEventListener("click", () => {
      name.innerHTML = profile_input.value;
      profile_input.classList.remove("profile-input--active");
    });

    //eventlisteners
    for (let i = 0; i < sectionTitleList.length; i++) {
      sectionTitleList[i].addEventListener("click", () => {
        unview(testSectionList[sectionActive]);
        sectionActive = i;
        unview(sectionTitles);

        view(sectionList[i]);
      });
      for (let j = 0; j < groupList[i].length; j++) {
        groupList[i][j].addEventListener("click", () => {
          //unview(testGroupList[sectionActive][groupActive]);
          closetestspages(sectionActive, groupActive);
          groupActive = j;
          testActive = 0;
          openTestpage();
        });
        for (let l = 0; l < testList[i][j].length; l++) {
          for (let y = 0; y < transList[i][j][l].length; y++) {
            transList[i][j][l][y].addEventListener("click", () => {
              if (y == data.sections[i].groups[j].tests[l].right) {
                unviewFast(wrongList[sectionActive][groupActive][testActive]);
                view(correctList[sectionActive][groupActive][testActive]);

                setTimeout(function () {
                  if (
                    testActive <
                    testList[sectionActive][groupActive].length - 1
                  ) {
                    unview(testList[sectionActive][groupActive][testActive]);
                    dotList[sectionActive][groupActive][
                      testActive
                    ].classList.remove("dot-active");
                    unview(correctList[sectionActive][groupActive][testActive]);
                    testActive++;
                    dotList[sectionActive][groupActive][
                      testActive
                    ].classList.add("dot-active");
                    view(testList[sectionActive][groupActive][testActive]);
                  } else {
                    openHomepage();
                    closeTestpage();
                  }
                }, 500);
              } else {
                view(wrongList[sectionActive][groupActive][testActive]);
              }
            });
          }
        }
      }
    }
  })
  .catch((err) => {
    console.log("error!");
    console.error(err);
  });
