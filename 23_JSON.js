/*
const user = {
  name: "김사과",
  age: 20, // 자바스크립트는 뒤에 컴마 있어도 에러가 안남
};

const jsonStr = JSON.stringify(user);
console.log(jsonStr);  // 뒤에 컴마 빠짐, 키에 쌍따옴표
*/

const jsonStr = '{"name":"김사과","age":20}'; // 문자열이다. JSON 형태를 띈
const userObj = JSON.parse(jsonStr); // JSON 객체로 변환

console.log(userObj.name); // 이름 뽑기 가능
