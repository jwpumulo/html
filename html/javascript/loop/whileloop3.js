//whileloop3.js

//object 타입



let myInfo = { // object
  name: "홍길동",
  age: 20,
  height: 170,
  weight: 65
}; //object

console.log(myInfo);
console.log(`이름: ${myInfo.name}, 나이: ${myInfo['age']}`); //변수이름+대괄호
console.log(`키ㅣ: ${myInfo.height}, 몸무게: ${myInfo['weight']}`);

// for in 반복문
for (let prop in myInfo) {
  console.log(`속성: ${prop}, 값: ${myInfo[prop]}`);

}


//for of

let nameAry = ['지수', '제니', '리사', '로제'];
for (let name of nameAry) {
  console.log(`값: ${name}`)

}

// 여러개 값 = 배열
// 여러개 속성 = 오브젝트


let myFriends1 = {
  name: "지수",
  phone: "010-0000-0103",
  address: "용산구"
}

let myFriends2 = {
  name: "제니",
  phone: "010-0000-0116",
  address: "용산구"
}

let myFriends3 = {
  name: "리사",
  phone: "010-0000-0327",
  address: "성북구"
}

// let friends = [myFriend1, myFriend2, myFriend3];
// friedns[3] = {
//   name: "지수",
//   phone: "010-0000-0103",
//   address: "용산구"
// }

console.log(friends[0].name);
console.log(friends[1]['phone']);
console.log(friends[2]['address']);

for (let i = 0; i < freidns.length; i++) {
  //친구이름
  console.log(`이름: ${friends[i].name}, 연락처: ${friends[i]['phone']}`);
}