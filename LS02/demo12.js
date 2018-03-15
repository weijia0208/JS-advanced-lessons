//比较运算符 与 隐式类型转换
var a = 3;
var b = 4;
console.log(typeof (a>b),a>b);   //boolean false
console.log(typeof (a==b),a==b);
console.log(typeof (a<b),a<b);

//算数运算符 与 隐式类型转换 + -
var c = "img" + 3 +".jpg";
var d = "23" - 5;
console.log(c,d);    //img3.jpg 18
typeof(d);    //number

//逻辑运算符 与 隐式类型转换 + -
var e = !23;          //false
var f = !!34;//true   //!!""   !!0   !!"abc"  !!undefined  !!null   
var g = !!{};//false
console.log(e,f,g);



var h = {x:1};
//var h = "";   //undefined
if(h){
    console.log("h:",h);
} //h:{x:1}