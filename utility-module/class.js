class Calculator {
  constructor(a, b) {
    this.x = a;
    this.y = b;
  }

  // set x(value) {
  //   if (!Number.isInteger(value)) {
  //     return console.log('x가 정수가 아닙니다. 정수를 입력해주세요')
  //   }
  //   this._x = value
  // }

  // set y(value) {
  //   if (!Number.isInteger(value)) {
  //     return console.log('y가 정수가 아닙니다. 정수를 입력해주세요')
  //   }
  //   this._y = value
  // }

  isInteger(){
    if(Object.values(this).every((value)=>{
      return Number.isInteger(value)
    })){
      this._x=this.x;
      this._y=this.y;

      return true
    }else{
      console.log('매개변수는 정수만 가능합니다. 정수를 입력하세요')
      return false
    }
  }

  add() {
    if(this.isInteger()){
      return this._x + this._y
    }
  }

  minus() {
    if(this.isInteger()){
      return this._x - this._y
    }
  }

  divide() {
    if(this.isInteger()){
    return this._x / this._y
    }
  }

  multiply() {
    if(this.isInteger()){
    return this._x * this._y
    }
  }

  get allCalaulator() {
    return `덧셈의 결과는 ${this.add()}, 뺄셈의 결과는 ${this.minus()}, 나눗셈의 결과는 ${this.divide()}, 곱셈의 결과는 ${this.multiply()}`
  }

  calculator(cal){
    if(cal==='add'){
      return this.add()
    }else if(cal==='minus'){
      return this.minus()
    }else if(cal==='divide'){
      return this.divide()
    }else if(cal==='multiply'){
      return this.multiply()
    }else{
      return console.log('사칙연산 기호가 아닙니다.')
    }
  }

}

module.exports = Calculator;