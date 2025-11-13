/*
console.log("요청을 보냅니다..."); // 동기

// Promise 생성 new Promise(executor) -> excutor는 즉시 실행됨
const getData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // 성공 여부 (true 또는 false)로 변경하여 확인

    if (success) {
      resolve("서버에서 데이터를 성공적으로 받아왔습니다!");
    } else {
      reject("서버 요청 실패!");
    }
  }, 2000); // 2초 후 실행
});

// getData pendding 중
getData  // promise 호출
  .then((result) => {
    console.log("성공:", result);
  })
  .catch((error) => {
    console.log("실패:", error);
  })
  .finally(() => {
    console.log("작업 완료");
  });
*/
/*
function orderCoffee(menu) {
  console.log(`☕ ${menu} 주문을 접수했습니다. 잠시만 기다려주세요.`);

  const availableMenu = ["아메리카노", "카페라떼", "바닐라라떼"];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableMenu.includes(menu)) {
        resolve(`${menu}가 준비되었습니다! 맛있게 드세요 :)`);
      } else {
        reject(`죄송합니다. ${menu}는 판매하지 않습니다.`);
      }
    }, 2000);
  });
}

// 사용
orderCoffee("아메리카노") // promise 호출
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("주문이 완료되었습니다.");
  });
*/
function getBanana() {
  return new Promise((resolve) => {
    // resolve객체만 만들면 reject 없어도 된다
    setTimeout(() => {
      resolve("🍌");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍎");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("오렌지 없음")); // 에러 객체를 만들어서 메세지 전달. 일부러 리젝되게 만들어둠
}

// 총 4초 소요됨
getBanana()
  .then((banana) => getApple().then((apple) => [banana, apple]))
  .then(console.log); // 약자. 리턴값 반환. 4초가 걸림(1+3)

// 총 3초가 소요됨
// Promise.all: 병렬적으로 한번에 Promise들을 실행. 하나의 프로미스라도 실패하면 전체를 에러로 처리함
Promise.all([getBanana(), getApple()]).then((fruits) =>
  console.log("all", fruits)
);

// 에러!!
Promise.all([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log("all", fruits))
  .catch(console.log);

// 총 1초 바나나 실행
// Promise.race: 주어진 Promise중에 가장 빨리 수행된 것이 실행
Promise.race([getBanana(), getApple()]).then((fruits) =>
  console.log("race", fruits)
);

// Promise.allSettled: 여러 프로미스를 병렬적으로 처리하되 하나의 프로미스가 실패해도 무조건 이행
Promise.allSettled([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log("allSettled", fruits))
  .catch(console.log);
