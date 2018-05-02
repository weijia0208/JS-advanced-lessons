var point={
    x:0,
    y:0,
    moveTo:function(x,y){
        this.x=x;
        this.y=y;
    }
};
point.moveTo(1,1);//this在point上
console.log(point);