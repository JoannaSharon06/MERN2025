const express = require('express');
const path = require('path')
const mdb=require('mongoose')
const dotenv=require('dotenv')
const Signup = require("./models/signupSchema");
const app = express();
dotenv.config()

app.use(express.json())

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
app.post('/signup',(req,res)=>{
    var {firstname,lastname,username,email,password}=req.body
    try{
      console.log("inside try")  
    const newCustomer= new Signup({
        firstname:firstname,
        lastname:lastname,
        username:username,
        email:email,
        password:password,

    });

    console.log(newCustomer);
    newCustomer.save()
    res.status(201).send("values received");
} catch(err){
    res.status(400).send("Signup unsuccessfull",err)
}

})

app.get('/getsignupdate',async(req,res)=>{
    var signUpdet=await Signup.find()
    res.status(200).json(signUpdet)
})
app.listen(3001, () => {
    console.log("server connected")
})