import {z} from 'zod'
import {LoginSchema} from '../../schemas/login/loginSchemas'


type tLogin=z.infer<typeof LoginSchema>

export type {tLogin}