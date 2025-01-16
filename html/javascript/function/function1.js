//function.js

let numAry1 = [10, 20, 30]; //배열
let numAry2 = [40, 50, 60];
let numAry3 = [70, 80, 90];


  // let sum = 0;
  // for (let i = 0; i < numAry1.length; i++) {
  //   sum += numAry1[i];
  // }
  // console.log('합계: ' + sum);  // //end of function



  // 기능정의
function arraySum(numAry=[]) { //블록
  let sum = 0;
  for (let i = 0; i < numAry.length; i++) {
    sum += numAry[i];
  }
  console.log('합계: ' + sum);
} // end of arraySum()


//호출
arraySum([10, 20, 30]);
arraySum(numAry2);
arraySum(numAry3);

// numAry1 = [] 매개변수 : 함수를 정의 할 때는 변수를 사용
// [10, 20, 30] 매개값 :함수를 호출해서 실행할 때는 값을 넣어줌