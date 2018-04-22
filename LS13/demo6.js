//--JS对象是若干无序属性的集合（数据属性、访问器属性、内部属性）
//--生成对象的3种方式：字面量直接生成、Object静态方法、构造函数实例化对象
var objProto = {
    z:3
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log(obj.toString);//原型链上有toString属性

for(var k in obj){//通过for...in遍历所有原型链上的属性
    console.log(k,obj[k]);//不能遍历到toString
}