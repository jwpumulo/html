// todo 2025-01-14
// 변수 
// 연산자
// 조건문


// 1~10 무작위 숫자 3개 생성
// 3개의 숫자 중 같은 숫자가 몇 개 있는지 console에 출력
// 예) 생성된 숫자가 7, 7, 4일 경우 2 출력
// 모두 다를 경우 0 출력


let num1 = parseInt(Math.random() * 10) + 1;
let num2 = parseInt(Math.random() * 10) + 1;
let num3 = parseInt(Math.random() * 10) + 1;

console.log(num1, num2, num3);

if (num1 == num2 && num1 == num3) {
  console.log(3);
} else if (num1 == num2 || num1 == num3 || num2 == num3) {
  console.log(2);
} else {
  console.log(0);
}



// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --



// 두 수 1~100까지 임의수 생성
// 두 수를 더한 값이 
// let sumEven = 10; 짝수의 값은 sum Even에 합하기
// let sumOdd = 20; 홀수의 값은 sum Odd에 합하기


// let num1 = parseInt(Math.random() * 100) + 1;
// let num2 = parseInt(Math.random() * 100) + 1;

// const sumEven = 10; //짝수
// const sumOdd = 20; //홀수

// let result = num1 + num2;

// console.log(num1, num2, result);


// if (result % 2 == 0) {
//   console.log(`${num1}과 ${num2} 합한 값 ${result} 짝수이므로 10을 더한 ${result + sumEven}입니다.`);
// } else {
//   console.log(`${num1}과 ${num2} 합한 값 ${result} 홀수이므로 20을 더한 ${result + sumOdd}입니다.`);
// }



// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --



// 두 수를 입력 받아서 
// 첫번째 값에 15를 더하고
// 두번째 값에 2를 나눠서
// 두 수의 차를 구해보세요

// let num1 = parseInt(Math.random() * 10) + 1;
// let num2 = parseInt(Math.random() * 10) + 1;

// console.log(num1, num2);
// console.log(num1 + 15, num2 / 2);
// console.log((num1 + 15) - (num2 / 2));



// 세 수 중에서 제일 작은 값을 출력

// let num1 = parseInt(Math.random() * 100) + 1;
// let num2 = parseInt(Math.random() * 100) + 1;
// let num3 = parseInt(Math.random() * 100) + 1;

// console.log(num1, num2, num3);

// if (num1 < num2) {
//   if (num1 < num3) {
//     result = num1;
//   } else {
//     result = num3;
//   }
// } else {
//   if (num2 < num3) {
//     result = num2;
//   } else {
//     result = num3;
//   }
// }
// console.log(`가장 작은 수는 ${result}입니다`);



// 94576분은 몇 일, 몇 시간, 몇 분 입니까
// > 94576분은 65일 16시간 16분 입니다


// let firstValue = prompt("분을 입력하세요! ");

// let day = parseInt(firstValue / (24 * 60));
// let hour = parseInt((firstValue % (24 * 60)) / 60);
// let min = firstValue % 60;

// console.log(`${firstValue}분은 ${day}일 ${hour}시간 ${min}분 입니다`);