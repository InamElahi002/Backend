

const express=require(`express`);

const app=express();

const port=5000;

const cors =require(`cors`)

app.use((`cors`));

app.get("/about/content/object" ,(req,res)=>{
  res.send({

    id:1,
    name:"Are your kinnding me"

  })

});


app.get("/about/content/object/object2" ,(req,res)=>{
  res.send({

    id:2,
    "joke":"Are your kinnding me again me"

  })

});

// app.get("/ahmed" ,(req,res)=>{
//   res.json({

//     id:1,
//     name:"Are your kinnding me again and again"

//   })

// });



app.get("/", (req,res)=>{
    res.status(200).send("Hello World")
    console.log("Hello world");

})

app.get("/about", (req,res)=>{
    res.send("Hello World 522 i am about page")
    console.log("Hello world i am about page")

})

app.get("/about/content" ,(req,res)=>{
     res.send("Hello World i am  111 content page")
     console.log("Hello World i am content page")

})

// app.patch("/about/content/readme" ,(req,res)=>{
//      res.send("Hello World i am  read me page")
//      console.log("Hello World i am read me page")

// })

app.listen(port, ()=>{
    console.log(`your serve is runing on port ${port}`)
})