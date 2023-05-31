import {z} from 'zod'
import { registerSchema, registerSchema2 } from '../../schemas/register/registerSchema'

type tRegister=z.infer<typeof registerSchema>
type tRegister2=z.infer<typeof registerSchema2>

export type{
    tRegister,
    tRegister2
}