var o = {
    _x:1.0,//如果将全部的_x改成x会报错
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//2 2

var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//1 1 因为只能读不能改
o.x=2;
console.log(o.x)//1 o.x是添加了属性应为他的优先级低 

var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;
console.log(p1.age);