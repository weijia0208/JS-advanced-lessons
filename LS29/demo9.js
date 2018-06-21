//函数默认值注意事项
function foo(x=5){
    let x =1; //报错
    const x = 2; //报错
    var x = 3;
}
foo();

//默认值顺序，参数一般有顺序，有默认值的参数应该是尾参数
//否则无法使有默认值的用默认值，没有默认值的用传递的参数
function f(x=1,y){
    rturn [x,y];
}
f(); //[1,undefined]
f(2); //[2,undefined]
f(,3); //报错

function f(x,y=1){
    return[x,y];
}
f(); //[undefined,1]
f(2); //[2,1]




