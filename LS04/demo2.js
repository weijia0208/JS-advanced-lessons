//不同类型的表达式
23;  //其中的23为原始表达式
obj = {x:2}; // ={x:2}为对象初始化表达式
arr = [1,2]; // =[1,2]为数组初始化表达式
var foo = function(){
    console.log("foo"); // = function(){}为函数定义表达式
};
obj.x; //obj.x为属性访问表达式
foo(); //foo()为函数调用表达式
2+3; //2+3为算数运算表达式
2>3; //2>3为关系运算表达式
1&&2; //1&&2为逻辑运算表达式

//关于语句
2>3; //表达式语句

//条件语句
var a=2,b=3;
if(a>b){
    console.log("a > b");
}else{
    console.log("a < b");
}

function foo(){
	var a=b=3;
}
foo();
console.log("b:",b);//3
console.log("a:",a);//报错

//循环语句
for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out for ",i);