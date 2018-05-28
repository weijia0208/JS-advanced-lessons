/*
window.onload = function(e){
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    div1.addEventListener("click",function(e){
        console.log("div1 click");
    },false);
    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);

    document.addEventListener("click",function (e) {
        console.log("document click");
    },false);

    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },false);
}//2 1 b d
*/

/*
window.onload = function(e){
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    div1.addEventListener("click",function(e){
        console.log("div1 click");
    },true);
    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },true);

    document.addEventListener("click",function (e) {
        console.log("document click");
    },false);

    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },true);
} //b 1 2 d
*/

/*
window.onload = function(e){
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    div1.addEventListener("click",function(e){
        console.log("div1 click");
    },false);
    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },true);

    document.addEventListener("click",function (e) {
        console.log("document click");
    },true);

    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },true);
} //d b 2 1
*/

window.onload = function(e){
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    div1.addEventListener("click",function(e){
        console.log("div1 click");
        e.stopPropagation();//阻止时间冒泡
    },false);
    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);

    document.addEventListener("click",function (e) {
        console.log("document click");
    },false);

    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },false);
}