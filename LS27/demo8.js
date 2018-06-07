/*
 ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值
 这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值
*/

//不用解构赋值方式定义变量
var a = 1;var b = 2;var c = 3;
console.log(a,b,c);

//用解构赋值方式定义变量
//Part 1111111111111111 数组的解构赋值
var [a, b, c] = [1, 2, 3];
console.log(a,b,c);

//let 也支持解构赋值
let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(foo,bar,baz);

let [,,xx]=["foo","bar","baz"];
console.log(xx); //"baz"

et [x, , y] = [1, 2, 3];
console.log(x,y);//1 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head,tail);//1 [2, 3, 4]

let [d, e, ...f] = ['a'];
console.log(d,e,f);//"a" undefined []

//注意：如果解构不成功，变量的值就等于undefined
var [foo2] = [];
var [bar2, fee2] = [1];
console.log(foo2,fee2);

//不完全解构的情况
let [x2, y2] = [1, 2, 3];
console.log(x2, y2);

let [a2, [b2], d2] = [1, [2, 3], 4];
console.log(a2, b2, d2);

//解构赋值中的默认值
var [foo3 = true] = [];//foo3 为 true
[x3, y3 = 'b'] = ['a']; // x3='a', y3='b'
[x4, y4 = 'b'] = ['a',undefined]; // x4='a'y4='b'
// ES6内部使用严格相等运算符（===），判断一个位置是否有值。
// 所以，如果一个数组成员不严格等于undefined，默认值是不会生效的
var [x5=1] = [undefined]; //x5=1
var [x6=1] = [null]; //x6=null

function f2(){
    return 2;
}
let [x7=f2()]=[1];
console.log(x7); //1

let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
//let [m4 = n4, n4 = 1] = []; // ReferenceError
//var [m4 = n4, n4 = 1] = []; -> var m4,n4; m4=n4;n4=1;console.log(m4,n4); //undefined,1
console.log(m1,n1,m2,n2,m3,n3);


let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a == b); //false

let a = [];
let b=[2,3,4];
a = b;
console.log(a == b); //true

