var obj = {};
obj.x = 2;//直接添加属性
console.log(obj.x);//通过.访问属性
obj.x = 5;//设置属性
console.log(obj["x"]);//通过[]访问属性
delete obj.x;//删除属性
console.log(obj.x);

var obj2 = {
    id_1:2,
    id_2:4,
    id_3:6,
    id_4:8,
    id_5:10
};
for(var i=0;i<5;i++)
{
    console.log(obj2["id_"+i]);
}

var obj3 = {};
for(var i=0;i<10;i++){
    obj3.i = i;
}//9

var obj4 = {};
for(var i=0;i<10;i++){
    obj4[i] = i;
}//9