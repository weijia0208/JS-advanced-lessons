//ES5 中没有块作用域
{
    var a = 20;
}
console.log("大括号外依然能访问到a:",a);  //20

for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out of for ",i);  //5

if(true){
    var a = 20;
}
console.log(a); //20

if(false){
    var b = 30;
}
console.log(b);  //undefined
