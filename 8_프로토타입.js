/* 1. 프로토타입 */
/*
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`안녕하세요, 저는 ${this.name}입니다.`);
};

const p1 = new Person("김사과");
const p2 = new Person("반하나");

p1.sayHello();
p2.sayHello();
*/
/*
function Dog(color, name, age) {
  this.color = color;
  this.name = name;
  this.age = age;
}

const Rucy = new Dog("흰색", "루시", 15);
console.log(Rucy);
console.log(`이름: ${Rucy.name}`);
console.log(`색상: ${Rucy.color}`);
console.log(`나이: ${Rucy.age}`);
Rucy.family = "포메";
Rucy.getFamily = function () {
  return this.family;
};
console.log(`종: ${Rucy.family}`);
console.log(`getFamily: ${Rucy.getFamily()}`);

const PPomi = new Dog("흰색", "뽀미", 6);
console.log(`이름: ${PPomi.name}`);
console.log(`색상: ${PPomi.color}`);
console.log(`나이: ${PPomi.age}`);
console.log(`종: ${PPomi.family}`);
// console.log(`getFamily: ${PPomi.getFamily()}`)
console.log("------------");

Dog.prototype.owner = "김사과";
Dog.prototype.run = function () {
  return this.name + " 달립니다";
};

console.log(`Rucy 소유자: ${Rucy.owner}`);
console.log(`PPomi 소유자: ${PPomi.owner}`);

console.log(`Rucy run: ${Rucy.run()}`);
console.log(`PPomi run: ${PPomi.run()}`);
*/
