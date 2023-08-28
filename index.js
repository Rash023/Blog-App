const express=require("express");
const app=express();


require("dotenv").config();
const PORT=process.env.PORT || 5000;

app.use(express.json());

const blog=require("./routes/blog");


app.use("/api/v1",blog);


const dBconnect=require('./config/database');
dBconnect();

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("<h1> Hello baby</h1>");
})


app.get("/api/v1",(req,res)=>{
    res.send("<h1> This is version 1</h1>");
})