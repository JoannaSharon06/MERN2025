const express = require('express');
const path = require('path');
const mdb = require('mongoose');
const dotenv = require('dotenv');
const Signup = require("./models/signupSchema");
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
dotenv.config();
app.use(cors())
app.use(express.json());

mdb.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.log("MongoDb connection unsuccessful", err);
  });
const verifyToken=(req,res,next)=>{
  console.log("Middleware is triggered")
  var token=req.headers.authorization
  if(!token) {res.send("Request Denied");}
 try {
  const user = jwt.verify(token,process.env.SECRET_KEY)
  console.log(user)
  req.user = user
 } catch (error) {
  console.log(error)
  res.send("Error in Token")
 }
  next()
}
app.get('/', (req, res) => {
  res.send("Welcome to Backend friends");
});

app.get('/static', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/json',verifyToken,(req, res) => {
  console.log("Inside Json route")
  res.json({message:"This is a middleware check",user:req.user.username})
})
app.post('/signup', async(req, res) => {
  var { firstname, lastname, username, email, password } = req.body;
  var hashedPassword=await bcrypt.hash(password,15);
  console.log(hashedPassword)
  try {
    console.log("inside try");
    const newCustomer = new Signup({
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: hashedPassword,
    });

    console.log(newCustomer);
    newCustomer.save();
    res.status(201).json({response:"Signup successful",signupStatus:true});
  } catch (err) {
    res.status(400).send("Signup unsuccessful", err);
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Signup.findOne({ email: email });
    if (!user) {
     
      return res.status(404).send({response:"User not found",loginStatus:false});
    }
    const payload={
      email:user.email,
      username:user.username
    }
    const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"1hr"})

    if (bcrypt.compare(user.password , password)) {
      res.status(200).send({response:"Login successful",loginStatus:true,token:token});
    } else {
      res.status(401).send({response:"Incorrect password",loginStatus:false});
    }
  } catch (err) {
    res.status(500).send("Error during login");
  }
});

app.get('/getsignupdet', async (req, res) => {
  try {
    const signUpdet = await Signup.find();
    res.status(200).json(signUpdet);
  } catch (err) {
    res.status(500).send("Error fetching signup details");
  }
});

app.put('/updateuser', async (req, res) => {
    var updateRec=await Signup.findOneAndUpdate(
        { firstname:"bavanetha"},
        {$set:{firstname:"Joanna"}}
    )
    console.log(updateRec)
     updateRec.save()
    res.json("Updated Record");
  });
  
  

  app.delete('/deleteuser', async (req, res) => {
    const { id } = req.body; 
  
    try {
      const deletedUser = await Signup.findByIdAndDelete(id);
      if (!deletedUser) { 
        return res.status(404).send("User not found");
      }
      res.status(200).send("User deleted successfully");
    } catch (err) {
      res.status(500).send("Error deleting user");
    }
  });
  
app.listen(3001, () => {
  console.log("Server connected on port 3001");
});