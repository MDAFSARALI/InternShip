const process=require('process')

process.on('beforeExit',()=>{
    console.log("The process before exit...");
})
process.on('exit',()=>{
    console.log("The process exit...");
})

console.log("Hello World...");