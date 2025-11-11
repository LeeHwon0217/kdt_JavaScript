let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}

let dan = 5;
let i = 1;
while (i <= 9) {
  console.log(`${dan} * ${i} = ${dan * i}`);
  i++;
}

// let num = 1;

// do {
//   console.log(`현재 숫자: ${num}`);
//   num++;
// } while (num <= 5);

// for문
for (let i = 1; i <= 5; i++) {
  console.log(`현재 숫자: ${i}`);
}

// break문
for (let dan = 2; dan <= 9; dan++) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
}

// continue문
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(`i의 값: ${i}`);
}
