//基于构造函数实现的原型继承
function Person(age,name) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person(20,"Jack");
console.log(p1.name);
console.log(p1.age);
p1.sayHi();

p1.__proto__ === Person.prototype; //true
Person.__proto__ === Function.prototype; //true
Person.__proto__.__proto__ === Object.prototype; //true

constructor//对象的构造函数