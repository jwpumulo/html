//forloop3.js
//배열
let score1 = 90;
let sum = 0;



let numAry = [10, 20, 30, 40]; //배열생성.
numAry[4] = 50;
numAry[5] = 60;
numAry[6] = 70;
numAry[7] = 80;
console.log(numAry);
console.log(numAry.length); //배열 길이 갯수

// let pos = 1; //5
// let temp = numAry[6];
// numAry[6] = numAry [5]// 6번째 위치값60을 7번째로 이동 
// numAry[5] = numAry [6]// 7번째 위치값70을 6번째로 이동.

//현재 변수가 무슨 값을 가지고 있는지 중요함!
let pos = 1; 
let temp = numAry[pos + 1];
numAry[pos + 1] = numAry [pos]
numAry[pos] = temp;


for (let i = 0; i < numAry.lenth; i++) {
  console.log(`${i}번째의 값 > ${numAry[i]}`);
  sum += numAry[i];
}
console.log(sum);

// sum += numAry [0];



//console.log(numAry[0]); //첫번째 값 0