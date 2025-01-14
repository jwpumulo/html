//condition2

// 입력받은 숫자 -> 2의 배수인지, 3의 배수인지

// 6 > 2와 3의 배수
// 4 > 2의 배수
// 9 > 3의 배수

// prompt

// let firstNumber = 6;

// if (firstNumber % 2 == 0) {
//   console.log(firstNumber + '는 2의 배수입니다');
// } if (firstNumber % 3 == 0) {
//   console.log(firstNumber + '는 3의 배수입니다');
// }

// if +
// else if {
//   col
// }
// console.log(firstNumber + '는 2와 3의 배수가 입니다')

// else {
//   console.log(firstNumber + '는 2또는 3의 배수가 아닙니다')
// }

// let anyNumber = parseInt(prompt("숫자를 입력하세요"));
// "0" === 0
// console.log("0" === 0);

/*
let anyNumber = prompt("숫자 입력");
if (anyNumber == 0) {
  console.log(`다른 값을 입력하세요`);
} else {
  if (anyNumber % 2 == 0) {
    if (anyNumber % 3 == 0) {
      console.log(anyNumber + '는 2와 3의 배수입니다');
    } else {
      console.log(firstNumber + '는 2의 배수입니다');
    }

  } else if (firstNumber % 3 == 0) {
    console.log(firstNumber + '는 3의 배수입니다');
  }
}
*/

// if (anyNumber % 2 == 0) {
//   if (anyNumber % 3 == 0) {
//     console.log(anyNumber + '는 2와 3의 배수입니다');
//   } else {
//     console.log(firstNumber + '는 2의 배수입니다');
//   }

// } else if (firstNumber % 3 == 0) {
//   console.log(firstNumber + '는 3의 배수입니다');
// }


// else if (firstNumber % 2 == 0 and % 3 == 0) 
//  { console.log(firstNumber + '는 2와 3의 배수가 입니다');
//    }
// else if (firstNumber % 2 == 0)(firstNumber % 3 == 0) 
//  { console.log(firstNumber + '는 2와 3의 배수가 입니다');
// }
// else {
//   console.log(firstNumber + '는 2또는 3의 배수가 아닙니다');
// }


// // if 2의 배수 

// else if 3의 배수

// if + else if 2와 3의 배수입니다.

// else 



// let firstNumber = 6;
// //firstNumber 값이 홀수이면 '홀수'입니다.


// if (firstNumber % 2 == 0) {
//   console.log(firstNumber + '는 2의 배수입니다');
// } else if (firstNumber % 3 == 0) {
//   console.log(firstNumber + '는 3의 배수입니다');
// } else {
//   console.log(firstNumber + '는 2또는 3의 배수가 아닙니다')
// }



console.log(anyNumber);

if (anyNumber == 0 || isNaN(anyNumber)) {

  console.log('정상적인 값을 입력하세요');
} else {
  if (anyNumber % 2 == 0 && anyNumber % 3 == 0) {
    console.log('2와 3의 배수입니다.');
  } else if (anyNumber % 2 == 0) {
    console.log('2의 배수입니다.')
  } else if (anyNumber % 3 == 0) {
    console.log('3의 배수입니다.')
  }
}

