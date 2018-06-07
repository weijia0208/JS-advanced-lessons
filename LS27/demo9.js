//对象的解构赋值
var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);

// 对象的解构与数组有一个重要的不同
// 数组的元素是按次序排列的，变量的取值由它的位置决定
// 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
var { bar2, foo2 } = { foo2: "ccc", bar2: "ddd" };//顺序不同，没关系
console.log(foo2,bar2);

var { baz3 } = { foo3: "ccc", bar3: "ddd" };
console.log(baz3);

//键值的作用只用来匹配，不定义变量
var {foo4:baz4}={foo4:'aaa',bar4:'bbb'};
console.log(baz4); //aaa

let obj1 = {first:'hello',last:'world'};
let {first:f,last:l} = obj1;
console.log(f,1); //hello world

let{first,last}=obj1;
console.log(first,last); //hello world

//和数组一样，解构也可以用于嵌套结构的对象,如果是键值对的情况，键只用于匹配，真正赋给的是对应的值
var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2;
console.log(x); // "Hello"
console.log(y); // "World
console.log(p);//报错

var {p:p} = obj2;
console.log(p); //['hello',{y:'world'}]
