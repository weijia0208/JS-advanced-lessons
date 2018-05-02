//构造函数实现的对象——对象的原型继承的原型共享
function Person(name){
    this.name=name;
};
Person.prototype.age=22;
Person.prototype.showName=function(){
    console.log(this.name);
};
function Student(id){
    this.id=id;
}
Student.prototype=new Person("Mike");
var s1=new Student(2017001);
var s2=new Student(2017002);
console.log(s1.name,s1.age,s1.id);//Mike 22 2017001
console.log(s2.name,s2.age,s2.id);//Mike 22 2017002
s1.__proto__.name="Jack";
console.log(s2.name);//Jack
s2.__proto__.__proto__.age=99;
console.log(s2.age);//99

console.log(s1);//Studnet{id:2017001}
console.log(s1.__proto__);//Person{name:"Jack"}
console.log(s1.__proto__.__proto__);//{age:99,showName:f(){}}

/*
问题：
1、它省略了为构造函数传递初始化参数这个环节,结果所有实例在默认的情况下都将取得相同的属性值，这还不是最大的问题！
2、最大的问题是原型中的所有属性是被很多实例所共享的,这种共享对于函数非常合适，对于那些包含基本值的属性也说得过去,因为我们知道可以在实例上添加一个同名属性，可以隐藏原型中的对应属性。但是对于包含应用类型值的属性来说,问题就非常严重了
*/

 //通过Object.create创建的对象的原型共享问题
 function Person(name){
     this.name=name;
 }
 Person.prototype.age=22;
 Person.prototype.showName=function(){console.log(this.name);};
 var person1=new Person("Mike");
 var student1=Object.create(person1,{id:{value:123,wtitable:true}});
 var student2=Object.create(person2,{id:{value:456,wtitable:true,enumerable:true}});
 console.log(student1.name,student1.age,student1.id);//Mike 22 123
 console.log(student2.name,student2.age,student2.id);//Mike 22 456
 student1.__proto__.name = "Jack";
 console.log(student2.name);//Jack
 student2.__proto__.__proto__.age = 99;
 console.log(student2.age);//99