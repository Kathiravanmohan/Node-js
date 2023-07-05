//console.log("Welcome to Node JS")
const http =require('http')
const fs=require('fs')
const server =http.createServer((req,res)=>{
let filename=+new Date().toLocaleDateString
    res.writeHead(200,{"Content-Type":"text-html"})
    fs.writeFile(`${filename}.txt`,`Time is ${new Date()}`,'utf-8',()=>{
    fs.readFile(`${filename}.txt`,'utf-8',(error,data)=>{
        if(error)
        console.log(error)
        else
        res.end(data)
    })
})
})
server.listen(8003,()=>console.log("server is listening"))