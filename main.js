document.write('<script src="data.js"></script>');

const $text = document.querySelector(".smallTitle");
const $meun = document.querySelector(".meun");
const looking = document.querySelector(".looking");

// 글자 모음
const letters = [
  "위의 글을 따르면 사람들은 ...",
  "아침 식사로 어떤 메뉴를 고를지 이렇게 간단한 결정을 하는 데도 에너지가 들고 사람은 피로를 느낀다고 합니다.",
  "그래서! 더 큰 일을 할 당신을 위해 제가 식사 메뉴를 골라 드리겠습니다.",
];

let menu = [];

let weather;
let tempText;
let weatherText;

let now = new Date();
let today = now.getDay();
let hours = now.getHours();
let day;
let time;
let temp;

let menuResult;
const APIKEY = "d9d381ddd3817a9f1a138fe6ba049870";
navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        temp = parseInt(data.main.temp);
        weather = data.weather[0].main;
      });
  },
  () => console.log("no data")
);

function menuRandom(whatMenu) {
  const menuLength = whatMenu.length;
  const randomIndex = Math.floor(Math.random() * menuLength);

  return randomIndex;
}

function howManyMenu(h, d, w) {
  for (i = 0; i < h; i++) {
    aboutHours();
  }
  for (i = 0; i < d; i++) {
    makeDay();
  }
  for (i = 0; i < w; i++) {
    aboutWeather();
  }
}

function aboutHours() {
  if (0 <= hours && hours < 5) {
    time = "야식";
    menu.push(lateNightMenu[menuRandom(lateNightMenu)]);
  } else if (5 <= hours && hours < 11) {
    time = "아침";
    menu.push(breakfastMenu[menuRandom(breakfastMenu)]);
  } else if (11 <= hours && hours < 15) {
    time = "점심";
    menu.push(lunchMenu[menuRandom(lunchMenu)]);
  } else if (15 <= hours && hours < 18) {
    time = "늦은 점심 || 이른저녁";
    menu.push(lunchMenu[menuRandom(lunchMenu)]);
  } else if (18 <= hours && hours < 21) {
    time = "저녁";
    menu.push(dinnerMenu[menuRandom(dinnerMenu)]);
  } else if (21 <= hours && hours <= 24) {
    time = "야식";
    menu.push(lateNightMenu[menuRandom(lateNightMenu)]);
  } else {
    console.log("what time??");
  }
}
function makeDay() {
  if (today === 0) {
    day = "일요일 ";
    menu.push(partyFoods[menuRandom(partyFoods)]);
  } else if (today === 1) {
    day = "월요일 ";
    aboutWeather();
  } else if (today === 2) {
    day = "화요일 ";
    aboutWeather();
  } else if (today === 3) {
    day = "수요일 ";
    aboutWeather();
  } else if (today === 4) {
    day = "목요일 ";
    aboutWeather();
  } else if (today === 5) {
    day = "금요일 ";
    menu.push(partyFoods[menuRandom(partyFoods)]);
  } else if (today === 6) {
    day = "토요일 ";
    menu.push(partyFoods[menuRandom(partyFoods)]);
  }
}
function aboutWeather() {
  if (13 <= temp && temp <= 20) {
    tempText = "쌀쌀 하며 ";
    menu.push(soupFoodCategories[menuRandom(soupFoodCategories)]);
  } else if (20 <= temp && temp <= 26) {
    tempText = "기온이 따뜻 하며 ";
    menu.push(goodWeatherFood[menuRandom(goodWeatherFood)]);
  } else if (26 <= temp) {
    tempText = "더우며 ";
    menu.push(hotWeatherMeal[menuRandom(hotWeatherMeal)]);
  } else {
    tempText = "추우며 ";
    menu.push(coldWeatherMenu[menuRandom(coldWeatherMenu)]);
  }
  if (
    weather === "Thunderstorm" ||
    weather === "Drizzle" ||
    weather === "Rain"
  ) {
    menu.push(coldWeatherMenu[menuRandom(coldWeatherMenu)]);
    weatherText = "비 오는 ";
  } else if (weather === "Clear") {
    weatherText = "날이 맑은 ";
    menu.push(goodWeatherFood[menuRandom(goodWeatherFood)]);
  } else if (weather === "Clouds") {
    weatherText = "날이 흐린 ";
    menu.push(coldWeatherMenu[menuRandom(coldWeatherMenu)]);
  } else if (weather === "Snow") {
    weatherText = "눈 오는 ";
    menu.push(coldWeatherMenu[menuRandom(coldWeatherMenu)]);
  } else {
    weatherText = "안개 낀 ";
    menu.push(coldWeatherMenu[menuRandom(coldWeatherMenu)]);
  }

  console.log("temp :" + temp + "/ weather:" + weather);
}

const searchResult = document.querySelector(".searchResult");
let isLoading = false;
// async function onClickSearch(resultMenu) {
//   if (isLoading) return;
//   isLoading = true;

//   const question = resultMenu + " 만드는 법";

//   const response = await axios.post(
//     "https://holy-fire-2749.fly.dev/chat",
//     {
//       question,
//     },
//     {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer BLOCKCHAINSCHOOL3", //이렇게 쓰면 털림 (안증용)
//       },
//     }
//   );

//   if (response.status === 200) {
//     searchResult.style.display = "inline";
//     looking.style.display = "none";
//     searchResult.innerText = response.data.choices[0].message.content;
//   }

//   isLoading = false;
// }

// 글자 입력 속도
const speed = 100;
const removeSpeed = 20;
let i = 0;

// 타이핑 효과
const typing = async () => {
  const letter = letters[i].split(""); //string의 텍스트를 여러개의 문자열로 나눠줌

  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift();
  }

  // 잠시 대기
  await wait(800);

  // 지우는 효과
  remove();
};

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");

  if (i === letter[i].length + 1) {
    //결과
    $meun.style.display = "inline";
    // howManyMenu(h, d, w);
    howManyMenu(1, 1, 3);
    $meun.innerHTML = `<div class="tempTexts">${tempText}${weatherText}${day}</div><h3>${time}</h3><h4>추천 드리는 메뉴는 바로</h4><h1 class="resultMenu">"${
      menu[menuRandom(menu)]
    }"</h1>`;
    const $resultMenu = document.querySelector(".resultMenu").innerText;
    onClickSearch($resultMenu);
    looking.style.display = "inline";

    console.log($resultMenu);
    return;
  } else {
    while (letter.length) {
      await wait(removeSpeed);
      letter.pop();
      $text.innerHTML = letter.join("");
    }
    i = !letters[i + 1] ? letters[i].length : i + 1;
    typing();
  }
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  //   i = !letters[i + 1] ? 0 : i + 1;
};

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// 초기 실행
setTimeout(typing, 1500);

//////////////////////////////////////////////
