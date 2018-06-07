//ES6中let和const不进行变量提升特性
console.log(a);
var a = 1;
console.log(a);
//undefined 1

var a;
console.log(a);
a = 1;
console.log(a);

//
var temp = new Date();
function f(){
    console.log(temp);
    if(false){
        var temp = 'Hi!';
    }
}
f();//undefined

var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        let temp = "Hi!";
    }
}
f(); //输出时间

var temp = new Date();
function f() {
    console.log(temp);
    var temp = "Hi!";
    
}
f();//报错 temp is not defined

//let和const不存在变量提升
console.log(a);//报错
let a = 2;
console.log(a);