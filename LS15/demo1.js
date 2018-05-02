function thisTest(){
    console.log(this === window);
}
thisTest();//true

var a=10;b="Hi";
function thisTest2(){
    this.a=20;
    delete this.b;
    this.c="新添加属性";
}
thisTest2();
console.log(a,c);//20  "新添加属性"

