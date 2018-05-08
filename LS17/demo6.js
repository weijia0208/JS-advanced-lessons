//数组的原型方法

//Array.prototype.reverse() 逆置
var arr1 = [1,2,3];
arr1.reverse();
console.log(arr1);//[3,2,1]

//Array.prototype.sort(compareFunction？) 按字母表顺序排列
var arr2 = ["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);//["apple","banana","orange","pear"]

//sort()
var arr3=[-1,-20,7,50];
arr3.sort();
console.log(arr3);//(4) [-1, -20, 50, 7]

arr3.sort(function (a,b) {return a-b;});//对于数字类型，大于0则交换，冒泡排序
//[-20,-1,7,50]

//不破坏性
//Array.prototype.concat  将两个数组合并不破坏原型
var arr4=["banana","apple"];
var arr5 = ["pear","orange"];
var newArray = arr4.concat(arr5);
console.log(newArray,arr4,arr5); //(4) ["banana", "apple", "pear", "orange"] (2) ["banana", "apple"] (2) ["pear", "orange"]

//Array.prototype.slice(begin?,end?) 切分
var arr6 = [1,2,3,4,5];
var newArray = arr6.slice(2,4);
console.log(newArray,arr6);  // (2) [3, 4] (5) [1, 2, 3, 4, 5]
var newArray1=arr6.slice(2);
console.log(newArray1,arr6)  // (3) [3, 4, 5] (5) [1, 2, 3, 4, 5]

//Array.prototype.join(separator?)
var arr7 = [3,4,5];
var joinReturn = arr7.join("--");
console.log(joinReturn,arr7);   // 3--4--5 (3) [3, 4, 5]
console.log(typeof joinReturn);  // string
//稀疏矩阵
console.log([3,,,,,,5].join("*"));  //3******5

/*****************
searchElement
要查找的元素
fromIndex
开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。
如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，
以此类推。 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于0，
则整个数组都将会被查询。其默认值为0.
*******************/
//Array.prototype.indexOf(searchValue,startIndex?)
var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));//2
console.log(arr8.indexOf(5,3));//3
console.log(arr8.indexOf(5,5));//6

//Array.prototype.lastIndexOf(searchElement,startIndex?)
console.log(arr8.lastIndexOf(5));//6
console.log(arr8.lastIndexOf(5,3));//3
console.log(arr8.lastIndexOf(5,5));//3

