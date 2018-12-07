const express=require("express");
const router=require("./router/routes.js");
const app=express();

router(app,express);

app.listen(3000,'192.168.1.14');