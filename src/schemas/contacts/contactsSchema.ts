import {z} from 'zod'

const contactSchema=z.object({
    name: z.string(),
    email: z.string().email(),
    telefone: z.string(),
})

const contactsSchema=z.object({
    id: z.number(),
    CreatedAt: z.string().or(z.date()),
    contact:contactSchema
})

const contactUpdateSchema=contactSchema.partial()


export {contactsSchema,contactUpdateSchema,contactSchema}