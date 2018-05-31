function Student(name,age,id){
    this.name=name;
    this.age=age;
    this.id=id;
}
Student.prototype.show=function(){
    console.log("i am ",this.name,this.age,this.id);
}
module.exports=Student;