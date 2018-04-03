var a = 10;
var b = 20;
function fn(){
	var a = 100,
		c = 200;
	function bar(){
		var a = 500;
	 		d = 600;
	}
	bar();
	console.log(a,b,c,d);
}
fn(); // 100 20 200 600

var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo(); //Jack 找到最初定义的地方