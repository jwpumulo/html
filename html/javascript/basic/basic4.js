//278 시간 > 몇 일, 몇 시간 입니다
// 2./24
// 3.나머지 시간

// let firstValue = parseInt(prompt("시간을 입력하세요: "));

// let hour = firstValue % 24;
// let day = (firstValue-hour) / 24;
 
// console.log(`${firstValue}시간은 ${day}일 ${hour} 시간입니다`);



//89345분 > 몇 일 62, 몇 시간1, 몇 분 5 입니다.
// 1440*62=89280
// 89345-89280=65
// 65-60=1시간
//       5분







// let firstValue = parseInt(prompt("분을 입력하세요: "));

// let day = firstVlue - (firstValue / 1440 ) - 60 ; 
// let hour = firstValue / 60 ; 
// let min = 
// console.log(`${firstValue}는 ${result}일 ${result} 입니다`);

let firstValue = prompt("분을 입력: ");
let day = parseInt(firstValue / (24*60));
let hour = parseInt((firstValue % (24*60)) /60);
let min = firstValue % 60
;

console.log ( `${firstValue}분은 ${day}일 ${hour}시간 ${min}분 입니다`);

// let firstValue = parseInt(prompt("첫번째 값을 입력하세요: "));
// let secondValue = parseInt(prompt("두번째 값을 입력하세요: "));

// firstValue += 5; 
// secondValue -= 3; 

// let result = firstValue - secondValue; 

// console.log(`${firstValue}에 ${secondValue}의 뺀 값은 ${result}`);
