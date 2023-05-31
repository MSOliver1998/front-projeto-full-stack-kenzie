import {z} from 'zod'

const contact=z.object({
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

export {contact}