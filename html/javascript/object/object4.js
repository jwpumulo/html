// object4.js
// 1일이 무슨 요일
// 마지막날은 뭔지
// let today = new Date();
// let year = 2025;
// let month = 2;
// let date = 0;
// // let year =2024;

// console.clear();
// console.log(today.getTime());







let today = new Date();
// today.setFullYear(year);
// today.setMonth(month);
// today.setDate(date);

today = new Date(2024,4,3,15,30,22);

// console.log(today, today.getDate()); //0이 반환= 일요일

// today = new Date(2022,4,17);


// //2022년 5월
// today.setFullYear(2022);
// today.setMonth(4);

// console.log(today);

console.clear();
let a = {};
let b = {};
console.log(a==b);


today = new Date (); //값이 담겨져 있는 주소값을 비교
let now = new Date();
console.log(today.getTime() == now.getTime());

