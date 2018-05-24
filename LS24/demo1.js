window.onload=function(){
    console.log("window onload");
    var div1=document.getElementById("div1");
    div1.onclick=function(){
       console.log("div1 onclick");
    }
    div1.ondrag=function(){
        console.log("div1 ondrag");
    }//拖拽
}
//div1.onclick=function(){
      // console.log("div1 onclick");
//}会报错没有在页面加载时绑定事件