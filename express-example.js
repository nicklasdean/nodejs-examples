const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get("/",(req, res) => {
   res.send("🦺 Hey hey ");
});

app.get("/greetings",(req, res) => {
   res.send("Hey everyone thanks for visiting my very first API 🐕‍🦺")
});

//Get a product by name
app.get("/products/:name", (req, res) =>{
   let dataAsString = fs.readFileSync("data.json","utf-8");
   let dataAsJson = JSON.parse(dataAsString);
   for (let i = 0; i < dataAsJson.length; i++) {
      if(dataAsJson[i].productName == req.params.name){
         return res.send(dataAsJson[i]);
      }
   }
   res.send("404 product not found");
});

//Code that initiates and runs the express application
app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
});