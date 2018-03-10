按值传递
var a = "Hello World";
function foo(arr){
    console.log(arr);   //Hello World
    arr = "Hai";
    console.log(a,arr);   //Hello World Hai
};
foo(a);
console.log(a);  //Hello World


按引用传递
var a = {value:1};
function fn_a(arg){
    arg.value=3;
};
fn_a(a);
console.log(a.value);  //3

var a = {value:1};
function fn_a(arg){
    arg = {value:2}   //arg创建了一个新的对象，指向新的内存空间
};
fn_a(a);
console.log(a.value);  //1