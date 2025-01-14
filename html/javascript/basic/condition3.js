// condition3.js
// 2개의 숫자를 입력. promt
// 2개 짝수 > "모두 짝수" &&
// 1개 짝수 > "하나는 짝수" ||
// 0개 > "짝수는 없습니다." 


// ***** 범위가 좁은 것은 먼저 *****

let num1 = prompt("첫번째 숫자 입력: ");
let num2 = prompt("두번째 숫자 입력: ");


if (num1 %2 == 0 && num2 % 2 == 0 ){
console.log ("모두 짝수");
} else if  (num1 %2 == 0 || num2 % 2 == 0 ) {
  console.log ("하나는 짝수");}
else {console.log ("짝수는 없습니다");}






// let firstNumber = (prompt("첫번째 값을 입력하세요: "));
// let secondNumber = (prompt("두번째 값을 입력하세요: "));

// if (firstNumber % 2 == 0 && secondNumber % 2 == 0 ) {
//   console.log('모두 짝수입니다');}

// else if (firstNumber % 3 == 0 || secondNumber % 3 == 0 ) {
//   console.log('짝수는 없습니다');} 6은?





4
  
  