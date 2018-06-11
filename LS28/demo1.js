//对String的扩展
//ES6为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历
for(let codePoint of 'foo'){
    console.log(codePoint);
}

for(let key in 'foo'){
    console.log(key);
}

//提供新的方法用于查找、判断和生成字符串
var s = 'Hello World!';
s.startsWith('Hello'); //true
//var reg1 = /^Hello/gi;
//var reg2 = /\dHello/gi;
s.endsWith('!'); //true
s.includes('o'); //true
//第二个参数表示开始搜索位置
s.startsWith('world',6); //true
s.endsWith('Hello',5); //true
s.includes('Hello',6); //false

//repeat方法返回一个新字符串，表示将源字符串重复N次
'x'.repeat(3); //"xxx"
'hello'.repeat(2); // "hellohello"
'na'.repeat(0); //""
//参数如果是小数，会被取整
'na'.repeat(2.9); //"nana"
//如果参数是负数或者Infinity会报错
'na'.repeat(Infinity);
//RangeError
'na'.repeat(-1); //报错


