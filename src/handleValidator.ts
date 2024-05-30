import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
const validateResults= (req:Request,res:Response,next:NextFunction)=>{
    try {
        validationResult(req).throw()
        return next()
    } catch (error:any) {
        res.status(403)
        res.send({erorres:error.array()})
        
    }
}

export {validateResults};
