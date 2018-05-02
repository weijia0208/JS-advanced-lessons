function Point(x,y){
    this.x=x;
    this.y=y;
}
var p=new Point(2,3);
console.log(p);//{x:2,y:3}

console.log(window.x,window.y);//undefined undefined
