function showMessage() {
  console.log("환영합니다!");
}

showMessage();

function greet(name) {
  console.log("안녕하세요, " + name + "님!");
}

greet("김사과");

function add(a, b) {
  return a + b;
}

let result = add(3, 5);
console.log(result);

function greet(name = "게스트") {
  console.log("안녕하세요, " + name + "님!");
}

greet();
greet("김사과");

function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));

(function () {
  console.log("이건 즉시 실행 함수입니다!");
})();

function outer() {
  function inner() {
    console.log("안쪽 함수 실행!");
  }
  inner();
}

outer();

function createGreeting(message) {
  return function (name) {
    console.log(message + ", " + name + "님!");
  };
}

const hello = createGreeting("안녕하세요");
hello("김사과");
