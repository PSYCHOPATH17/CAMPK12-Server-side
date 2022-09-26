const express = require('express');
const app = express();
const port = 1234;

app.get('/',(req,res)=>{
    res.type('text/plain');
    res.send('data:text/html')
});
app.use((req,res)=>{
    res.type('text/plain');
    res.send("404 Error");
});
app.listen(port,function(req,res){
    console.log('Food is good, food is great');
});