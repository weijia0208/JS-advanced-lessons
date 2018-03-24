
//number实例方法
var n1 = 12345.6789;
console.log(n1.toFixed(2)); // 将一个数字转换为指定小数位数的字符串
console.log(n1.toPrecision(3)); // 将一个数字在对象的值超出指定位数时，将其转换为指数计数法
console.log(n1.toString()); // 使用指定的进制，将一个数字转换为字符串，不传入参数，默认为十进制
console.log(n1.toExponential(2)); // 将一个数字表示指数类型，参数表示小数点后的位数

//注意Math的用法
console.log(Math.floor(3.8)); // floor 向下取整 3
console.log(Math.floor(-3.8)); //-4
console.log(Math.ceil(3.2)); // ceil 向上取整 4
console.log(Math.ceil(-3.2)); // -3
console.log(Math.round(-3.2)); // round 标准的四舍五入 // -3
console.log(Math.round(-3.5)); // -3
console.log(Math.round(-3.8)); // -4