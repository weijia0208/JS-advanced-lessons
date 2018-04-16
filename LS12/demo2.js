var i = new String("str");          // String Object
var h = new Number(1);              // Number Object
var g = new Boolean(true);          // Boolean Object
var j = new Object({name : "Tom"}); // Object Object
var k = new Array([1, 2, 3, 4]);    // Array Object
var l = new Date();                 // Date Object
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");

console.log(Object instanceof Function);//T
console.log(Object instanceof Object);//T
console.log(Boolean instanceof Function);//T
console.log(Boolean instanceof Object);//T
console.log(String instanceof Function);//T
console.log(String instanceof Object);//T
console.log(Number instanceof Function);//T
console.log(Number instanceof Object);//T
console.log(Function instanceof Function);//T
console.log(Function instanceof Object);//T
console.log(Array instanceof Function);//T
console.log(Array instanceof Object);//T
console.log(Date instanceof Function);//T
console.log(Date instanceof Object);//T
console.log(Math instanceof Function);//T
console.log(Math instanceof Object);//F
console.log(JSON instanceof Function);//T
console.log(JSON instanceof Object);//F
console.log((new (new Function())) instanceof Function);//F