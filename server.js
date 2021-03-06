// Setup empty JS object to act as endpoint for all routes
projectData = {};
const express=require("express");
const app=express();
const bodyParser=require("body-parser");
// Require Express to run server and routes

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port=3000;
app.listen(port,()=>{
    console.log("Listening on port "+port);
});
app.get("/getData",(req,res)=>{
res.send(projectData);
});
app.post("/all",all);
function all(req,res){
    projectData["temp"]=req.body.temp;
    projectData["feeling"]=req.body.feeling;
    projectData["zip"]=req.body.zip;
    projectData["date"]=req.body.date;
}