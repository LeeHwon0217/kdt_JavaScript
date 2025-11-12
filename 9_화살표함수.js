// 일반 함수
/*
function add(a, b) {
  return a + b;
}

// 화살표 함수
const add = (a, b) => a + b;

// 매개변수가 1개일 땐 괄호 생략 가능
const square = x => x * x;

// 코드 블록이 있을 경우 return을 명시해야 함
const add = (a, b) => {
  return a + b;
};
*/
/*
const obj = {
  name: "김사과",
  sayHello: function () {
    setTimeout(function () {
      console.log("안녕! 나는 " + this.name);
    }, 1000);
  },
};
obj.sayHello(); // undefined (this가 윈도우를 가리킴)

// 화살표 함수로 고치면:
const obj2 = {
  name: "김사과",
  sayHello: function () {
    setTimeout(() => {  // 화살표는 자신만의 this를 가지지 않음
      console.log("안녕! 나는 " + this.name);
    }, 1000);
  },
};
obj2.sayHello();
*/
// setTimeout()은 첫 번째 인자로 함수(콜백 함수)를 받고, 두 번째 인자로 얼마나 뒤에 실행할지(ms)를 받습니다.
/*
console.log("물 끓이기 시작!");

setTimeout(function () {
  console.log("면 넣기!");
}, 3000); // 3초 후에 실행

console.log("계란 준비하기!");
*/
/*
function greet(name, callback) {
  console.log("안녕, " + name + "!");
  callback(); // 나중에 호출됨
}

function sayBye() {
  console.log("잘 가~");
}

greet("김사과", sayBye);
*/
/*
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((n) => n * 2);

console.log(doubled); // [2, 4, 6, 8]
*/
/*
function doSomething(callback) {
  console.log("작업 시작!");
  callback();
}

doSomething(() => {
  console.log("작업 완료!");
});
*/
const calc_add = (a, b) => a + b;
const calc_multiply = (a, b) => a * b;

function calculater(num1, num2, action) {
  if (num1 < 0 || num2 < 0) return;

  const result = action(num1, num2);
  return result;
}

calculater(10, 3, calc_add);
calculater(10, 3, calc_multiply);
