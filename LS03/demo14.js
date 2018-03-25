//字符串比较
console.log("A" > "a"); //false
console.log("B".localeCompare("A")); //1 考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("A")); //0
console.log("A".localeCompare("B")); //-1
console.log("C".localeCompare("c")); //1

//字符串链接
var a = "abc";
var b = "def";
var c = a+b;   //abcdef

var str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);

var arr6 = "abcdef".split("c");//返回数组
var arr7 = "abcdef".split("c",1);
var arr8 = "abcdef".split("c",2);

var str9 = "abcdef".charAt(2);
var str10 = "abcdef".charCodeAt(3);
var str11 = "abcdefabcdef".indexOf("d",1);
var str12 = "abcdefabcdef".indexOf("d",4);//从第4个开始找

//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度
console.log(str13,str14);//str13 未受到破坏
var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//str13 未受到破坏

//字符串变换
//String.prototype.trim( );
//String.prototype.concat(str1?,str2?);
//String.prototype.toLowerCase( );
//String.prototype.toLocaleLowerCase( );
//String.prototype.toUpperCase( );
//String.prototype.toLocaleUpperCase( );
var str16 = "aaa".concat("bbb");//返回字符串
var str17 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串
var str18 = "abcDEF".toLowerCase();//将大写变成小写
var str19 = "abcDEF".toUpperCase();//将小写变成大写

//检索和比较
//String.prototype.indexOf(searchingString,position?);
//String.prototype.lastIndexOf(searchingString,position?);
//String.prototype.localeCompare(other);
var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");