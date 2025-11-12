/*
const person = {
  name: "김사과",
  age: 20,
  greet: function () {
    console.log("안녕하세요, 저는 " + this.name + "입니다.");
  },
};

person.greet();
*/

/*
const person = new Object();
person.name = "반하나";
person.age = 25;
person.greet = function () {
  console.log("안녕하세요, 저는 " + this.name + "입니다.");
};

person.greet();
*/

// const는 함수 내부의 값까지 가져와야 한다.
// 따라서 function에 new로 클래스의 객체를 만든다.
// 이때 내부의 코드는 생성자가 된다.
// 이후에 클래스가 나옴
/*
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("안녕하세요, 저는 " + this.name + "입니다.");
  };
}

const p1 = new Person("이메론", 30);
p1.greet();
// const p2 = new Person("반하나", 25);
// p2.greet();
*/

// 그렇게 나온 클래스!
/*
class Person {
  constructor(name, age) {
    // 생성자
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`안녕하세요, 저는 ${this.name}입니다.`);
  }
}

const p2 = new Person("배애리", 27);
p2.greet();
*/

// 5. Object.create() 사용
/*
const proto = {
  greet: function () {
    console.log(`안녕하세요, 저는 ${this.name}입니다.`);
  },
};

const person = Object.create(proto);
person.name = "안가도";
person.age = 32;

person.greet();
*/

/* 객체 복사 */
/*
const obj1 = { name: "김사과" };
const obj2 = obj1;

obj2.name = "오렌지";

console.log(obj1.name);
*/

// 1. 얕은 복사
/*
const obj1 = { name: "김사과", age: 20 };
const obj2 = Object.assign({}, obj1);  // 비어 있는 객체에 obj1의 속성들을 복사

obj2.name = "오렌지";
console.log(obj1.name);
*/
/*
const obj1 = { name: "김사과", age: 20 };
const obj2 = { ...obj1 };

obj2.age = 25;
console.log(obj1.age);  // 바뀌지 않음
*/
/*
const obj1 = {
  name: "김사과",
  address: { city: "서울" }, // 얕은복사시 city는 안나옴
};

const obj2 = { ...obj1 };
obj2.address.city = "부산";

// address는 객체이기 때문에, obj1과 obj2가 같은 주소를 공유합니다.
console.log(obj1.address.city); // "부산" 😨
*/

// 2. 깊은 복사
/*
function deepCopy(value) {
  // 원시값은 그대로 반환
  if (typeof value !== "object" || value === null) {
    return value;
  }

  // 배열일 경우
  if (Array.isArray(value)) {
    const result = [];
    for (let i = 0; i < value.length; i++) {
      result[i] = deepCopy(value[i]);
    }
    return result;
  }

  // 객체일 경우
  const result = {};
  for (let key in value) {
    result[key] = deepCopy(value[key]);
  }
  return result;
}

const original = {
  name: "오렌지",
  scores: [90, 80, 100],
  address: {
    city: "서울",
    zip: "12345",
  },
};

const copy = deepCopy(original);
console.log(copy);
copy.name = "김사과";
copy.scores[0] = 70;
copy.address.city = "부산"; // 부산으로 안 바뀜

console.log(original.name);
console.log(original.scores[0]);
console.log(original.address.city);
*/

// 스프레드 문법
/*
const fruits = ["사과", "바나나"];
const newFruits = [...fruits, "포도"];  // fruits에 포도 추가
console.log(newFruits);
*/
// arr2는 arr1의 복사본 (같은 값이지만 서로 다른 배열)
/*
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // 새 배열 생성
console.log(arr2);
*/
/*
const a = [1, 2];
const b = [3, 4];
const result = [...a, ...b];
console.log(result);
*/
/*
function add(x, y, z) {
  return x + y + z;
}

const nums = [1, 2, 3];
console.log(add(...nums)); // 6
*/
/*
const person = { name: "김사과", age: 20 };
const copy = { ...person };
console.log(copy);
*/
/*
const a = { name: "김사과" };
const b = { age: 20 };
const merged = { ...a, ...b };
console.log(merged);
*/

/* rest 문법 */
/*
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first);
console.log(second);
console.log(rest);
*/
/*
function sum(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));
*/
/*
const user = {
  name: "김사과",
  age: 20,
  city: "서울",
};

const { name, ...rest } = user;

console.log(name);
console.log(rest);
*/

/* 7. 객체 구조 분해 할당 */
/*
const obj = { name: "김사과", age: 20 };
const { name, age } = obj;

console.log(name);
console.log(age);
*/
/*
function display({ name, age, address, job }) {
  console.log(name, age, address, job);
}

const apple = {
  name: "김사과",
  age: 20,
  address: { si: "서울시", gu: "서초구", dong: "양재동" },
};
console.log(apple);
const new_apple = { ...apple, job: "프로그래머" };
display(new_apple);

// new_apple에 pet 속성이 없으면 → "루시"를 기본값으로 사용합니다.
const { pet = "루시" } = new_apple;
console.log(new_apple);
console.log(pet);

// new_apple.job 속성 값을 변수 hobby에 저장합니다.
// 원래 이름은 job, 내가 쓰고 싶은 이름은 hobby!
const { job: hobby } = new_apple;
console.log(new_apple);
console.log(hobby);
*/
// styles라는 속성 안에 있는 color를 꺼냅니다.
const component = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

function changeColor({ styles: { color } }) {
  console.log(color); // "black". styles: { color } 안의 color. 이름 다르면 에러남
}

changeColor(component);
