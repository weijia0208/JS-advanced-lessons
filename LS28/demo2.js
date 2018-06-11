//对RegExp的扩展
//1.参数是字符串，这时第二个参数表示正则表达式的修饰符（flag）
var regex = new RegExp('xyz','i');
//var regex = /xyz/i;

//2.参数是正则表达式，这时会返回一个原有正则表达式的拷贝
var regex = new RegExp(/xyz/i);
//var regex = /xyz/i;
//ES5中不允许此时使用第二个参数，添加修饰符，否则会报错

// 而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。
new RegExp(/abc/gi,'i').flags //"i"

//(粘连sticky)修饰符
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;
r1.exec(s); // ["aaa"]
r2.exec(s); // ["aaa"]
r1.exec(s); // ["aa"]
r2.exec(s); // null
//上面代码有两个正则表达式，一个使用g修饰符，另一个使用y修饰符。
// 这两个正则表达式各执行了两次，第一次执行的时候，两者行为相同，剩余字符串都是_aa_a。
//由于g修饰没有位置要求，所以第二次执行会返回结果，而y修饰符要求匹配必须从头部开始，所以返回null。

var r = /hello\d/y;
r.sticky //true
