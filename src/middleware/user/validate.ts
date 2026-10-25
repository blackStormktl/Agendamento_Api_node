import { ZodError, ZodType } from "zod";
import { Request,Response, NextFunction } from "express";

export const userValidate = (schemas:ZodType)=>
    async(req:Request, res:Response, next:NextFunction)=>{
        try{
            await schemas.parseAsync({
                body:req.body,
                params:req.params,
                query:req.query
            })
            return next()
        }catch(error){
            if(error instanceof ZodError){
                return res.status(401).json({
                    erro:"erro no cadastro",
                    details:error.issues.map((issue)=>({
                        campo:issue.path.slice(1).join("."),
                        message:issue.message
                    }))
                })
            }
        }
        return res.status(400).json({
            error:"erro interno "
        })
    }
