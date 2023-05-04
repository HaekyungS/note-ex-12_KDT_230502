
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
// * helper function 이 다른 함수를 보조하거나 보완하기 위한 보조 함수라고 확인했습니다. 처음엔 set 으로 type 을 설정하는 것도 helper function 이 아닐까 해서 set 부터 접근을 함.
// * 이후, 아래 문항중에 helper function 을 사용하지 않고 구현하는 법을 보니, set 이 거기 해당하고 오히려 helper function 을 따로 할 수 있지 않을까? 라는 생각이 들었습니다.

// helper function을 사용하면 어떤 점이 있을까
// * 입력한 매개변수가 모두 integer가 맞는지를 확인 후, return을 boolean 으로 해서 해당 함수들을 사칙연산 함수에서 응용함.
// * 추가적으로, 사칙연산에 대해서도 하나의 함수에 helper function이 될 수 있다 생각합니다.
// * 그래서 마지막으로 응용했던 게, calculator 라는 함수를 만들어 cal 이라는 매개변수에 입력되는 값에 따라 사칙연산 함수가 다르게 return 되도록 구현하였다. 이것도 해당 함수의 실행결과를 도우니까 helper function 이 아닐까?


// helper function을 사용하지 않고 구현하는 방법이 있을까?
// * set 함수를 통해 구현하면 된다. set과 helper function은 유사하지만 다르지 않을까.

const Calculator = require('./utility-module/class.js');

const a=10;
const b=20;

console.log(new Calculator(a,b).calculator('add'))
console.log(new Calculator(a,b).calculator('minus'))
console.log(new Calculator(a,b).calculator('divide'))
console.log(new Calculator(a,b).calculator('multiply'))

// console.log(new Calculator(a,b).add())
// console.log(new Calculator(a,b).minus())
// console.log(new Calculator(a,b).divide())
// console.log(new Calculator(a,b).multiply())
// console.log(new Calculator(a,b).allCalaulator)