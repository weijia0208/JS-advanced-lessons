//JS采用的是原型的继承方式，每个对象都有一个原型对象，最开始的原型是NULL
//JS继承是对象-对象的原型继承，为面向对象提供了动态继承的功能
//任何方式创建的对象都有原型对象
var a={};
a.__proto__ === Object.prototype;//true
//相当于
var b=new Object();
b.__proto__ === Object.prototype;

var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.__proto__ === Object.prototype);//true

var newObj = Object.create(obj);
var newObj2 = Object.create(obj);
newObj.age = 23;
console.log(newObj.__proto__ === obj);//true
console.log(newObj2.__proto__ === obj);//true

