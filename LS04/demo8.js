
var i = "1";
switch(i){
    case 1:
        console.log("case 1 Number");
        break;
    default:
        console.log("default");
}     //default


var i = "1";
switch(i){
    case 1:
        console.log("case 1 Number");
        break;
    case "1":
        console.log("case 1 String");
        break;
    default:
        console.log("default");
}    //case 1 String

// var j = 23;
// var j = "23";
// var j = new String("23");
var j = new Number(23);
switch (j){
    case 23:
        console.log("case_111");
        break;
    case "23":
        console.log("case_222");
        break;
    case new Number(23):
        console.log("case_333");
        break;
    default:
        console.log("case_default");
}


// 在switch语句中使用表达式，如下
var i = 65;
switch(true){ //思考若是改为 switch(new Boolean(true)){ 会怎样
    case i>=60:
        alert('及格');
        break;
    case i<60:
        alert('不及格');
        break;
    default:
        alert('default');
}