import {z} from 'zod'

const LoginSchema=z.object({
    email:z.string().email('email deve ser um email válido'),
    password:z.string().nonempty('a senha é obrigatória')
})

export {LoginSchema}