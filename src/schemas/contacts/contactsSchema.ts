import {z} from 'zod'

const contactsSchema=z.object({
    id: z.number(),
    CreatedAt: z.string().or(z.date()),
    contact:z.object({
        id: z.number(),
        name: z.string(),
        email: z.string().email(),
        telefone: z.string(),
        createdAt: z.string().or(z.date())
    })
})


const contactSchema=z.object({
    name: z.string().nonempty('insira o nome do usuário'),
    email: z.string().nonempty('insira um email').email('insira um email válido'),
    telefone: z.string().min(11,'insira um telefone válido').max(12,'telefone inválido'),
})

export {contactsSchema,contactSchema}