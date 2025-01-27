const express = require('express');
const path = require('path')
const mdb=require('mongoose')
const dotenv=require('dotenv')
const app = express();
dotenv.config()

mdb.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("MongoDB Connection Successful");
})
.catch((err)=>{
console.log("MongoDb connection unsuccessful",err);
});


app.get('/', (req, res) => {
    res.send("Welcome to Backend friends")
})

app.get('/static',(req,res) => {
    res.sendFile(path.join(__dirname,"index.html"))
})
app.listen(3001, () => {
    console.log("server connected")
})