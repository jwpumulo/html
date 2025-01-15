// //forloop4.js

// // 0 <= Math.random()*100 < 100 => 50부터 100
// // 학생 10명의 임의 점수를 배열에 저장


// //민식님
// // let scores = [];
// // let sumScore = 0;
// // let average;

// // for (let i = 0; i < 10; i++) {
// //   let score = parseInt((Math.random() * 51) + 50);
// //   score[i] = score;
// //   console.log(scores[i]);
// //   sumScore += score;
// // }

// // console.log(scores);
// // average = sumScore / 10;
// // console.log(average);}










// //반복문+배열


// let scores = [];
// let sum = 0;


// for (let i = 0; i < 10; i++) {
//   scores[i] = parseInt(Math.random() * 51) + 50;
//   // let temp = parseInt(Math.random() *51) + 50;
//   // if (temp == 50 || temp == 100) {
//   console.log(scores[i])
// }

// //평균계산
// for (let i = 0; i < 10; i++) {
//   sum += scores[i];
// }
// //console.log(sum / 10);
// console.log(`평균: ${sum / 10}`);




// 최대값
// let max = 0; // 맥스랑 스코어랑 비교해서 크면 맥스에 담기


let scores = [];
let sum = 0;
let max = 0;

for (let i = 0; i < 10; i++) {
  scores[i] = parseInt(Math.random() * 51) + 50;
   //let temp = parseInt(Math.random() *51) + 50;
  // if (temp == 50 || temp == 100) {
  console.log(scores[i])
}

// //평균계산
for (let i = 0; i < 10; i++) {
  sum += scores[i]; //합계 구하기
  if (max < scores[i]) {
    max = scores[i];
  } // 최대값 구하기
}
//console.log(sum / 10);
console.log(`평균: ${sum / 10}최고점수: ${max}`);





//반복문 조건문 배열문