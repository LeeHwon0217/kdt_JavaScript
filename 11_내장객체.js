/*
// min(): 가장 작은 수를 반환
console.log(Math.min());
console.log(Math.min(1, 10, -10, 1000, 0, "-100"));
console.log(Math.min(1, 10, -10, "천", 0, "-100"));

// max(): 가장 큰 수를 반환
console.log(Math.max());
console.log(Math.max(1, 10, -10, 1000, 0, "-100"));
console.log(Math.max(1, 10, -10, "천", 0, "-100"));

// round(): 소수점 첫번째 자리에서 반올림하여 그 결과를 반환
console.log(Math.round(10.49));
console.log(Math.round(10.5));
console.log(Math.round(-10.5));
console.log(Math.round(-10.51));

// n번째 자리에서 반올림
let num = 123.4567;
// console.log(num * 100)
// console.log(Math.round(num * 100))
console.log(Math.round(num * 100) / 100);
console.log(num.toFixed(2));

// floor: 소수점 첫번째 자리에서 소수점을 버림
console.log(Math.floor(10.49));
console.log(Math.floor(10.5));
console.log(Math.floor(-10.5));
console.log(Math.floor(-10.51));

// ceil(): 소수점 첫번째 자리에서 소수점을 올림
console.log(Math.ceil(10.49));
console.log(Math.ceil(10.5));
console.log(Math.ceil(-10.5));
console.log(Math.ceil(-10.51));

// random(): 0보다 크거나 같고 1보다 작은 무작위 소수를 반환
console.log(Math.random());
const r = Math.random();
console.log(r);
console.log(Math.ceil(r * 10));

// 1~100 사이의 무작위 정수
const randomInt = Math.floor(Math.random() * 100) + 1;
console.log(randomInt);
*/
/*
const str1 = "안녕하세요 JavaScript";
const str2 = new String("안녕하세요 JavaScript");

console.log(str1 == str2);
console.log(str1 === str2);

// length: 문자열의 길이를 저장
console.log(str1.length);

// indexOf(): 특정 문자나 문자열이 처음으로 등장하는 위치를 인덱스로 반환
console.log(str1.indexOf("J"));
console.log(str1.indexOf("Java"));
console.log(str1.indexOf("java"));

// charAt(): 특정 문자열에서 전달 받은 인덱스에 위치한 문자를 반환
console.log(str1.charAt(7));

// includes(): 특정 문자열에서 전달 받은 문자열이 포함되어 있는지 여부를 반환
console.log(str1.includes("Java"));
console.log(str1.includes("java"));

// substring(): 전달 받은 시작 인덱스부터 종료 인덱스 직전까지의 문자열을 추출
console.log(str1.substring(6));
console.log(str1.substring(6, 11));

// replace(): 원본 문자열의 일부를 전달 받은 문자열로 치환
console.log(str1.replace("안녕하세요", "Hello"));

// split(): 구분자를 기준으로 나눈 후 나뉜 문자열을 하나의 배열에 저장
const str3 = "김사과,오렌지,반하나,이메론,배애리";
const students = str3.split(",");
console.log(students);

for (let i in students) {
  console.log(i, students[i]);
}
console.log("-------------");

// trim(): 문자열의 앞 뒤 공백을 제거
const str4 = "     JavaScript     ";
console.log(`🎃${str4}🎃`);
console.log(`🎃${str4.trim()}🎃`);

// toUpperCase(), toLowerCase(): 문자열을 대, 소문자로 변환
console.log(`🎃${str4.trim().toLowerCase()}🎃`);
console.log(`🎃${str4.trim().toUpperCase()}🎃`);
*/

// 날짜객체
// 현재 날짜와 시간
const now = new Date();
console.log("현재:", now.toString());

// 연도, 월, 일 꺼내기
console.log("연도:", now.getFullYear());
console.log("월:", now.getMonth() + 1); // 0부터 시작하므로 +1
console.log("일:", now.getDate());

// 특정 날짜 만들기
const birthday = new Date(2024, 4, 15);
console.log("생일:", birthday.toDateString());

// 날짜 차이 계산
const nowTime = now.getTime();
const birthTime = birthday.getTime();
const diffDays = Math.floor((nowTime - birthTime) / (1000 * 60 * 60 * 24));
console.log(`태어난 지 ${diffDays}일 지남`);
