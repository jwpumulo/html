//forloop1.js

let sum = 0;


// 1~10까지 출력

// for (let i = 1; i <= 10; i++) {
//   console.log(`현재 i의 값 : ${i}`)
//   sum = sum + i;
// }
// console.log(`1~10까지의 합 ${sum}`);
// console.log(`end of for`);


//Console > Source


// 1~10까지 홀수의 값

for (let i = 1; i <= 10; i++) {
  console.log(`현재 i의 값 : ${i}`)
  if (i % 2 == 1) {
    sum = sum + i;
  } //if절 블록이 1개인 경우{}생략가능 
}


console.log(`1~10까지의 합 ${sum}`);
console.log(`end of for`);