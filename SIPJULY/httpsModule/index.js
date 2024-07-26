const http=require('http')

const server=http.createServer(function(req,res){
    if(req.url=='/'){
        res.write("Hello from Node js server")
        res.end()
    }
    else if (req.url=='/about') {
        res.write("Here the about page is ....")
        res.end()
    }
    else if (req.url=='/contact') {
        res.write("Contact page...")
        res.end()
    }
    else{
        res.write("Page Not Found...404")
        res.end()
    }
    res.end()
})
server.listen(8000, () =>{
    console.log("Server Running On Port Number 8000")
})
