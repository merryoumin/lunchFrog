// document.write('<script src="data.js"></script>');

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

  console.log("temp2 :" + temp + "/weather2:" + weather);
}

//////////////////////////////////

const breakfastMenu = [
  "베이컨과 계란",
  "오믈렛",
  "프렌치 토스트",
  "팬케이크",
  "와플",
  "시리얼과 우유",
  "토마토와 치즈 샌드위치",
  "베이컨과 치즈 샌드위치",
  "토마토와 양송이 버섯 오믈렛",
  "스크램블드 에그와 토스트",
  "아보카도 토스트",
  "치즈 오믈렛",
  "크로와상",
  "베이컨과 감자 해시브라운",
  "콩나물국밥",
  "죽",
  "감자 수프",
  "닭고기 샐러드",
  "유부초밥",
  "샌드위치",
  "덴버 오믈렛",
  "삶은 계란과 토스트",
  "규동",
  "베이컨과 계란 샌드위치",
  "마늘 버터 토스트",
  "미역국",
  "어묵국",
  "떡국",
  "바나나 팬케이크",
  "누룽지 죽",
  "토마토 스프",
  "치즈 토스트",
  "에그 베네딕트",
  "콩나물국",
  "훈제연어 베이글",
  "치즈 크로와상",
];
const lunchMenu = [
  "샌드위치",
  "핫도그",
  "햄버거",
  "치킨버거",
  "쉬림프버거",
  "닭가슴살샐러드",
  "참치샐러드",
  "그린샐러드",
  "파스타",
  "피자",
  "김밥",
  "초밥",
  "덮밥",
  "비빔밥",
  "볶음밥",
  "짜장면",
  "짬뽕",
  "우동",
  "라면",
  "쌀국수",
  "부대찌개",
  "된장찌개",
  "순두부찌개",
  "갈비탕",
  "뼈해장국",
  "김치찌개",
  "돈까스",
  "오므라이스",
  "카레라이스",
  "불고기덮밥",
];
const snackMenu = [
  "과일",
  "과일요거트",
  "과일샐러드",
  "아이스크림",
  "마카롱",
  "쿠키",
  "케이크",
  "머핀",
  "크로와상",
  "파이",
  "베이글",
  "샌드위치",
  "핫도그",
  "핫케이크",
  "버터토스트",
  "치즈스틱",
  "나쵸",
  "팝콘",
  "양념치킨",
  "핫윙",
  "치킨너겟",
  "튀김",
  "핫바",
  "소세지",
  "츄러스",
  "닭다리",
  "감자튀김",
  "프레즐",
];
const dinnerMenu = [
  "스테이크와 감자",
  "로스트 비프",
  "삼겹살",
  "불고기",
  "샤브샤브",
  "고등어구이",
  "해물탕",
  "감자탕",
  "순두부찌개",
  "김치찌개",
  "된장찌개",
  "카레라이스",
  "피자",
  "파스타",
  "떡볶이",
  "짜장면",
  "짬뽕",
  "탕수육",
  "양장피",
  "생선구이",
  "미역국",
  "제육볶음",
  "불닭볶음면",
  "초밥",
  "돈부리",
  "새우볶음밥",
  "잡채밥",
  "오므라이스",
  "찜닭",
  "김밥",
  "초계국수",
];
const lateNightMenu = [
  "피자",
  "치킨",
  "햄버거",
  "핫도그",
  "순대",
  "튀김",
  "떡볶이",
  "김밥",
  "라면",
  "우동",
  "짜장면",
  "짬뽕",
  "탕수육",
  "불닭볶음면",
  "김치볶음밥",
  "간짜장",
  "간짬뽕",
  "쫄면",
  "족발",
  "보쌈",
  "소세지",
  "치즈스틱",
  "감자튀김",
  "오뎅",
  "어묵",
  "만두",
  "양념치킨",
  "파닭치킨",
  "양꼬치",
  "치킨너겟",
];
const soupFoodCategories = [
  "갈비탕",
  "계란국",
  "김치국",
  "떡국",
  "미역국",
  "북엇국",
  "삼계탕",
  "순대국",
  "어묵국",
  "우거지국",
  "육개장",
  "콩나물국",
  "해장국",
  "된장찌개",
  "김치찌개",
  "부대찌개",
  "순두부찌개",
  "고추장찌개",
  "차돌된장찌개",
  "소고기무국",
  "감자탕",
  "황태국",
  "매운탕",
  "해물탕",
  "짬뽕",
  "초계탕",
  "수제비",
  "만두국",
  "굴국밥",
  "설렁탕",
];
const spicyFoodCategories = [
  "떡볶이",
  "불닭",
  "불닭볶음면",
  "마라탕",
  "매운갈비찜",
  "매운낙지볶음",
  "매운닭볶음탕",
  "매운돼지갈비찜",
  "매운불돼지바베큐",
  "매운육개장",
  "짬뽕",
  "찜닭",
  "매운카레",
  "토마토스파게티",
  "후라이드치킨",
];
const coldWeatherMenu = [
  "순대국밥",
  "설렁탕",
  "갈비탕",
  "순두부찌개",
  "김치찌개",
  "우거지탕",
  "해장국",
  "매운탕",
  "북어국",
  "어묵국",
  "닭곰탕",
  "동태찌개",
  "쌀국수",
  "칼국수",
  "만두",
  "떡국",
  "부대찌개",
  "쇠고기뭇국",
];
const goodWeatherFood = [
  "그릴드 치킨",
  "그릴드 스테이크",
  "그릴드 새우",
  "살라미와 치즈 판",
  "바베큐 리브",
  "바베큐 치킨",
  "아보카도 샌드위치",
  "모짜렐라 치즈와 토마토 샐러드",
  "콘샐러드",
  "파니니",
  "바게트 샌드위치",
  "크로크무슈",
  "마르게리타 피자",
  "불고기 피자",
  "새우 피자",
  "마늘 바게트",
];
const hotWeatherMeal = [
  "샐러드",
  "물냉면",
  "콘샐러드",
  "파스타 샐러드",
  "토마토 샐러드",
  "카프레제 샐러드",
  "쿠스쿠스 샐러드",
  "참치 샐러드",
  "치킨 샐러드",
  "물회",
  "냉채족발",
  "냉채 샤브샤브",
  "콩국수",
  "막국수",
  "삼계탕",
];
const partyFoods = [
  "치킨",
  "햄버거",
  "피자",
  "핫도그",
  "나쵸",
  "치즈볼",
  "타코야끼",
  "팟타이",
  "회",
  "랍스터",
  "양꼬치",
  "삼겹살",
  "족발",
  "닭꼬치",
  "보쌈",
  "케이준치킨",
  "떡볶이",
  "탕수육",
  "칠리새우",
  "라면",
  "깐풍기",
  "순대",
  "김치전",
  "파전",
  "해물파전",
  "크림치즈 고로케",
  "연어 샐러드",
  "초밥",
];

///////////////////////////////////////

const searchResult = document.querySelector(".searchResult");
let isLoading = false;
// async function onClickSearch(resultMenu) {
//   console.log("in");
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
