import {z} from "zod";


const registerSchema=z.object({
    name:z.string().min(8,'deve ter ao menos 8 caracteres'),
    email:z.string().email('deve ser um email válido'),
    password:z.string().min(8,'deve ter ao menos 8 caracteres ')
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
    "One special character"),
    confirm:z.string(),
    telefone:z.string().min(11,'insira o numero com ddd').max(12,'trelefone inválido')
}).refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"]
  });

const registerSchema2=z.object({
  name:z.string().min(8,'deve ter ao menos 8 caracteres'),
  email:z.string().email('deve ser um email válido'),
  password:z.string(),
  telefone:z.string()
})

export {registerSchema,registerSchema2}
