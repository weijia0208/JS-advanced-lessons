//添加属性
var obj = {
    x:1,
    y:2
};
//1.直接添加，其特性默认值都为true
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}//x 1  y 2  z 3

//2.通过defineProperty 除了手动修改之外其他默认值都为false
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}//x 1  y 2
console.log(obj.w);// 456