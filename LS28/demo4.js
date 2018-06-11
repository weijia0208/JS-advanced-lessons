//对Array的扩展
let arrayLike = {
    '0':'a',
    '1':'b',
    '2':'c',
    length:3
};
//ES5的写法
var arr1 = Array.prototype/slice.call(arrayLike);
//ES6的写法
let arr2 = Array.from(arryLike); //['a','b','c']

//arguments
function foo(){
    var args = Array.from(arguments);
    console.log(args);
}

//只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组
Array.from('hello');
// ['h', 'e', 'l', 'l', 'o']
let namesSet = new Set(['a', 'b']);
Array.from(namesSet); // ['a', 'b']

//扩展运算符背后调用的是遍历器接口（Symbol.iterator），如果一个对象没有部署这个接口，就无法转换。Array.from方法则是还支持类似数组的对
//象。所谓类似数组的对象，本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组，而此
//时扩展运算符就无法转换。
Array.from({ length: 3 });
// [ undefined, undefined, undefined ]
//上面代码中，Array.from返回了一个具有三个成员的数组，每个位置的值都是undefined。扩展运算符转换不了这个对象。

//关于Array.of静态方法 用于将一组值转换为数组
Array.of(3,11,8); ''[3,11,8]
Array.of(3); //[3]
Array.of(3).length; //1
//这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
Array(); // []
Array(3); // [, , ,]
Array(3, 11, 8); // [3, 11, 8]

//Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一。
Array.of(); // []
Array.of(undefined); // [undefined]
Array.of(1); // [1]
Array.of(1, 2); // [1, 2]
//Array.of总是返回参数值组成的数组。如果没有参数，就返回一个空数组

//ES5可以用下面的代码模拟实现Array.of方法
function ArrayOf(){
    return [].slice.call(arguments);
}


//fill方法使用给定值，填充一个数组。
['a','b','c'].fill(7);
// [7, 7, 7]

['x','y','z']

[1, 4, -5, 10].find(
    function(n){
        return n<0;
    }
);
//上面代码找出数组中第一个小于0的成员。
//[1, 4, -5, 10].find((n) => n < 0);// -5 箭头函数的表示形式

[1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
}); // 10
[1,5,10,15].findIndex(function(value,index,arr){
    return value > 9;
}) //2






