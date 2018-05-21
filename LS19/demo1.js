//创建正则对象

//方式一
var reg1 = /[bcf]at/gi;
//方式二 通过RegExp构造函数来实例化正则对象
var reg2=new RegExp(/[bcf]at/,"gi");
var reg3 = new RegExp(/[bcf]at/,"gi");

console.log("a fAt bat ,a faT cat".match(reg1));
console.log("a fAt bat ,a faT cat".match(reg2));
console.log("a fAt bat ,a faT cat".match(reg3));
//(4) ["fAt", "bat", "faT", "cat"]
