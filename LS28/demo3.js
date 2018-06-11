//对Number的扩展

//Number.isFinite(); //用来检查一个数值是否为有限的
Number.isFinite(15); //true
Number.isFinite(0.8); //true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false

//Number.isNaN()//用来检查一个值是否为NaN。
Number.isNaN(NaN); // true
Number.isNaN(15); // false
Number.isNaN('15'); // false
Number.isNaN(true); // false
Number.isNaN(9/NaN); // true
Number.isNaN('true'/0); // true
Number.isNaN('true'/'true') // true

//它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，
// 而这两个新方法只对数值有效，非数值一律返回false。
isFinite(25); // true
isFinite("25"); // true
Number.isFinite(25); // true
Number.isFinite("25"); // false
isNaN(NaN); // true
isNaN("NaN"); // true
Number.isNaN(NaN); // true
Number.isNaN("NaN"); // false

//6.3 Number.parseInt(), Number.parseFloat()
//ES6将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
// ES5的写法
parseInt('12.34'); // 12
parseFloat('123.45#'); // 123.45
// ES6的写法
Number.parseInt('12.34'); // 12
Number.parseFloat('123.45#'); // 123.45

//这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。
Number.parseInt === parseInt // true
Number.parseFloat === parseFloat // true


