import z from "zod";

export const userSchemas = z.object({
    body:z.object({
        name:
            z.string()
            .trim()
            .regex(/^[\p{L}\s]+$/u,{message:"apenas nome valido"})
            .min(3,{message:"o nome precisa ter no minimo 3 letras"}),

        email:
            z.email()
                .trim(),
        
        password:
            z.string()
                .min(4,{message:"minimo 4 caracteres"})
    })
})