//whileloop1.js


//1~10까지 출력
let i = 1;

while (i <= 10) {
  console.log(`현재 i의 값 => ${i}`);
  i++;

}


// while(true) {
// let temp = parseInt(Math.random()*100);
// console.log(temp)

// if(temp < 40) {

//   break;//반복문 종료
// }

// }


let run = true;

while(run) {
  let temp = parseInt(Math.random()*100);
  console.log(temp)
  
  if(temp < 40) {
  
    run = false;//반복문 종료
  }
  
  }
  console.log('end of program.');

