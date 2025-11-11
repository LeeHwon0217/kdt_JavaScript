// let fruits = ["사과", "바나나", "오렌지"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// let fruits = ["사과", "바나나", "오렌지"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

let fruits = ["사과", "바나나", "오렌지"];

fruits.forEach(function (fruit, index) {
  console.log(`${index}번째 과일: ${fruit}`);
});

let func1 = function (a, b) {
  //실행문
};

func1(10, 3);

function func2(a, b) {
  //실행문
}

let names = ["김사과", "반하나", "오렌지"];

// for문
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// for...of
for (let name of names) {
  console.log(name);
}

// forEach
names.forEach(function (name) {
  console.log(name);
});

// 이차원 배열
let matrix = [
  [1, 2, 3], // 0번째 행
  [4, 5, 6], // 1번째 행
  [7, 8, 9], // 2번째 행
];

console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][1]); // 8

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}

let menuBoard = [
  ["🍔 불고기버거", "🍟 감자튀김", "🥤 콜라"],
  ["🍔 치즈버거", "🌭 핫도그", "🍹 사이다"],
  ["🍔 새우버거", "🍗 치킨너겟", "🍵 녹차"],
];

// 메뉴판 출력
for (let row = 0; row < menuBoard.length; row++) {
  let line = "";
  for (let col = 0; col < menuBoard[row].length; col++) {
    line += menuBoard[row][col] + "\t";
  }
  console.log(line);
}

// 다차원 배열
let cube = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

console.log(cube[1][0][1]); // 6
