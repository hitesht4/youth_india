const express=require("express");
const cors=require("cors");
const connect=require("./src/configs/db");
const booksRouter=require("./src/controllers/books.controller");
const app=express();


app.use(cors());
app.use(express.json());
app.use("/books",booksRouter);




app.listen(5000,async()=>{
    try{
       await connect;
       console.log("Connected to db successfully");
    }catch(e){
        console.log(e);
    }

    console.log("Listening to port 5000");
    
})