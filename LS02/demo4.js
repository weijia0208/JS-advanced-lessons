var a = new Number(200);
var b = new Number(200);
console.log(a == b);  //false
console.log(a === b);  //false
a = b;
console.log(a == b);  //true
console.log(a === b);  //true
b = new Number(200);
console.log(a == b);   //false




var c = 123;
var d =new Number(123);
console.log(c == d);    //true   d转换了
console.log(c === d);    //false



var a5 = {x:1,y:2};
var b5 = {x:1,y:2};
console.log(a5 === b5);    //false
console.log(a5.x === a5.x);   //true  属性值存放在堆区，比较时是值比较