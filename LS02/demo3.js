引用赋值时指向同一块内存空间
var obj1 = {key:2};
var obj2 = obj1;
console.log(obj2.key)   //2
obj2.key = 3;
console.log(obj1.key)   //3
obj2 = {key:4};
console.log(obj2.key)  //4  因为obj2重新开辟了一块内存