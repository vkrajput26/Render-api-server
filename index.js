const express = require("express")

require("dotenv").config()
const PORT =process.env.PORT || 8001
app.get("/",(req,res)=>{
    res.send("home page")
})


app.listen(PORT,()=>{
    console,log("listen to port")
})