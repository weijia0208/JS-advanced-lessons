console.log("全局上下文-start");
var x = "家中环境-";
function goToStore_A(){
    console.log("goToStore_A 上下文-start");//设置断点
    var y = "文具店A环境-";
    goToBank_C();//设置断点
    // goToBank_D();//设置断点
    console.log("goToStore_A 上下文-end");//设置断点
}
function goToStore_B(){
    console.log("goToStore_B 上下文-start");//设置断点
    var y = "文具店B环境-";
    goToBank_C();//设置断点
    // goToBank_D();//设置断点
    console.log("goToStore_B 上下文-end");//设置断点
}
/********
var y = "2222";
*********/
function goToBank_C(){
    console.log("goToBank_C 上下文-start");//设置断点
    var z = "银行C环境-";
    //console.log(x+y+z);  //y会报错 遵从静态词法作用域
    console.log("goToBank_C 上下文-end");//设置断点
}
function goToBank_D(){
    console.log("goToBank_D 上下文-start");//设置断点
    var z = "银行D环境-";
    //console.log(x+y+z);
    console.log("goToBank_D 上下文-end");//设置断点
}
goToStore_A();//设置断点
// goToStore_B();//设置断点
console.log("全局上下文-end");//设置断点