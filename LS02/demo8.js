var a;
console.log(a);     //undefined

a;    //报错


function foo(x,y) {
    console.log(x,y);//1 undefined
}
foo(1);   //1 undefined

function fee() {
    //没有返回值的情况
}
var feeReturnValue = fee();
console.log(feeReturnValue);//undefined


console.log(typeof null);//object