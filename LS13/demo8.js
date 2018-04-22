var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//如果改为true则可以改变name属性的值
    configurable:false,//如果改成true可以删除
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Mike
delete person.name;
console.log(person.name);//Mike