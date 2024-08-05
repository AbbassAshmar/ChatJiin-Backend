const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

require('./config/index.js');

app.listen(PORT, ()=>{
    console.log(`running on http://localhost:${PORT}`)
});