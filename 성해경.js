
// const add = require('./utility-module/add.js')
// const minus = require('./utility-module/minus.js')
// const divide = require('./utility-module/divide.js')
// const multiply = require('./utility-module/multiply.js')


// console.log(add(a,b))
// console.log(minus(a,b))
// console.log(divide(a,b))
// console.log(multiply(a,b))

// 위는 사칙연산 모듈을 4개 만들어 호출하는 예시이나, 이것을 하나의 class 형태의 모듈로 만들어 관리 가능한가.

// class 에서 작성될 메서드는 모두 '정수'로 된 두개의 인자를 받아서 결과를 반환하게끔 한다.
// 어떤 helper function을 사용해야할까
// 어떤 장점이 있을까
// 사용하지 않고 구현하는 방법이 있을까?

const Calculator = require('./utility-module/class.js');

const a=10;
const b=20;

console.log(new Calculator(a,b).add())
console.log(new Calculator(a,b).minus())
console.log(new Calculator(a,b).divide())
console.log(new Calculator(a,b).multiply())