// condition4.js

//임의의 값을 만들어주는



// const obj = {
//   name: "홍길동",
//   age: 20,
//   showName: function () { //메소드.
//     console.log(obj.name);


//   }

// }

// obj.showName();


// // 1 ~ 10 사이의 임의의 수 출력
console.log(parseInt(Math.random() * 10) + 1); //객체가 가지고 있는 함수 // 0<X<1 값 출력.

let num1 = parseInt(Math.random() * 10) + 1;
let num2 = parseInt(Math.random() * 10) + 1;
console.log (num1, num2);
let sumEven = 10;
// 짝수면
let sumOdd = 20;
// 홀수면 값을 더하고



// truthy(10, "aaa", ) vs. falsy (0, "", null, undefined)

if (num1 % 2) {
  sumOdd += num1;
} else {
  sumEven+= num1;
}





if (num1 % 2 == 0) {
  sumEven += num1;
} else {
  sumOdd += num1;
}

if (num2 % 2 == 0) {
  sumEven += num2;
} else {
  sumOdd += num2;
}

console.log (sumEven의 값은 )

// if num1 % 2 ==0 {
// num1+ sumEven
// } else  {num1 + sumOdd}


// if (num1 %2 == 0 && num2 %2 == 0) {
//   console.log(parseIn(num1 + sumEnven));
// } else {
//   console.log(parseIn(num1 + sumOdd));
// }



// if (num1 %2 == 0 && num2 % 2 == 0 ){
// console.log ("모두 짝수");
// } else if  (num1 %2 == 0 || num2 % 2 == 0 ) {
//   console.log ("하나는 짝수");}
// else {console.log ("짝수는 없습니다");}