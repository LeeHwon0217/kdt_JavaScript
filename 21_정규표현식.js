// 1. test() — 문자열이 패턴과 일치하는지 확인
const regex = /apple/;
console.log(regex.test("I have an apple.")); // true
console.log(regex.test("I like bananas.")); // false

// 2. match() — 패턴에 맞는 문자열을 찾아 배열로 반환
const text =
  "내 핸드폰 번호는 010-1234-5678이고, 너의 핸드폰 번호는 010-9999-9999야";
const result = text.match(/\d{3}-\d{4}-\d{4}/);
console.log(result); // 첫번째것만 뽑는다. 여러번 반복하고 싶으면 반복코드 넣어야 함
console.log(result[0]); // 010-1234-5678

// 3. replace() — 찾은 패턴을 다른 문자로 바꾸기
const Word = "내 이름은 김사과입니다.";
const clean = Word.replace(/김사과/, "****");
console.log(clean);
