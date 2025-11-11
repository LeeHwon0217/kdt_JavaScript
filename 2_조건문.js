// let age = 20;

// if (age >= 18) {
//   console.log("성인입니다");
// }

// if (age >= 18) console.log("성인입니다"); // 한 줄이면 중괄호 생략 가능

// else문
// let age = 10;

// if (age >= 18) {
//   console.log("성인입니다");
// } else {
//   console.log("미성년자입니다");
// }

// else if문
// let age = 13;

// if (age >= 18) {
//   console.log("성인입니다.");
// } else if (age >= 13) {
//   console.log("청소년입니다.");
// } else {
//   console.log("어린이입니다.");
// }

// 다중 조건문 예제
let score = 77;

if (score >= 90) {
  console.log("🎉 A등급! 훌륭해요!");
} else if (score >= 80) {
  console.log("👏 B등급! 잘했어요!");
} else if (score >= 70) {
  console.log("🙂 C등급! 조금만 더 힘내요!");
} else if (score >= 60) {
  console.log("😅 D등급! 아쉬워요, 다음엔 더 잘할 수 있어요!");
} else {
  console.log("😭 F등급! 다시 도전해봅시다!");
}

// switch문
let mbti = "ENFP";

switch (mbti) {
  case "ENFP":
    console.log("🔥 열정 가득! 사람들과 어울리는 걸 좋아하는 아이디어 뱅크!");
    break;
  case "INFJ":
    console.log("🌙 조용하지만 깊은 통찰력! 사람들을 도와주는 조용한 리더.");
    break;
  case "ISTJ":
    console.log("📋 원칙과 계획을 중시하는 믿음직한 현실주의자!");
    break;
  case "ENTJ":
    console.log("💼 리더십이 뛰어나고 목표 지향적인 전략가!");
    break;
  default:
    console.log("🤔 아직 등록되지 않은 MBTI예요. 다시 확인해 주세요!");
}

const month = 10;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(`${month}월의 마지막 일자는 31일입니다`);
    break;
  case 2:
    console.log(`${month}월의 마지막 일자는 28일입니다`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(`${month}월의 마지막 일자는 30일입니다`);
    break;
}

const age = 20;
const message = age >= 18 ? "성인입니다." : "미성년자입니다.";
console.log(message);

const myscore = 85;
const grade =
  myscore >= 90
    ? "A"
    : myscore >= 80
    ? "B"
    : myscore >= 70
    ? "C"
    : myscore >= 60
    ? "D"
    : "F";

console.log(`당신의 성적은 ${grade}입니다.`);
