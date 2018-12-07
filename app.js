const express=require("express");
const router=require("./router/routes.js");
const app=express();
const port=process.env.PORT||3000;
router(app,express);

app.listen(port,()=>console.log("Server started"));