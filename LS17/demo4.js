//多维数组
//JS中可以通过包含数组的数组来模拟多维数组
var table=new Array(5);
for(var i=0;i<table.length;i++){
	table[i]=new Array(5);
}
for(var row=0;row<table.length;row++){
	for(var col=0;col<table[row].length;col++){
		table[row][col]=row*col;
	}
}
var product=table[2][4];
console.log(table);//(5) [Array(5), Array(5), Array(5), Array(5), Array(5)]
console.log(product);//8

//合并起来
var table=new Array(5);
for(var i=0;i<table.length;i++){
	table[i]=new Array(5);
	for(var col=0;col<table[i].length;col++){
		table[i][col]=i*col;
	}
}