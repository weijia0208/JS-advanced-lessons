//三种方式创建JS对象
//1.通过字面量
var obj1={
    name:'Jake',
    age:12
};
//2.通过Object创建
var obj2=Object.create(obj1);
//3.通过构造函数创建
function Person(age,name){
    this.age=age;
    this.name=name;
}
var obj3=new Person(12,'Jake');
console.log(obj1,obj2,obj3);