import {z} from 'zod'
import { contactSchema, contactUpdateSchema, contactsSchema } from '../../schemas/contacts/contactsSchema'


type tContact=z.infer<typeof contactSchema>
type tContacts=z.infer<typeof contactsSchema>
type tContactPartial=z.infer<typeof contactUpdateSchema>

export type {tContact,tContacts,tContactPartial}