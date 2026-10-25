
import {userProps} from "../interface/userInterface"
import {prisma} from "../lib/prisma"
import bcrypt from "bcrypt"

export class userService{
    async execute({name,email,password}:userProps){

        const passwordHash = await  bcrypt.hash(password,8)
        const user = await prisma.user.create({
            data:{
                name:name,
                email:email,
                pass:passwordHash

            }
        })
        
        return user
        
    }
}