//立即执行表达式 常见形式
(function max( x,y){
    console.log("the max is",x>y?x:y);
}(2,3));

(function (x,y){ //可以没有函数名
    console.log("the min is",x<y?x:y);
})(2,3); //注意小括号的位置

//注意：IIFE是表达式，要注意使用分号结尾，否则可能出现错误
(function() {
    console.log("111");
})();//没有分号的话会报错
(function () {
    console.log("222");
})()//不是独立执行的语句，是表达式，所以必须加分号

// 其他形式的IIFE 与运算符结合的写法
0&&function(a,b){
    return a>b?a:b;
}(5,9); //0
var i = function(){
    return 10;
}(); //i为10
true && function(a,b){
    return a>b?a:b;
}(5,9);//true
!function(x,y){
    return x==y?true:false; // === 返回true
}("5",5);//false