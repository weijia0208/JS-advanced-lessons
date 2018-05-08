//Date方法

//Date静态方法（Date构造器函数对象的方法）GMT 格林尼治时间
console.log(Date.now());//以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算）
console.log((new Date()).getTime());

console.log(Date.parse("1970-01-01"));//dateTimeString字符串转换成毫秒
console.log(Date.parse("1970-01-02"));

console.log(Date.UTC(2017,9,1));////将给定的日期转换成毫秒,解释为UTC 协调世界时间

/*
getFullYear() 年
getMonth()  月
getDay() 星期
getDate() 日
getHours() 
*/
var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
console.log(d.getTimezoneOffset());
d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());

//Date原型方法 转成字符串相关
var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString());
console.log(d.toDateString(),"___",d.toLocaleDateString());
console.log(d.toJSON());
/*
 15:07:23 GMT+0800 (中国标准时间) ___ 下午3:07:23
 Sat Apr 21 2012 ___ 2012/4/21
 2012-04-21T07:07:23.234Z
*/

//计算下个月的几号是星期几
var today=new Date();
today.setMonth(6);
console.log(today);
console.log(today.getDay());
