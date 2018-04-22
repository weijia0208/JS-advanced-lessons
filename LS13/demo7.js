//JS对象属性特性及其设置
//JS对象属性（数据属性）的特性
//- 属性的值（[[value]]），对应属性的值
//- 可写特性（[[writable]]），确定属性是否可写性
//- 可配置特性（[[configurable]]），确定属性是否能删除和其他特性是否可配置
//- 可枚举特性（[[enumerable]]），属性是否可枚举

//Object.defineProperty(对象,"属性",{特性：设置});
var obj = {
    x:1,
    y:2
};
//Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}//y 2

//一旦确定特性之后，没法再配置改变属性值