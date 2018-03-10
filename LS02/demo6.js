         //NaN
var x = Number("xis012");
console.log(x);   //NaN
typeof NaN;        //number
isNaN;         //true


    //Infinity和-Infinity
var x = 2/0;
var y = -2/0;
console.log(x);   //Infinity
console.log(y);   //-Infinity
isFinite(x);   //false
isFinite(y);   //false
isFinite(21);  //true


    //0与-0
var a = 1/Infinity;
console.log(a);   //0
var a1 = 1/-Infinity;
console.log(a1);   //-0
var a2 = -1/Infinity;
console.log(a2);    //-0