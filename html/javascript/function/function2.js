// function2.js
/*
함수이름: getMax
매개변수: 배열(numAry)
기능: 배열의 요소 중에서 가장 큰 값을 콘솔에 출력
*/

let ary1 = [3, 15, 22, 7];
let ary2 = [23, 11, 45, 30];
let ary3 = [];
for (let i = 0; i < 5; i++) {
  ary3[i] = parseInt(Math.random() * 50); //50보다 작은 이미의 값
}

/* 
function getMax(ary = []) {
  let max = 0;

  for (let i = 0; i < ary.length; i++) {
    if (max < ary[i]) {
      max = ary[i];
    }
  }
console.log(`가장 큰 값은: ${max}`);
}

getMax(ary1);
getMax(ary2);
getMax(ary3);
*/


// //매개 변수로 받은 값 중에서 제일큰 요소를 출력
// function getMax(numAry = []) {
//   let max = 0; // 제일 큰 값을 담아놓을 변수 선언
//   //배열을 다 비교하도록 반복문.
//   for (let i = 0; i < numAry.length; i++) {
//     //제일 큰 값을 max에 저장 
//     if (max < numAry[i]) {
//       max = numAry[i];
//     }
//   }
//   console.log(`가장 큰 값은 ${max}`);
// }

// getMax(ary1);
// getMax(ary2);
// getMax(ary3);


//매개 변수로 받은 값 중에서 제일큰 요소를 출력
function getMax(numAry = []) {
  let max = 0; // 제일 큰 값을 담아놓을 변수 선언
  //배열을 다 비교하도록 반복문.
  for (let i = 0; i < numAry.length; i++) {
    //제일 큰 값을 max에 저장 
    if (max < numAry[i]) {
      max = numAry[i];
    }
  }
  //console.log(`가장 큰 값은 ${max}`); //어떤 값인지 확인용
  return max; //함수를 호출한 영역으로 반환
} // end of getMax

console.log(getMax(ary1));
//alert(getMax(ary2));
getMax(ary3);
// getMax();