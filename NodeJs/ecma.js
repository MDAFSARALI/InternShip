// var student={
//     name:"Afsar",
//     age:22,
//     skill:"Full Stack Developer",
// }
// console.log(student);
// student.mobile=9999999999;
// student.email="test@gmail.com";
// console.log(student);





class User{
    constructor(x,y){
        this.a=x;
        this.b=y;
    }
    getAdd(){
        return this.a+this.b;
    }
    getSub(){
        return this.a-this.b;
    }
    getMul(){
        return this.a*this.b;
    }
    getDiv(){
        return this.a/this.b;
    }
    
}

var user=new User(10,5);
console.log(user.getAdd());
console.log(user.getSub());
console.log(user.getMul());
console.log(user.getDiv());