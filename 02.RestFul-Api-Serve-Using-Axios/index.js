// const express = require('express') // doesnt work in modulejs
import express from "express"
import cors from "cors"



const express = require('express');
const app =express();
const port =3000;

const cors=require(`cors`)
app.use((cors ))




let users = []; // TODO: replace this with mongoDB

function randomNumber() {
    return Math.floor(Math.random() * 100000000000);
}


app.post("/user", (req, res) => {

    console.log(req.body); // https://expressjs.com/en/4x/api.html#req.body

    let newUser = {
        id: randomNumber(),
        fullname: req.body.fullname,
        username: req.body.username,
        password: req.body.password
    }

    users.push(newUser);
    res.status(201).send("user is created"); // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses
})



app.get("/users" ,(req,res)=>{
    res.send(users)
})



// app.get("/user/:userId", (req, res) => { // get single user

//     let userId = req.params.userId;
//     let isFound = false;

//     for (let i = 0; i < users.length; i++) {
//         if (users[i].id == userId) {
//             res.send(users[i]);
//             isFound = true;
//             break;
//         }
//     }
//     if (!isFound) {
//         res.status(204).send("user not found");
//     }
// })

// app.get("/users", (req, res) => { // get all users
//     res.send(users);
// })






// app.put("/user/:userId", (req, res) => { // to modify single user
//     res.send("your user is modified");

//     let userId = req.params.userId;
//     let userIndex = -1

//     for (let i = 0; i < users.length; i++) {
//         if (users[i].id == userId) {
//             userIndex = i;
//             break;
//         }
//     }

//     if (userIndex === -1) {
//         res.status(204).send("user not found");
//     } else {

//         if (req.body.fullname) {
//             users[userIndex].fullname = req.body.fullname
//         };
//         if (req.body.username) {
//             users[userIndex].username = req.body.username
//         };
//         if (req.body.password) {
//             users[userIndex].password = req.body.password
//         };

//         res.send(users[userIndex]);
//     }
// })

// app.delete("/user/:userId", (req, res) => { // delete single user

//     let userId = req.params.userId;
//     let userIndex = -1

//     for (let i = 0; i < users.length; i++) {
//         if (users[i].id == userId) {
//             userIndex = i;
//             break;
//         }
//     }

//     if (userIndex === -1) {

//         res.status(204)
//         res.send("user not found");

//     } else {

//         users.splice(userIndex, 1);
//         res.send("user is deleted");
//     }
// })

// app.delete("/users", (req, res) => { // delete all users
    
//     users = [];
    
//     res.send("all users deleted");
// })




app.get ("/" , (req,res)  => {
    res.send("Hlo World ")
    console.log("Hlo World ")
})

app.get ("/about" , (req,res)  => {
    res.send("Hlo World its 767 about page")
    console.log("Hlo World its about page")
})

app.get ("/about/Hassan" , (req,res)  => {
    res.send("Hlo World its about page hassan")
    console.log("Hlo World its about hassan")
})





app.listen(port, ()=> {
    console.log (`server is running on port ${port}`);

})





