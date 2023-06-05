import {z} from "zod";

const registerResponseSchema=z.object({
  id:z.string(),
  name: z.string(),
  email: z.string().optional().or(z.string().email()),
  telefone:z.string().optional().or(z.string().min(11,'insira o numero com ddd').max(12,'telefone inválido')),
  password: z.string().optional().or(z.string().min(8,'deve ter ao menos 8 caracteres ')
  .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
  .regex(new RegExp(".*[a-z].*"), "One lowercase character")
  .regex(new RegExp(".*\\d.*"), "One number")
  .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
  "One special character")),
})

const registerSchema=registerResponseSchema.extend({

  confirm:z.string()

}).omit({
  id:true
}).refine((data) => data.password === data.confirm, {
  message: "Passwords don't match",
  path: ["confirm"]
});

const registerUpdateSchema=registerResponseSchema.omit({id:true}).partial()


export {registerSchema,registerResponseSchema,registerUpdateSchema,}
