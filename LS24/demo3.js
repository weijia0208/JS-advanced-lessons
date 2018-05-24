//HTML事件响应处理
//<div id="div1" onclick="div1click()"></div>

//DOM0级事件响应处理
/*
window.onload = function(e){
    var div1 = document.getElementById("div1");
    var eventHandler = function(e){
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    //div1.onclick = function(){
    //    console.log("xx");
    //}//覆盖掉之前的绑定事件
}
*/

//DOM2级事件处理
window.onload = function(e){
    var div1 = document.getElementById("div1");
    var eventHandler = function(e){
        console.log(e.clientX,e.clientY);
    }
    div1.addEventListener("click",eventHandler); //事件监听
    //div1.removeEventListener("click",eventHandler);//取消事件响应处理
    div1.addEventListener("click",function(){
        console.log("xx");
    });
    //两个都输出
}