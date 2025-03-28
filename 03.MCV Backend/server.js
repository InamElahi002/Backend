const express = require('express');

 const mongoose = require("mongoose");
 require("dotenv").config()

const router =require ('./routes/taskRoutes')
const cors=require("cors")


 const app =express()

 const port = process.env.port;

 app.use(express.json())
 app.use(cors())


mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("mongodb connected ..."))
.catch((err) => console.log(err))
 
app.use("/api",routes);


 app.listen(port, () =>
     console.log(`Server running on port ${port} `));



 //axios.get(localhost:6666/api)
 //axios.post(localhost:6666/api)
 //axios.put(localhost:6666/api)