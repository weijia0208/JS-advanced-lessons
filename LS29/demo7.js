//this缺陷
var point = {
	x:0,
	y:0,
	moveTo:function(x,y){
		function moveToX(){
			this.x=x;   //this指向的是point
		}
		function moveToY(){
			this.y=y;
		}
		moveToX();
		moveToY();
	}
	
};
point.moveTo(2,2);
console.log(point);//{x:0,y:0}
console.log(window.x,window.y); //2 2

var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//关键的一行，软绑定
        //内部嵌套函数
        function moveToX() {
            that.x = x;//this改为that
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y;//this绑定到了哪里？
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point); ////{x:2,y:2,moveTo()}

var point = {
    x:0,
    y:0,
    moveTo:function(x,y){
        var moveToX = () => this.x=x;
        var moveToY = () => this.y=y;
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point); //{x:2,y:2,moveTo()}
console.log(window.x,window.y); //2 2

function foo() {
    setTimeout(function(){
        console.log('id:', this.id); //this指向的是window
    }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 21

//箭头函数中没有自己的this而是引用外层的this,所以不能使用call(),apply(),bind()去改变this指向
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 42

function foo(){
    return () => {
        return () => {
            return () => {
                console.log('id:',this.id);
            };
        };
    };
}
var f = foo.call({id:1});
var t1 = f.call({id: 2})()(); //id:1
var t2 = f().call({id: 3})(); //id:1
var t3 = f()().call({id: 4}); //id:1

//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上小括号
var getTempItem = itemId => ({id:itemId,name:"Temp"});
//等效于
var getTempItem = function(itemId){
    return {id:itemId,name:"Temp"}
};




