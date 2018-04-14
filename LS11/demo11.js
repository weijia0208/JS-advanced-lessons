function f1(){
	var x=1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3=f1();
console.log(f3);  //1
console.log(f3);  //1

console.log(f3()); //1
console.log(f3()); //2

function createInc(startValue){
	return function(step){
		startValue += step;
		return startValue;
	}
}
var inc = createInc(5);  
console.log(inc(1));  //6
console.log(inc(2));  //8
inc = createInc(5); //相当于新创建了一个闭包，前边的闭包释放掉了
console.log(inc(1));//6
var inc2=createInc(5);//形成两个独立闭包
console.log(inc(1));//9
console.log(inc2(1));//6

function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//1
a();//2
b();//1