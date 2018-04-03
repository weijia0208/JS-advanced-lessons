console.log(a,b);// u u
var b = 23;
console.log(a,b);//u 23
var a = b;
console.log(a,b);// 23 23

console.log(obj1,obj2);//u u
var obj1 = {x:23};
console.log(obj1,obj2);//{x:23} u
var obj2 = obj1;
console.log(obj1,obj2);//{x:23} {x:23}
obj2.x =25;
console.log(obj1,obj2); //{x:25} {x:25}

function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo(); //f_2

foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

console.log(foo);  //undefined
foo();
var foo = function(){
    console.log("foo");
};       
//报错   当function前有运算符的话，认定为表达式，不提升

console.log(foo);
var foo = function(){
	console.log("foo");
};
foo();  //undefined   foo

AA();
function AA(){
	console.log("AA_1");
}
var AA = function AA(){
	console.log("AA_2");
};
AA();
//AA_1
//AA_2
//上边代码等价如下
function AA(){
    console.log("AA_1");
}
var AA;
AA();   //解析器对于已声明的变量不会进行二次声明
AA = function AA(){
    console.log("AA_2");
};
AA();