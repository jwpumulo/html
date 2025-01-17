// object2.js

// concat(배열 요소 하나로 합)
let numAry1 = [10, 20];
let numAry2 = [30, 40];

let resultAry = numAry1.concat(numAry2);

console.log(resultAry.join('-').split('-'));
// join 배열 > 문자열
// split 문자열 > 배열

let result = resultAry.join('-').split('-');
result.push('60'); //unshift
result.pop();

console.log(result.pop()); //shift

console.log(result, result.indexOf('200')); //indexof  요소의 인덱스 반환

console.clear();

result = ["지수", "제니", "로제", "리사"]

if (result.indexOf('지순니') != -1) {
  console.log("찾는 이름이 존재합니다.");

} else {
  console.log("찾는 이름이 없습니다.");
}



console.log(result.at(1)); //인덱스에 해당하는 값을 반환.

result.sort().reverse().join(); //역순 정렬 
// . . . result.sort()반환값이 배열이라서 .reverse .join 사용 가능
console.log(result);