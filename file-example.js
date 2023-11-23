const fs = require("fs");

const data = fs.readFileSync("data.json","utf-8");
const dataAsJson = JSON.parse(data);
console.log(dataAsJson[0].productName);