const express = require("express");
const app = express();
app.listen(4000,()=>{
    console.log('server started at 4000');
})


app.use(express.static("./src"));

app.get("/", (req,res)=>{
    res.sendFile("index.html",{root:__dirname});
})

app.get("/gatepass.html",(req,res)=>{
    res.sendFile("gatepass.html",{root:__dirname+"/src"});
})