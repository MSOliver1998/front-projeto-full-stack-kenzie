import { useForm } from "react-hook-form"
import { tLogin } from "../../interfaces/login/loginInteface"
import { LoginSchema } from "../../schemas/login/loginSchemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { AuthContext } from "../../contexts/authContexts/authContext"
import { LoginStyled } from "./loginStyled"
import { Link } from "react-router-dom"


function Login(){

    const { register, handleSubmit ,formState:{errors}} = useForm<tLogin>({
            resolver: zodResolver(LoginSchema)
    })

    const {signIn}=useContext(AuthContext)

    return(
        <LoginStyled>
            <div>
                <h1>Book Contacts</h1>
                <h2>Login</h2>
                <Link to="Register">não possui login cadastre-se</Link>
            </div>
            <div>
                <form onSubmit={handleSubmit(signIn)}>
                    <label htmlFor="email" >Email</label>
                    <input type="email" id="email" {...register('email')} placeholder="Email"/>
                    {errors.email && <p>{errors.email.message}</p>}

                    <label htmlFor="senha">Password</label>
                    <input type="password" id="senha" {...register('password')} placeholder="Senha"/>
                    {errors.password && <p>{errors.password.message}</p>}

                    <button type="submit">Login</button>

                </form>
            </div>
        </LoginStyled>
    )
}

export {Login}