/*
*由于每一个Symbol值都是不相等的，这意味着Symbol值可以作为标识符，用于对象的属性名，
*就能保证不会出现同名的属性。
*这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
*使用Symbol是用[]，而不是用点操作符
*/
var mySymbol = Symbol();
//first
var a = {};
a[mySymbol] = 'Hello!';
//second
var a = {
    [mySymbol]:"Hello!"
};
//third
Object.defineProperty(a,mySymbol,{value:'Hello!'});
a[mySymbol] //"Hello!"

var aSymbol = Symbol("abc");
var obj = {
    [aSymbol]:"hello"
};
Object.defineProperty(obj,Symbol("abc"),{value:'World!'});
console.log(obj); //有两个属性

var sym1 = Symbol("xx");
var sym2 = Symbol("xx");
var str1 = "xx";
var str2 = "xx";
var obj = {};
obj[sym1] = "12";
obj[sym2] = "34";
obj[str1] = "56";
obj[str2] = "78";
obj; //{"xx":"78",Symbol(xx):"12",Symbol(xx):"34"}


var mySymbol = Symbol();
var a = {};
a.mySymbol = 'hello'; //mySymbol是字符串
a[mySymbol] //undefined
a['mySymbol'] //'hello'
console.log(a); //{mySymbol:'hello'}

var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]:123,
    [myS2]:456
};
console.log(obj[myS1],obj[Symbol("xx")]);  //123 undefined
console.log(obj[myS2],obj["xx"]); //456 456
console.log(obj["myS1"],obj["myS2"]); //undefined undefined

//同理，在对象的内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中
// 如果不用[]的话相当于使用s对应的字符串定义属性
let s = Symbol();
let obj = {
    [s]: function (arg) {console.log("xx");}
};
obj[s](123);


