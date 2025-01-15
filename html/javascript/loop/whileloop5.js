//lwhileloop5.js


let members = [];

members[0] = {
  member_id: "user01",
  member_name: "지수",
  point: 90
};
members[1] = {
  member_id: "user02",
  member_name: "제니",
  point: 70
};
members[2] = {
  member_id: "user03",
  member_name: "리사",
  point: 85
};

// 회원관리

// let searchName = prompt("찾는 회원의 이름 입력하세요: ");

// for (let i = 0; i < members.length; i++) {
//   //배열의 이름 속성중에서 서치네임과 같으면 포인트를 콘솔 출력

//   if (searchName == members[i].member_name) {
//     console.log(`${searchName}의 포인트는 ${members[i].point}짓`);
//   }

// }

while (true) {

  let searchName = prompt("찾는 회원의 이름 입력하세요: ");
  if (searchName == 'stop') {
    break;// whille 반복문 종료
  } 

  let exists = false; //존재여부 담아놓기

  for (let i = 0; i < members.length; i++) {
    //배열의 이름 속성중에서 서치네임과 같으면 포인트를 콘솔 출력

    if (searchName == members[i].member_name) {
      alert(`${searchName}의 포인트는 ${members[i].point}점`);
      exists = true;
      break;
    }
  }
  if (!exists) {
    alert("찾는 회원이 없습니다.");
  }
} // end of while.
console.log('end of program');