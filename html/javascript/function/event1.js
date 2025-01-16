// //event1.js

// let item = document.querySelector('button');

// item.addEventListener('click', function () {
//   // let n1 = document.querySelector('#num1').valueAsNumber; //value만 쓰면 숫자를 문자열로 인식해서 parseInt(n1)으로 바꿔줘야 함
//   // let n2 = document.querySelector('#num2').valueAsNumber;
//   // console.dir(n1 + n2);

//   let n1 = document.querySelector('input[name="first"]').value; //value만 쓰면 숫자를 문자열로 인식해서 parseInt(n1)으로 바꿔줘야 함
//   let n2 = document.querySelector('input[name="second"]').value;
//   console.dir(n1 + n2);
//   document.querySelector('input[name="result"]').value = parseInt(n1) +parseInt(n2);

//   //document.querySelector('#result').value = n1 + n2

//   // document.querySelector('#result')['value'] = n1 + n2;
// });





//document.querySelector('#result').value = n1 + n2

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

let item = document.querySelector('button');
item.addEventListener('click', function () {
  let n1 = document.querySelector('#num1').valueAsNumber;
  let n2 = document.querySelector('#num2').valueAsNumber;
  console.dir(n1 + n2);

  document.querySelector('#add').value = n1 + n2;


});

let item2 = document.querySelector('button[name="minus"]');
item2.addEventListener('click', function () {
  let n1 = document.querySelector('#num1').valueAsNumber;
  let n2 = document.querySelector('#num2').valueAsNumber;
  console.dir(n1 - n2);

  document.querySelector('#minus').value = n1 - n2;


});

item3.addEventListener('click', function () {
  let n1 = document.querySelector('#num1').valueAsNumber;
  let n2 = document.querySelector('#num2').valueAsNumber;
  console.dir(clear);

  document.querySelector('#clear').value = '';


});






let plus = document.querySelector('button [name="plus_button"]');
let minus = document.querySelector('.minus_button');
let clear = document.querySelector('#clear_button');



