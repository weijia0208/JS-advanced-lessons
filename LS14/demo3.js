//属性访问链
var obj1={x:1};
var obj2=Object.create(obj1);
obj2.y=2;
var obj3=Object.create(obj1);
obj3.y=3;
obj2.__proto__.x = 5;
obj2.x;
obj3.x;
var proObj = {
    z:3
};

var proObj = {
    z:3
};

var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;
console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3
console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false

obj.z = 5;
console.log(obj.hasOwnProperty("z"));//true
console.log(obj.z);//5
console.log(proObj.z);//3