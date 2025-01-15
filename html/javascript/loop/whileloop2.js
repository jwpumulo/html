// //whileloops2.js



// //prompt("점수를 입력하세요: ")



// let inputValue = prompt('점수를 입력하세요: ');
// console.log(inputValue);

// while (run) {


// }


// //stop을 입력하면 반복문 종료. 
// input value stop
// while
// //입력한 값 중에서 제일 큰 값을 출력.


// let run = true;
// let max = 0;
// while (run) {

//   let inputValue = prompt('점수를 입력하세요: ');
//   if (inputValue == 'stop') {
//     run = false;
//   } else {
//     if (max < inputValue) {
//       max = inputValue;
//     }
//   }
// } // end of while.
// console.log(`최고점수: ${max}`);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// 입력값이 숫자인지 아닌지 구분
// 숫자가 아니면 스탑인지 아닌지
// 숫자이면 > 최고점수를 구하고

// NaN not a number


// let run = true;
// let max = 0;
// let temp = parseInt(inputValue);


// while (run) {
//   let inputValue = prompt('점수를 입력하세요: ');
//   if (temp == stop || temp == isNaN) {
//     run = false;
//   } else {
//     if (max < inputValue) {
//       max = inputValue;
//     }
//   }
// } // end of while.
// console.log(`최고점수: ${max}`);


//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
let run = true;
let max = 0;
let temp = parseInt(inputValue); //is NaN (Temp)

while (run) {
if (isNaN(temp)) { // 입력한 값이 문자열이라면
  if (inputValue == 'stop') {
    run = false;
  } else {
    alert(`정상적인 값을 입력하세요.`);
  }
} else { // 문자가 아니라면
  if (max < parseInt(inputValue)) {
    max = parseInt(inputValue);
  }


} }// end of while

console.log(`최고점수: ${max}`);