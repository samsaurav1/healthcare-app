var express = require("express");
var app = express();
app.use(express.static(__dirname))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.listen(3000,function(){
    console.log("== listening on  3000 =====")
})