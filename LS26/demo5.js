//ES6使用const来声明常量，也常用来声明不变的函数
const PI = 3.1415926
console.log(PI);
PI=3;//给常量再赋值报错

//声明时必须赋值，一旦声明必须立即初始化
const foo;
const foo=123;//对

//const 作用域与let相同
if(true){
    const max=5;
}
console.log(max); //报错 max is not defined

//声明不变的函数
const fee = function(){

};

//const指向的对象引用不可变，但其属性或元素是可变的
const a = [];
a.push(123,234); //可以
a.length = 1; //可以
a = "str"  //报错，因为a是const其元素或属性可改，但其引用不能修改类似于const指针
