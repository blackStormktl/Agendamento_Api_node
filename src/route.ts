import { Router } from "express";
import { userController } from "./controller/userController";
import {userValidate} from './middleware/user/validate'
import { userSchemas } from "./schemas/userSchemas";

export const route =  Router()

route.post("/",userValidate(userSchemas),new userController().handdle)