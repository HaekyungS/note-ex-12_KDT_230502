class Calculator{
  constructor(a,b){
    this.x=a;
    this.y=b;
  }

  set x(value){
    if(!Number.isInteger(value)){
      return console.log('x가 정수가 아닙니다. 정수를 입력해주세요')
    }else{
      this._x=value
    }
  }

  set y(value){
    if(!Number.isInteger(value)){
      return console.log('y가 정수가 아닙니다. 정수를 입력해주세요')
    }else{
      this._y=value 
    }
  }

  add() {
    return this._x+this._y
  }

  minus(){
    return this._x-this._y
  }

  divide(){
    return this._x/this._y
  }

  multiply(){
    return this._x*this._y
  }

}

console.log(new Calculator(10,20).add())
console.log(new Calculator(10,20).minus())
console.log(new Calculator(10,20).divide())
console.log(new Calculator(10,20).multiply())
console.log(new Calculator("가","나"))