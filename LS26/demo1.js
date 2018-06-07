//1.var定变量在ES5中没有块作用域{ }外可以访问{ }内的变量
{
    var a=23;
}
console.log(a); //23

for(var i=0;i<5;i++){
    console.log("hello,world",i);
}
console.log("i:",i); //5

//2.容易造成变量污染
var userId = 123;
document.onclick = function(){
    console.log("userId = ",userId);
}
var a=2,b=3;
if(a<b){
    var userId = 234;
}// 输出234

/*
//可以通过IIFE来解决上述问题
(function () {
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());
*/