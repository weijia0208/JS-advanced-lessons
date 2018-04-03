//变量污染、变量共享问题,尤其是异步执行的情况下。如果是两个单独的文件的情况下，更容易造成变量污染
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//一长串代码后，假如看不见上述代码了
var a=2,b=3;
if(a<b){
    var userId = 234;
}

var userId = 123;
document.onclick = function(){
	console.log(userId);
};


(function(){
	var a = 2,b = 3;
	if(a<b){
		var userId = 234;
	}
}()); //变成局部作用域
//123