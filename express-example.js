const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get("/",(req, res) => {});

//Code that initiates and runs the express application
app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
});