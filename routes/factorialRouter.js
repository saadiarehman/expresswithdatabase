const route= require("express").Router();
const factorialController=require("../controllers/factorialController");

route.post("/factorialCheck",factorialController.factorialCheck);

module.exports=route;