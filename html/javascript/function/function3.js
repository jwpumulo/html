//function3.js
//매개변수 2개 이상
// 두 수를 더 하고 평균값


function getAverage(num1 = 0, num2 = 0) { //첫번째 매값은 0
  let sum = 0, avg = 0; // 두개 이상은 콤마 사용하며 나열
  sum = num1 + num2;
  avg = sum / 2;

  return avg; // 호출한 영역으로 avg값을 반환
}

let avg1 = getAverage(10, 30);
let avg2 = getAverage(30, 50);
//let result=getAverage(avg1, avg2);
let result = getAverage(getAverage(10, 30), getAverage(30, 50)); //반환값이 있으면 사용가능

console.log(`평균: ${result}`);