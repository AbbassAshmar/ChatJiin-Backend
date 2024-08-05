const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ChatjiinAdmin:admin123@chatjiindb.ra2qs50.mongodb.net/ChatJiin?retryWrites=true&w=majority&appName=ChatJiinDB",)
.then(()=>{
    console.log("connected to mongodb");
}).catch((err) => console.log(err))

module.exports = mongoose.connection