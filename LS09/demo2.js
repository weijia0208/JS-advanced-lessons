//new Function不一定遵从静态词法作用域
var scope = "global";
function checkScope(){
	var scope = "local";
	return function(){
		return scope;
	};
}
console.log(checkScope()());
//local
undefined
var scope = "global";
function checkScope(){
	var scope = "local";
	return new Function("return scope;");
}
console.log(checkScope()());
//global