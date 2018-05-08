//创建数组
var arr2=new Array(5);
console.log(arr2);//长度是5
console.log(arr2[1]);//undefined

var arr2=new Array("5");
console.log(arr2);//["5"]

var arr3=new Array(1,2,3,4);
console.log(arr3);// (4) [1, 2, 3, 4]

//数组直接量中的值不一定要是常量，可以是任意的表达式
var base = 1024;
var table = [base,base+1,base+2,base+3];

//也可包含对象直接量或其他数组直接量
var b = [[1,{y:2}],[2,{x:3}]];

var arr22=[];
for(var i=0;i<5;i++){
	document.onclick=function(){
		arr22[i]=i;
	}
}
//点击之后
console.log(arr22)//(6) [empty × 5, 5] 添加了5

//数据类型思考：
var a1=[1,2,3];
var a2=a1;
a2.length=0;
console.log(a1,a2);// [] [] a1是对象，a1,a2指向同一空间

var a3=[1,2,3];
var a4=a3;
a4=[];
console.log(a3,a4);//4 (3) [1, 2, 3] []

var arr=[1,2,3];
delete arr[2];
console.log(arr);// (3) [1, 2, empty]

var p=arr.pop();
console.log(p);//3
console.log(arr)//(2) [1,2]