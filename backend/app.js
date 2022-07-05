const express=require('express');
const mongoose=require('mongoose');
const router=require("./routes/book-routes");
const cors=require('cors');
const app=express();

// app.use('/',(req,res,next)=>{
//     res.send("This is starting app");
// })

app.use(express.json());
app.use(cors());
app.use('/books',router);
mongoose.connect("mongodb+srv://Akshita:Akshita@cluster0.kamru.mongodb.net/mernstack?retryWrites=true&w=majority"
).then(()=>console.log("connected to database"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log(err));
