import { ReactNode, createContext, useEffect, useState} from "react";
import { tLogin } from "../../interfaces/login/loginInteface";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import jwtDecode from "jwt-decode";

interface iToken{
    sub:string,
    exp: number,
    iat:number
}

interface iAuthContext{
    signIn:(data:tLogin)=>void
    loading:boolean,
    user:string,
    logout:()=>void
}

interface iAuthProvider{
    children:ReactNode
}


const AuthContext=createContext<iAuthContext>({} as iAuthContext)


function AuthProvider({children}:iAuthProvider){

    const navigate=useNavigate()
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState( '' as unknown  as string)

    useEffect(()=>{

        const token=localStorage.getItem('token')
        
        if (!token){
            setLoading(false)
            return
        }

        api.defaults.headers.common.authorization = `Bearer ${token}`
        const  {sub}  = jwtDecode<iToken>(token)
      
        setUser(sub)
        
        setLoading(false)

    },[])

    async function logout(){
        localStorage.removeItem('token')
        setUser('')
        setLoading(true)
        navigate('/')
    }

    async function signIn(data:tLogin){
        try {
            const response = await api.post("/login", data)
      
            const { token } = response.data
      
            api.defaults.headers.common.authorization = `Bearer ${token}`
            localStorage.setItem("token", token)

            const  {sub}  = jwtDecode<iToken>(token)

            setUser(sub)
      
            navigate('dashboard')
          } catch (error) {
            console.error(error)
          }
    }

    return(
        <AuthContext.Provider value={{signIn,loading,user,logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export {AuthContext,AuthProvider}