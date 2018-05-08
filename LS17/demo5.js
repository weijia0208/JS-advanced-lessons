//数组的方法
const bar = ["a", "b", "c"];

//Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例
Array.from(bar);// ["a", "b", "c"]
Array.from('foo');// ["f", "o", "o"]

/*
Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
 Array.of() 和 Array 构造函数之间的区别在于处理整数参数：
Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为7的空数组
（注意：这是指一个有7个空位的数组，而不是由7个undefined组成的数组）
*/
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]
Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]

//Array.isArray() 用于确定传递的值是否是一个Array。
var arr1 = [1,3,4];
console.log(Array.isArray(arr1));

//数组添加删除元素的原型方法 破坏性
var arr2=[1,3,5,7];
var shifElement=arr2.shift();
console.log(shifElement,arr2);// 1 (3) [3, 5, 7]

var arr2 = [1,3,5,7];
var newLength = arr2.unshift(1,2);//返回新的数组长度
console.log(newLength,arr2);//6 (6) [1, 2, 1, 3, 5, 7]

var popElement = arr2.pop();//返回pop出去的元素
console.log(popElement,arr2);//7 (5) [1, 2, 1, 3, 5]

var newLength = arr2.push(77,88);//返回新的数组长度
console.log(newLength,arr2);//7 (7) [1, 2, 1, 3, 5, 77, 88]

