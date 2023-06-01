import {z} from 'zod'
import { contactSchema, contactsSchema } from '../../schemas/contacts/contactsSchema'

type tContact=z.infer<typeof contactSchema>
type tContacts=z.infer<typeof contactsSchema>

export type {tContact,tContacts}