import {z} from 'zod'
import { contact } from '../../schemas/contacts/contactsSchema'

type tContacts=z.infer<typeof contact>

export type {tContacts}