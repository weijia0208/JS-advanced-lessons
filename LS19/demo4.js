//[]代表字符类，如[abc]代表abc中的任意一个字符，可以配合范围符号-如[a-c3-9]
console.log("absxsdfe123Ab".replace(/[abd]/,"X")); //Xbsxsdfe123Ab
console.log("absxsdfe123Ab".replace(/[abd]/g,"X"));  //XXsxsXfe123AX
console.log("absxsdfe123Ab".replace(/[abd]/gi,"X"));  //XXsxsXfe123XX

//[^]代表字符类取反，如[^abc]代表非abc中的任意一个字符
console.log("absxsdfe123Ab".replace(/[^abd]/,"X")); //abXxsdfe123Ab
console.log("absxsdfe123Ab".replace(/[^abd]/g,"X")); //abXXXdXXXXXXb
console.log("absxsdfe123Ab".replace(/[^abd]/gi,"X")); //abXXXdXXXXXAb

//一个 - 代表范围，如[a-z] 、[a-z0-9A-Z]
console.log("12345667".replace(/[3-9]/gi,"X"));  //12XXXXXX
console.log("absxsdfe123Ab".replace(/[a-f1-9]/gi,"X")); // XXsxsXXXXXXXX
console.log("absxsdfe123Ab".replace(/[a-f][1-9]/gi,"X"));//如果单独替换，则需要分组，见后续absxsdfX23Ab
console.log("absxsdfe1Q2e3Ab".replace(/[a-f][1-9][A-Z]/gi,"X")); //absxsdfX2Xb

//一个 . 代表一个除了回车和换行符之外的所有字符 等效于[^\r\n]
/ab[0-9][^\r\n]/ //等效于/[ab\d.]/
console.log("@abc@123@".replace(/@./g,"Q")); //QbcQ23@
console.log("@abc@123@".replace(/.@/g,"Q")); // @abQ12Q

//关于边界 ^ $ \b \B
console.log("This is a Boy is".replace(/is/g,0)); //Th0 0 a Boy 0
console.log("This is a Boy is".replace(/^is/g,0)); //This is a Boy is
console.log("This is a Boy is".replace(/is$/g,0)); //This is a Boy 0
console.log("This is a Boy is".replace(/is\b/g,0)); //Th0 0 a Boy 0
console.log("This is a Boy is".replace(/is\B/g,0)); //This is a Boy is
console.log("This is a Boy is".replace(/\bis/g,0)); //This 0 a Boy 0
console.log("This is a Boy is".replace(/\Bis/g,0)); // Th0 is a Boy is

//? 出现0次或1次（最多出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g,0));

//+ 出现1次或多次（至少出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa+/g,0));

//* 出现0次或多次（任意次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa*/g,0));

//{n} 出现n次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1}/g,0));
console.log("AaBbAb_AaaBbbAba".replace(/Aa{2}/g,0));

//{n,m} 出现n到m次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1,2}/g,0));

//{n,} 出现至少n次
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,}/g,0));
//console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,4}/g,0));

//注意：0到n次的写法{0,n}而不是{,n}
