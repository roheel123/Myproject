const express= require("express");
const path= require("path");
const bodyParser= require("body-parser");
const cors= require("cors");
const passport= require("passport");
const mongoose =require("mongoose");
const config=require("./config/database");
mongoose.connect(config.database);
mongoose.connection.on("connected",()=>{
    console.log("connected "+ config.database);

});
mongoose.connection.on("error",(err)=>{
    console.log("error"+ err);

});

const app=express();
const port =3000;

const users=require("./routes/users");
const dusers=require("./routes/dusers");
const appointments=require("./routes/appointments");
const contacts=require("./routes/contacts");

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


app.use(express.static(path.join(__dirname,'/public')));
app.use('/users',users)
app.use('/dusers',dusers)
app.use('/appointments',appointments)
app.use('/contacts',contacts)

app.get('',(req,res)=>{
res.send("Hello world");
});
app.get('/', (req, res) => {
    res.send('invaild endpoint');
  });
  
  app.get('*', (req, res) => {
   // res.sendFile(path.join(__dirname, 'index.html'));
  });
  
app.listen(port, ()=>{
    console.log("server is running");

});
