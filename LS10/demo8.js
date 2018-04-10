//ES5作用域 与 变量共享问题
function f(){
    var getNumFuncs = [];
    for(var i=0;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();//10
tmp[2]();//10
tmp[0]();//10

//以上代码等价于 存在变量共享问题
function f(){
    var getNumFuncs = [];
    var i=0;
    for(;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();//10
tmp[2]();//10
tmp[0]();//10

//IIFE 解决变量共享问题
function f(){
    var getNumFuncs = [];
    for(var i=0;i<10;i++){
        (function (j) {
            getNumFuncs[j] = function(){return j;};
        })(i);
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();//输出为3，tmp[0]()...tmp[9]()都为是期望的结果


//局部变量的案例
function f(){
    var getNumFuncs = [];
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return j;//如果return i;的话输出10
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();//9