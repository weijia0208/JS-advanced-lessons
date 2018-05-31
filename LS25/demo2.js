/*****
异步的几种形式
******/

//1.函数回调
var arr1=[1,3,5,7,9];
console.log("arr1:",arr1);
var newArray1 = arr1.map(function(a){
	return a*a;
});
console.log("newArray1:",newArray1);
//arr1: (5) [1, 3, 5, 7, 9]
//newArray1: (5) [1, 9, 25, 49, 81]

var arr2= [1,3,5,7,9];
console.log("arr2:",arr2);
var newArray2 = arr2.filter(function (a) {//产生新数组，新数组的元素是返回为true的那些元素
    return (a>2&&a<8)?true:false;
});
console.log("newArray2:",newArray2);
//arr2: (5) [1, 3, 5, 7, 9]
//newArray2: (3) [3, 5, 7]

var LTimeOperation = function(taskID){
	var id = taskID;
	this.go = function(callback){
		console.log('Start LTimeOperation #'+id);
		var delay = parseInt((Math.random()*10000000)%5000);
		setTimeout(function(){
			console.log('task #'+id+'cost'+delay+'ms.');
			callback();
		},delay);
	}
};
function f2(){
	console.log('this is f2,i am callback!\n');
}
for(var i = 0;i<5;i++){
    var task = new LTimeOperation(i);
    task.go(f2);
}

//2.事件触发与事件监听
document.onclick = function(){
	console.log("click");
}

for(var i=0;i<5;i++){
    var btn=document.createElement("button");
    btn.setAttribute("id","btnId"+i);
    btn.setAttribute("style","width:200px");
    btn.setAttribute("style","height:20px");
    document.body.appendChild(btn);
}
for(var i=0;i<5;i++) {
    //(function (i) {
        document.getElementById("btnId" + i).addEventListener("click", function () {
            document.bgColor = "#"+i*2+i*2+i*2+i*2+"00";
            console.log("#"+i*2+i*2+i*2+i*2+"00");
        });
    //})(i);
}

//3.Promise