function thisTest(){
    "use strict"
    console.log(this);
}
thisTest();

//严格模式检测
//"use strict"  true
function isStrictMode() {
    return this == undefined?true:false;
}
isStrictMode();//false