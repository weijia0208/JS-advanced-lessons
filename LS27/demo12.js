//1.交换变量的值
var [x,y] = ["a","b"];
[x,y] = [y,x];
console.log(x,y); // b a

//2.从函数返回多个值
function example(){
    return [1,2,3];
}
var [a,b,c] = example(); 
console.log(a,b,c); //1 2 3

function example(){
    return {
        foo:1,
        bar:2
    };
}
var {foo,bar} = example();

//3.函数参数的定义
//参数是一组有次序的值
function f([x,y,z]){
    console.log(x);
    console.log(y);
    console.log(z);
}
f([1,2,3]);

//参数是一组无次序的值
function f({x,y,z}){
    console.log(x);
    console.log(y);
    console.log(z);
}
f({z:3,y:2,x:1});  //1 2 3

//4.提取JSON数据
var jsonData = {
    id:42,
    status:"OK",
    data:[867,5309]
};
let{id,status,data:number} = jsonData;
console.log(id,status,number);  // 42, "OK", [867, 5309]
let {id,data} = jsonData;
console.log(id,data); //42 [867,5309]

//5.函数参数的默认值
jQuery.ajax = function (url,{
    async = true,
    beforeSend = function(){},
    cache = true,
    complete = function(){},
    crossDomain = false,
    global = true,
    //... more config
}){
    
};

