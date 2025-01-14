//basic1.js
/*
변수 선언: 이름, 연락처, 주소 선언
console 출력
*/


//변수 let
let myName = "석지욱";
let myTel = "010-6216-0062";
let myAddrs = "장산2길 60";

myName = "홍길동"; //변수의 값을 바꿀 때 let은 제외하고


//아주 큰 정수+n
let largeNumber = 100000000000000000000000000000000000000000000000000n;
console.log(largeNumber);


//상수 const
const booldType = "B";
// bloodType = "A";
const PI = 3.14; // 프로그램 변하지 않는 값으로 선언할 때 상수





console.log("내 이름은 " + myName + "입니다.");
console.log('연락처는 ' + myTel + '입니다.');
console.log(`주소는 ${myAddrs} 입니다.`);

console.log(`반지름 5인 원의 넓이는 ${5*5*PI} 입니다.`)





let myInfo = {
  name: "홍길동",
  age: 20
};
let scores = [10, 20, 30]; // 배열
let specialType = null; 
console.log(typeof specialType); //변수의 자료형을 출력