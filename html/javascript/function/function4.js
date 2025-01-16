//function4.js

//이벤트 - 이벤트 핸들러

let item = document.querySelector('button');
console.log(item);

item.addEventListener('click', function () { //화면의 선택자 1.이벤트 유형, 2,클릭하면 실행될 함수
  alert('마우스가 클릭되었습니다.');
});

item.addEventListener('mouseover', function () { //화면의 선택자 1.이벤트 유형, 2,클릭하면 실행될 함수
  item.style.backgroundColor = 'yellow';
})

item.addEventListener('mouseout', function () { //화면의 선택자 1.이벤트 유형, 2,클릭하면 실행될 함수
  item.style.backgroundColor = '';//null
})


document.querySelector('button').addEventListener('mouseout', function () { //화면의 선택자 1.이벤트 유형, 2,클릭하면 실행될 함수
  item.style.backgroundColor = ''})
  
// >> item.addEventListener('이벤트유형', function(){});
//<body>
//<button>클릭하기</button>