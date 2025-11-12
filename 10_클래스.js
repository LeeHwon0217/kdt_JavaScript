/*
class User {
  constructor(name) {
    this._name = name; // 실제 값은 밑줄(_)로 저장
  }

  // getter
  get name() {
    return this._name;
  }

  // setter
  set name(newName) {
    if (newName.length < 2) {
      console.log("이름은 두 글자 이상이어야 합니다.");
    } else {
      this._name = newName;
    }
  }
}

const user = new User("김사과");

console.log(user.name);  // get 메서드
user.name = "반";  // 
user.name = "반하나";
console.log(user.name);
*/
/*
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 4);
console.log(rect.area);
*/
/*
class User {
  #password = "";

  constructor(userid, password) {
    this.userid = userid;
    this.#password = password;
  }

  checkPassword(input) {
    return this.#password === input;
  }
}

const user = new User("apple", "1111");

console.log(user.userid);
console.log(user.checkPassword("1111"));
console.log(user.checkPassword("wrong"));

// console.log(user.#password); // Private field '#password' must be declared in an enclosing class
*/

class Account {
  // static 필드: 모든 계좌에서 공유됨
  static accountCount = 0;

  // private 필드: 외부에서 접근 불가
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
    Account.accountCount++; // 생성될 때마다 1 증가
  }

  // getter: 외부에서 잔액을 읽을 수 있게
  get balance() {
    return this.#balance;
  }

  // setter: 잔액을 직접 설정할 수 없도록 차단
  set balance(value) {
    console.log("직접 잔액을 설정할 수 없습니다.");
  }

  // 입금
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`${this.owner}님, ${amount}원 입금되었습니다.`);
    }
  }

  // 출금
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`${this.owner}님, ${amount}원 출금되었습니다.`);
    } else {
      console.log("잔액이 부족합니다.");
    }
  }

  // static 메서드: 클래스 자체에서 호출
  static getAccountCount() {
    return `총 계좌 수: ${Account.accountCount}`;
  }
}

const a1 = new Account("김사과");
a1.deposit(1000);
console.log(a1.balance); // getter → 1000

a1.balance = 5000; // setter 차단 메시지
console.log(a1.balance); // 여전히 1000

a1.withdraw(300); // 300 출금됨

const a2 = new Account("반하나");
a2.deposit(2000);

// static 메서드는 클래스명으로 호출
console.log(Account.getAccountCount()); // 출력: 총 계좌 수: 2
