//为什么要使用Symbol
// ES5里面对象的属性名都是字符串，
// 如果你需要使用一个别人提供的对象，你对这个对象有哪些属性也不是很清楚，
// 但又想为这个对象新增一些属性，那么你新增的属性名就很可能和原来的属性名发送冲突
// 例如：
var obj = {
    x:1,
    y:2,
    moveTo:function(x,y){
        this.x = x;
        this.y = y;
    }
}
obj.moveTo = function(x,y){
    console.log("方法被覆盖了");
};
obj.moveTo(0,0);

//定义Symbol变量，注意Symbol是基本数据类型的一种，不能用new
let s = Symbol();
typeof s; //"symbol"
s instanceof Symbol; //false

var s1=Symbol('foo');
var s2=Symbol('bar');
console.log(s1); //Symbol(foo)
console.log(s2); //Symbol(bar)
console.log(s1.toString()); //"Symbol(foo)"
console.log(s2.toString()); //"Symbol(bar)"

var s1=Symbol();
var s2=Symbol();
s1 === s2; //false

var s1 = Symbol("foo");
var s2 = Symbol("foo");
s1 === s2 // false

const obj = {
    toString() {
        return 'abc';
    }
};
const sym = Symbol(obj);
sym // Symbol(abc)

//Symbol值不能与其他类型的值进行运算，会报错。
var sym = Symbol('My symbol');
//"your symbol is " + sym;//报错
//但是，Symbol值可以显式转为字符串。
var sym = Symbol('My symbol');
String(sym); // 'Symbol(My symbol)'
sym.toString(); // 'Symbol(My symbol)'

