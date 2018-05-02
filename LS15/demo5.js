objA={name:"AA",x:1};
objB={name:"BB",x:5};
objA.test=function(){
    console.log(this.name,this.x);
};
objA.test();//AA 1
objA.test.call(objB);//BB 5

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};
var me = {
    name:"QL"
};
bird.fly(5,6);//i'm: polly i can fly___,5,6
bird.fly.call(me,7,8);//i'm: QL i can fly___,7,8
