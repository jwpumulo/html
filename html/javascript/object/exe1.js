// 연습1. exe1.js

let myFriends = [];
let sum = 0;
let cnt = 0;
let avg = 0;

avg = sum / cnt;


myFriends.push({
  name: "지수",
  escore: 70,
  kscore: 78,
  gender: 'Female'
});
myFriends.push({
  name: "제니",
  escore: 80,
  kscore: 88,
  gender: 'Female'
});
myFriends.push({
  name: "로제",
  escore: 90,
  kscore: 70,
  gender: 'Female'
});
myFriends.push({
  name: "리사",
  escore: 95,
  kscore: 55,
  gender: 'Male'
});

// forEach 콘솔 출력

// 영어 점수 90점 이상
// myFriends.forEach(function (friends, idx, ary) {
//   // console.log(friends.name);
//   if (friends.escore >= 90) {
//     console.log(friends['name']);
//   }
// });


//평균점수 80점 이상

myFriends.forEach(function (friends, idx, ary) {
  // console.log(friends.name);
  if (friends.gender === 'Female') {
    sum += friends.escore //해당 학생 영어평균 
    cnt++;
  }
});

console.log(`해당 여학생 영어 평균 점수는 ${sum/cnt}`)



//filter: 여학생의 영어평균 미만 > underAvgAry


//filter(function(item, idx, ary){}) 조건을 만족하는 배열 생성

let underAvgAry = myFriends.filter(function (friends, idx, ary) {
  if (friends.escore < avg) {
    return true;
  } else {
    return false;
  }

});

console.log(underAvgAry);