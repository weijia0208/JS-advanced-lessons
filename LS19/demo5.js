//贪婪模式和非贪婪模式

"12345678".replace(/\d{3,6}/,'X');//默认为贪婪模式  X78

"12345678".replace(/\d{3,6}?/,'X');//设置为非贪婪模式 在量词后加？X45678

"12345678".replace(/\d{3,6}?/g,'X'); //"XX78"

//正则表达式的分组
console.log("NameNameName_11111".replace(/Name{3}/,"X")); //NameNameName_11111
console.log("NameNameName_11111".replace(/(Name){3}/,"X")); // X_11111

console.log("a1b2c3d4e5".replace(/[a-z]\d{3}/,"X")); //  a1b2c3d4e5
console.log("a1b2c3d4e5".replace(/([a-z]\d){3}/,"X")); //Xd4e5
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}/,"X")); // Xe5
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}?/,"X")); // Xd4e5

"abcdefghijk".replace(/abcde|fghijk/g,"X"); //"XX"
"abcdefghijk_abcdehijk_abcfghijk".replace(/abc(de|fg)hijk/g,"X"); //"abcdefghijk_X_X"


