console.log(typeof new Function());// function 
console.log(typeof new Array());	 //object  创建了一个数组对象
console.log(typeof new Date());	       //object

console.log(Function instanceof Function);  //true
console.log(Function instanceof Object);   //true
console.log(Array instanceof Function);    //true
console.log(Array instanceof Object);     //true
console.log(Date instanceof Function);    //true
console.log(Date instanceof Object);      //true
console.log(Math instanceof Function);     //false
console.log(Math instanceof Object);      //true
console.log(JSON instanceof Function);     //false
console.log(JSON instanceof Object);     //true