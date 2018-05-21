// 一、g全局、i大小写、m换行 修饰符的作用
// 二、正则对象的两种基本使用方式 1.字符串.字符串方法（正则对象） 2.正则对象.正则方法（字符串）

var regExp=/ab/i;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult); //[Ab]

var regExp=/ab/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);// ["Ab", "aB"]

var regExp=/a*b/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult); //["Ab", "aaB", "b"]

var regExp=/a.b/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);  //["aaB"]

console.log("a2b3c4d".replace(/[2-3]/,'X')); // aXb3c4d
console.log("a2b3c4d".replace(/[2-3]/g,'X'));  // aXbXc4d

/*
test() 方法用于检测一个字符串是否匹配某个模式，
也就是检测指定字符串是否含有某个子串，如果字符串中含有匹配的文本，返回 true，否则返回 false。
*/
var regExp = /a/gi;
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 
//test每次循环从上一次开始
while (regExp.test("aaa")){
    console.log(regExp.lastIndex);//每次执行后从哪开始重新匹配？
} //1 2 3
