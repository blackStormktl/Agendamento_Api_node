
import {userProps} from "../interface/userInterface"

export class userService{
    execute({name,email,password}:userProps){
        const user ={name,email,password}
        
        return user
        
    }
}