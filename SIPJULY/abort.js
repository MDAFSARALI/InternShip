const process = require('process');

const abortFunction=()=>{
    console.log("Start...");
    setInterval(()=>{
        console.log("Process is running...");
    },1000)

    setTimeout((function(){
        return process.abort();
    }),5000)
}

abortFunction();