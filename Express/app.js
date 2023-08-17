// V-71
// CREATING MY FIRST EXPRESS APP

// importing 'express'
const express = require("express");

// creating express app
const app = express();

// port
const port = 80;


// Different GET and POST requests

// get --> home page
app.get("/",(req,res)=>{                                        // app.{request-type}("{url after localhost:port}",(request parameter, reponse parameter)=>{
    res.status(200).send("Welcome to Home Page !!");            //      {response parameter}.status({status-code}.send({response you want to send --> here we've send a string}))
});                                                             // })

// get --> about page
app.get("/about",(req,res)=>{
    res.send("Welcome to GET request of About Page");
});

// post --> about page
app.post("/about",(req,res)=>{
    res.send("Welcome to POST request of About Page");
});

// get --> this (NOT found) Page
app.get("/this",(req,res)=>{
    res.status(404).send("This Page is NOT FOUND !!");
});



// listening
app.listen(port,()=>{
    console.log(`This application started successfully on port ${port}`);
});
