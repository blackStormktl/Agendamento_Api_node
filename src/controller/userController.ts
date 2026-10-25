import {Request,Response} from "express"
import {userService} from "../service/userService"

export class userController{
    handdle(req:Request,res:Response){
        const{name,email,password}=req.body

        const userCreate = new userService().execute({
            name: name,
            email: email,
            password: password
        })
        res.status(200).json(userCreate)
        
    }
}