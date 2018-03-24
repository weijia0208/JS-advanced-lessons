function foo(x) {
    x.push(4);
    x = [5,6,7];
    x.push(8);
    //console.log(x);  5,6,7,8
}
var a = [1,2,3];
foo(a);
console.log(a); //1,2,3,4

// 存在二义性的语句，要避免有二义性的语句
var max = function (x,y) {
    return x>y?x:y;
};
// 下述代码是对象还是语句块
{
    foo:max(2,3)
}

// 存在二义性的语句 补充一
var max = function (x,y) {
    return x>y?x:y;
};
var x = {
    foo:max(2,3)
}

// 存在二义性的语句 补充二
var max = function (x,y) {
    return x>y?x:y;
};
{
    console.log(123);
    console.log(456);
    foo:max(2,3)
}