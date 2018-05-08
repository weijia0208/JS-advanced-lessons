//数组元素的增删改查的基本操作
var a = ["hello"];
a[1] = 3.14;//增：直接添加数组元素，通过方法添加元素参见后续章节
a[2] = "world";
console.log("删除a[2]前的数组a",a);
delete a[2];//删：思考此时数组长度是2还是3？如何彻底删除？直接修改length与pop方法
console.log("删除a[2]后的数组a",a);
a[0] = "XX";//改：修改数组元素a[0]
console.log(a[0]);//查

// 数组是对象的特殊形式，可以为数组添加对象属性，对于0至2的32次方之外的数，将作为普通对象的键来对待
// 数组特别之处在于，当使用使用2的32次方以内的非负整数作为属性名时（包括类型转换的数字），数组会自动维护其length属性，作为数组的元素，而不是数组对象的属性
var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]] = b[0];
console.log(b);//(4) [empty × 2, 3, undefined]

var a = [];
a[-1.23] = true; //创建一个名为“-1,23”的属性
a[1.23]="xx";//创建一个名为“1,23”的属性
a["100"] = 0;   // 数组的第101个元素
a[1.00] = "Hi"; //和a[1]相当
console.log(a.length);
console.log(a);

function f(){
	console.log(arguments);
}
f(1,2,3,'x');
//Arguments(4) [1, 2, 3, "x", callee: ƒ, Symbol(Symbol.iterator): ƒ]