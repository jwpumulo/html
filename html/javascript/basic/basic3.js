//basic3.js

/* 두 숫자를 입력받아서 두수의 곱을 출력
*/

//let anyVal3 = prompt("숫자 입력: ");
//let anyVal4 = prompt("숫자 입력: ");

// let result2 = Number(anyVal3) * Number(anyVal4);
// console.log (`두 수의 곱은 ${result2}입니다!`)


// let firstValue = parseInt(prompt("첫번째 값을 입력하세요: "));
// let secondValue = prompt("두번째 값을 입력하세요: ");

// firstValue /= 3;  //firstValue = parse(IntfirstValue) + 3;
// //firstValue = ++firstValue;
// secondValue *= 3; //secondValue = parseInt(secondValue) -3;  
// //secondValue = --secondValue;

// console.log(firstValue, secondValue);

// let result = ++firstValue % --secondValue; 
// console.log(`${firstValue}와 ${secondValue}의 나눈 나머지 값은 ${result}`);



/*
두 숫자를 입력 받아서 두수의 곱을 출력
첫번째 값에 5를 더하고
두번째 값에 3을 빼서
두 수의 차를 구해보시오
*/


let firstValue = parseInt(prompt("첫번째 값을 입력하세요: "));
let secondValue = parseInt(prompt("두번째 값을 입력하세요: "));

firstValue += 5; 
secondValue -= 3; 

let result = firstValue - secondValue; 

console.log(`${firstValue}에 ${secondValue}의 뺀 값은 ${result}`);
