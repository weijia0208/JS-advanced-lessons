// 实例一 高阶函数一般应用 01
function add(x, y, f) {
    return f(x) + f(y);
}
add(2,3,function(z){return z*z;});
add(2,-3,Math.abs);//
add(2,3,Math.sqrt);//2的开平方加3的开平方

function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
function f1(x){
	return x+1;
}
function f2(x){
	return x-1;
}
function f3(x){
	return x*x;
}
foo(1,1,f1,f3);//1
foo(1,1,f3,f2);//2
foo(1,1,f1,f2);//4

//实例一  高阶函数一般应用 02
var word_2 = "do another thing.";
var function_1=function(callback){
    this.word_1 = "do something.";
    console.log(this.word_1);
    (callback && typeof(callback) === "function") && callback();
};
var function_2=function(){console.log(this.word_2)};
function_1(function_2);
//do something 
//do another thing
