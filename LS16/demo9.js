//形式一
function Person(name,age){
    this.name=name;
    this.age=age;    
};
Person.prototype.showName=function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id=id;
}
Student.prototype.__proto__=Person.prototype;
var s1=new Student("xxx",22,2017001);
var s2=new Student("www",23,2017002);

//Student.prototype没有自身属性和方法

//形式二
function Person(name,age){
    this.name=name;
    this.age=age;    
};
Person.prototype.showName=function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id=id;
}
Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;
var s1=new Student("xxx",22,2017001);
var s2=new Student("www",23,2017002);
console.log(Person.prototype.constructor);//Person()
console.log(Student.prototype.constructor);//Person()