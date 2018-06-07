//变量共享问题
for(var i=0;i<3;i++){
    setTimeout(function(){
        console.log(new Date,i);
    },1000*i);
}
console.log("i:",i);

//通过IIFE解决变量共享问题
for(var i=0;i<3;i++){
    (function(j){
        setTimeout(function(){
            console.log(new Date,j);
        },1000*i);
    })(i);
}