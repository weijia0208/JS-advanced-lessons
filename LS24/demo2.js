window.onload = function(e){
    //console.log("e:",e);
    //console.log(e.target);//document
    var div1 = document.getElementById("div1");
    var eventHandler = function(e){
        //console.log(e.type);
        //console.log(e.target);
        //console.log(e);
        //console.log(e.clientX,e.clientY);
        //console.log(this,"-----",e.target);
        //console.log(e);
        //console.log(e.__proto__);
        //console.log(e.__proto__.__proto__);
        //console.log(e.__proto__.__proto__.__proto__);
        //console.log(e.__proto__.__proto__.__proto__.__proto__);
        //for(var k in e){
        //    console.log(k,e[k]);
        //}
        //for(var k in e.__proto__){
        //    console.log(k);
        //}
        for(var k in e.__proto__.__proto__){
             console.log(k);
        }
        // for(var k in e.__proto__.__proto__.__proto__){
        //     console.log(k);
        // }
    }
    div1.onclick = eventHandler;

}