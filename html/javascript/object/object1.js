// object1.js

let obj = {}; //객체 (인스턴스)

obj = new Object(); //생성자

obj.title = "이것이 자바다.";
obj['price'] = "34,000원";

console.log(obj);

let today = new Date();
console.log(today.getFullYear() + '년도');



let numAry = [10, 20, 30]; //new Array(); 
numAry.push(40);
numAry.unshift(5);
numAry.splice(0, 1, 20);  //5, 10, 20, 30, 40 *1의 위치의 1개의 값을 8로 대체


console.log(numAry);