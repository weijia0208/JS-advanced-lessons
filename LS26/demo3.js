//使用let可以避免var所带来的问题
let userId = 123;
document.onclick = function(){
    console.log("userId = ",userId);    
};
let a=2,b=3;
if(a<b){
    let userId = 234;
}
//123

//let定义的变量并不像var那样直接作为全局对象的属性