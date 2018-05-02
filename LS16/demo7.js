//JavaScript的原型继承是对象——对象的继承
var superObj={
	x:1,
	y:2
};
var subObj_First=Object.create(superObj);
var subObj_Second=Object.create(superObj);
subObj_First.__proto__.x=5;
console.log(subObj_Second.x);//5

