// 변수의 선언 및 값 할당
let name = "김사과"; // '' "" 다 가능
console.log(name);
// 값 재할당
name = "반하나"; // 재할당 할 때는 let 또는 const 사용하지 않음
console.log(name);

// 변수 선언을 따로 할 수 있다
let age;
console.log(age); // undefined 출력
// 값 할당
age = 20;
console.log(age); // 20 출력

// const : 값 변경이 불가능
const PI = 3.14;
console.log(PI);
// PI = 3.141592;  // 에러 발생. const는 값 변경 불가. TypeError: Assignment to constant variable.  -> 상수에 값을 재할당하려고 했다

// var을 안 쓰는 이유
var a = 10;
console.log(a); // 10 출력

a = 20;
console.log(a); // 20 출력

var a = 30;
console.log(a); // var은 같은 이름으로 변수를 여러 번 선언할 수 있어서 실수할 가능성이 높음

let b = 10;
console.log(b); // 10 출력

b = 20;
console.log(b); // 20 출력

// let b = 30; // 에러 발생. b는 이미 선언되어 있기 때문.

// 기본형
// 스택에 저장되고, 값 자체가 저장된다.
let num1 = 100;
let num2 = num1; // 값 복사
console.log(num2); // 100 출력
num1 = 200;
console.log(num1); // 200 출력
console.log(num2); // 100 출력. 둘은 같은 주소를 쓰고 있지 않구나!

// 참조형
// 힙에 저장되고, 주소가 저장된다.
let obj1 = { name: "김사과" }; // key-value로 저장하면 객체가 된다.
let obj2 = obj1; // 주소 복사
console.log(obj1);
console.log(obj2);
obj2.name = "반하나";
console.log(obj1);
console.log(obj2); // 둘 다 바뀜. 같은 주소를 쓰고 있구나!

// 다양한 데이터 타입
let str = "Hello, JS!"; // 문자열 저장
let isLover = true; // 불리언 값 저장
let nothing = null; // null (값이 없음)
let notDefined; // 선언만 하고 값 할당을 하지 않음
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt
let unique = Symbol("id"); // 심볼형

console.log("str:", str);
console.log("isLover:", isLover);
console.log("nothing:", nothing);
console.log("notDefined:", notDefined);
console.log("bigNumber:", bigNumber);
console.log("unique:", unique);

let person = { name: "김사과", age: 20 }; // 객체
let numbers = [1, 2, 3, 4, 5]; // 배열
let greet = function () {
  return "안녕하세요!!";
}; // 함수
let now = new Date(); // 날짜 객체

console.log("person:", person);
console.log("numbers:", numbers);
console.log("greet:", greet());
console.log("now:", now);

// 타입 변환
console.log(10 + "문자열"); // 파이썬에서는 에러가 난다. 자바스크립트는 자동으로 숫자를 문자열로 변환
console.log("3" * "5"); // 문자열이 숫자로 변환되어 곱셈이 수행된다.
console.log("3" * 5); // 문자열이 숫자로 변환되어 곱셈이 수행된다.
console.log(1 - "일"); // NaN. Not a Number

const number1 = "10";
const number2 = "3.5";
console.log(typeof number1); // string

console.log(`현재 number1 타입: ${typeof number1}`);
console.log(`Number(number1)의 타입: ${typeof Number(number1)}`);
console.log(`String(number1)의 타입: ${typeof String(number1)}`);
console.log(
  `Boolean(number1)의 타입: ${typeof Boolean(number1)}, ${Boolean(number1)}`
);
console.log(`Object(number1)의 타입: ${typeof Object(number1)}`);
console.log(
  `parseInt(number2)의 타입: ${typeof parseInt(number2)}, ${parseInt(number2)}`
);
console.log(
  `parseFloat(number2)의 타입: ${typeof parseFloat(number2)}, ${parseFloat(
    number2
  )}`
);
