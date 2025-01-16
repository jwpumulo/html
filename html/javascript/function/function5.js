//function5.js :메소드
//this: object일 경우 객체 자신을 가리킴

let obj = {
  name: "지수",
  birth: "1995-01-03",
  bloodType: "A형",
  showInfo: function () {
    console.log(`이름은 ${this.name} 생일은 ${this.birth} 혈액형은 ${this.bloodType}입니다.`)
  },
  addNumber: function (num1 = 0, num2 = 0) {
    return num1 + num2;
  },
  caculateFnc: function (num1 = 0, num2 = 0, calFnc) {
    return calFnc(num1, num2);
  }
}

obj.showInfo();
// alert(obj.addNumber(10,12));

let result = obj.caculateFnc(10, 5, function (a, b) {
  return a - b;
})
result = obj.caculateFnc(10, 5, function (a, b) {
  return a + b;
})
// obj.caculateFnc(10, 5, function (a, b) {
//   return a - b;
// });

function addSum(num1, num2) {
  return num1 + num2
  }

  console.log(`결과값: ${result}`);

