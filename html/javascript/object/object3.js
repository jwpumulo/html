// object3.js
//forEach
let numAry = [20, 13, 45, 62, 19];
let sum = 0;
let max = 0;

// numAry.forEach(function (item, idx, ary) {
//   sum += item; //item은 각각 요소

//   console.log(`item은 ${item}`);



//   //console.log(item, idx, ary); 


// });

// console.log(`합계 ${sum}`);


//-----------------------------------------------------


// numAry.forEach(function (item, idx, ary) {
//   sum += item; //item은 각각 요소
// if (item % 2 === 0 ) { sum += item;}


//   //console.log(`item은 ${item}`);



//   //console.log(item, idx, ary); 


// });
//-----------------------------------------------------


numAry.forEach(function (item, idx, ary) {
  //홀수의 위치 합계
  if (idx % 2 === 0) {
    console.log(`item은 ${item}`);
    sum += item;
  }

  //최고값
  if (max < item) {
    max = item;

  }

});

console.log(`홀수의 합계 ${sum} 최고값은 ${max}`);

//-----------------------------------------------------


//filter(function(item, idx, ary){}) 조건을 만족하는 배열 생성

let filterAry = numAry.filter(function (item, idx, ary) {
  if (item % 2 === 1) {
    return true;
  } else {
    return false;
  }

});

console.log(filterAry);