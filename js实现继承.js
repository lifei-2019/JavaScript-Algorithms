// 1.class/extends
class Animal {
  constructor(name) {
    this.name = name
  }
  hello=function name(params) {
    console.log('hello')
  }
}

class Dog extends Animal {
  constructor(name, say) {
    super(name)
    this.say = say
  }
}




// 2.function/new
function Animal (name) {
  this.name = name
}

Animal.prototype.hello = () => {
  console.log('hello')
}

function Dog(name, say) {
  // 继承属性
  Animal.call(this, name)
  this.say = say
}

// 通过连接原型链完成继承
Dog.prototype = Object.create(Animal.prototype)

// 再加上constructor
Dog.prototype.constructor = Dog
console.log('Dog', Dog)