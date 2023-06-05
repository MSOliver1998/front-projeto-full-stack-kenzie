import { Link } from "react-router-dom"
import {useForm} from 'react-hook-form'
import { RegisterStyled } from "./registerStyled"
import { tRegister, tRegisterWhitoutConfirm, } from "../../interfaces/register/registerInterface"
import { registerResponseSchema, registerSchema, } from "../../schemas/register/registerSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../services/api"


function Register(){

    const { register, handleSubmit, formState: { errors }, } = useForm<tRegister>({
        resolver:zodResolver(registerSchema)
    });

    async function registerUser(data:tRegister){

        const newData:tRegisterWhitoutConfirm= registerResponseSchema.parse(data)

        const response= await api.post('/users',newData)
        console.log(response)
    }


    return(
        <RegisterStyled>
            <div>
                <h1>Book Contacts</h1>
                <h2>Register</h2>
                <Link to='/'>Já possui cadastro faça o login</Link>
            </div>
            <div>
                <form onSubmit={handleSubmit(registerUser)}>
                    <label htmlFor="name" >Name</label>
                    <input type="text" id="name" {...register('name')}/>
                    {errors.name && <p>{errors.name.message}</p>}

                    <label htmlFor="email" >Email</label>
                    <input type="email" id="email" {...register('email')}/>
                    {errors.email && <p>{errors.email.message}</p>}

                    <label htmlFor="telefone" >Telefone</label>
                    <input type="text" id="telefone" {...register('telefone')}/>
                    {errors.telefone && <p>{errors.telefone.message}</p>}

                    <label htmlFor="senha" >Password</label>
                    <input type="password" id="senha" {...register('password')}/>
                    {errors.password && <p>{errors.password.message}</p>}

                    <label htmlFor="confirm" >Confirm Password</label>
                    <input type="password" id="confirm" {...register('confirm')}/>
                    {errors.confirm && <p>{errors.confirm.message}</p>}

                    <button type="submit">Register</button>

                </form>
            </div>
        </RegisterStyled>
    )
}

export {Register}