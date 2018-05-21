//RegExp及String相关的正则属性和方法
/*
- global 默认为false
- ignore case 默认为false
- multiline 默认为false
- lastIndex 表示当前匹配内容的最后一个字符的下一个位置
- sourse 正则表达式文本字符串
*/

var reg1 = /\w/;
var reg2 = /\w/gi;
console.log(reg1.global,reg1.ignoreCase,reg1.multiline,reg1.lastIndex,reg1.source); //false false false 0 "\w"
console.log(reg2.global,reg2.ignoreCase,reg2.multiline,reg2.lastIndex,reg2.source); //true true false 0 "\w"

console.log(reg2.lastIndex);//0
reg2.test("abc23def"); 
console.log(reg2.lastIndex); //1
reg2.test("abc23def"); 
console.log(reg2.lastIndex); //2
while (reg2.test("abc23def")){
    console.log(reg2.lastIndex); //3 4 5 6 7 8
}


var reg3 = /\w/gi;
var str = "slfls3r3sfsf";
var returnArray1 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray1);//1 s

var returnArray2 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray2);//2 l



