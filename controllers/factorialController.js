const joi=require("joi");
const factorialService=require("../services/factorialService");
const { request } = require("express");

const factorialCheck= joi.object({

    input:joi.number().required().not(0),
});

module.exports={
    factorialCheck: async(req,res)=>{
        try {
            const validate= await factorialCheck.validateAsync(req.body);
            if(validate.error){
                res.sendStatus(error);
            }
            const result= await factorialService.factorial(validate);
            res.sendStatus(result);
        } catch (error) {
            res.sendStatus(error);
        }
    }
};