import {z} from 'zod'
import { registerResponseSchema, registerSchema, registerUpdateSchema } from '../../schemas/register/registerSchema'

type tRegister=z.infer<typeof registerSchema>
type tRegisterWhitoutConfirm=z.infer<typeof registerResponseSchema>
type tRegisterPartial=z.infer<typeof registerUpdateSchema>

export type{
    tRegister,
    tRegisterPartial,
    tRegisterWhitoutConfirm
}