// whilepool4.js
//member_id "user01", member_name: "지수", point:90
//member_id "user01", member_name: "제니", point:80
//member_id "user01", member_name: "로제", point:85

let members = [];

members[0] = {
  member_id: "user01",
  member_name: "지수",
  point: 90
};
members[1] = {
  member_id: "user02",
  member_name: "제니",
  point: 80
};
members[2] = {
  member_id: "user03",
  member_name: "리사",
  point: 52
};


members[0]['point']


let max = 0;
let maxId = '';



// for (let i = 0; i < members.length; i++) {
//   if (max < members[i].point) {
//     max = members[i].point;
//     maxId = members[i].member_id;
//   }
// }
//console.log(`최고point: ${max}, ${maxId}`);


for (let i = 0; i < members.length; i++) {
  if (max.point < members[i].point) {//객체끼리 비교
    max = members[i];
    //maxId = members[i].member_id;
  }
}

console.log(`최고point: ${max.point}, ${max.member_name}`);

//회원의 아이디
// 최고값을 가지고 있는 아이디 