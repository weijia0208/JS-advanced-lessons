var name = "Jack";
function echo() {
    console.log(name,age);  //访问的是全局的name
}
function foo() {
    var name = "Bill";
    var age = 23;
    echo();
}
foo();  //Jack age会报错

//全局变量与局部变量
var x = "outside f1";
var f1 = function () {
    //var x = "inside f1";//如果没有这行，则两次输出都为outside
    console.log(x);
};
f1();
console.log(x);