const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());

const mongoUrl = "";

mongoose.connect(mongoUrl, {
    useNewUrlParser:true
}).then(() => {console.log("Connected to database");
})
.catch((e)=>console.log(e));


app.listen(5000, () => {
    console.log("Server started at port 5000");
});