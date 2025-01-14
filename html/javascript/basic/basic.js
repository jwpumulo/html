let myName = "user01"; // string 변수선언. "문자열"
let myAge = 20; // number 변수 20값을 대입 숫자
let myObj = {
  name: "user02",
  age: 25
}; // object 변수

console.log(myName == "user01"); //==비교연산자 
console.log(myAge == myName); //비교값이 같으면 true 다르면 false

console.log("내 이름은" + myObj.name + "입니다."); // "user02" // "문자열" + 는 연결자
console.log(myObj.age + 3); // 25