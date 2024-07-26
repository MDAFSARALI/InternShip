// class A{
//Base /Root /Parent Class

// }

// // Class B is Child Class/derived class, leaf class ,sub class
// class B extends A{

// }

// prototype means inheritance

var student=function(){
    this.name="Afsar",
    this.age=22,
    this.mobile=85258222558;
}

student.prototype={
    address:"Patna",
    salary:"00",
    getAdd:function(){
        console.log("Hello Prototype");
    }
}



var std=new student()

console.log(std.name);
console.log(std.age);
console.log(std.mobile);
console.log(std.address);
console.log(std.salary);
std.getAdd()
