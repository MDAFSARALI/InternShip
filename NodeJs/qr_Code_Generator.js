const QRcode = require('qrcode');


var Afsar={
    name:"Md Afsar",
    Age:21,
    College_Name:"Aliah University",
    Position:"Full Stack Web Dev Intern"
}
let stJson=JSON.stringify(Afsar);

QRcode.toFile("qr.png",stJson,function(err){
    if (err) {
       return  console.log("Error Occurred");
    }
});


