//转义字符 \n \" \' \\
console.log("abc\ndefghi\\\n\'mn\'");   
//输出结果:abc
//        ndefghi\
//        'mn'
// "\n"是换行；" \" "是双引号； "\'"是单引号； "\\"反斜杠


var str = "abc_def_ghi_jkl_mn";

//split(参数1，参数2)    split是分割 参数1是间隔，参数2是长度
str.split("_");           //["abc","def","ghi","jkl","mn"]
str.split("_",2);         //["abc","def"]

//concat将参数的值加在字符串后边
str.concat("-opq");      //"abc_def_ghi_jkl_mn-opq"

//substr(参数1，参数2)  参数1是开始下标，参数2是截取长度
str.substr(4,7);         //"def_ghi"

//substring(参数1，参数2)  参数1和参数2都是下标，截取参数1到参数2
str.substring(4,7);      //"def"

//slice(参数1，参数2)  参数可正可负，负数从字符串末尾开始，从参数2开始截取到参数2之前
str.slice(2);       //"c_def_ghi_jkl_mn"
str.slice(2,5);     //"c_d"
str.slice(-2);      //"mn"
str.slice(2,-2);    //"c_def_ghi_jkl_"
str.slice(-2,20);    //""
str.slice(-2,17);    //"m"
str.slice([2],undefined);   //"c_def_ghi_jkl_mn"
str.slice(-2,-3);      //""
str.slice(-3,-2);      //"_"

//slice中的参数只能从左到右不能从右到左