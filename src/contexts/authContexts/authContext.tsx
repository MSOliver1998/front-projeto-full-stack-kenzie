import { ReactNode, createContext, useEffect, useState} from "react";
import { tLogin } from "../../interfaces/login/loginInteface";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import jwtDecode from "jwt-decode";
import { tRegisterPartial } from "../../interfaces/register/registerInterface";
import { tContacts } from "../../interfaces/contacts/contactsinterface";
import { toast } from "react-toastify";

interface iToken{
    sub:string,
    exp: number,
    iat:number
}

interface iAuthContext{
    signIn:(data:tLogin)=>void
    loading:boolean,
    user:string,
    logout:()=>void,
    profile: tRegisterPartial,
    setProfile:React.Dispatch<React.SetStateAction<tRegisterPartial>> ,
    contacts: [] | tContacts[],
    setContacts: React.Dispatch<React.SetStateAction<tContacts[]>>
}

interface iAuthProvider{
    children:ReactNode
}


const AuthContext=createContext<iAuthContext>({} as iAuthContext)


function AuthProvider({children}:iAuthProvider){

    const navigate=useNavigate()
    const [contacts,setContacts]=useState<[] | tContacts[]>([])
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState( '' as unknown  as string)
    const [profile,setProfile]=useState(null as unknown as tRegisterPartial)

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


    useEffect(()=>{      
        
        async function loadProfile(){
            const profileRequest=await api.get(`/users/${user}`)
            const {name,email,telefone}=profileRequest.data
            setProfile({name,email,telefone})
        }
        
        async function getContacts(){
            const response=await api.get(`/contacts/${user}`)
            if(response){
                setContacts(response.data.contacts)
            }
        }
        user && getContacts()
        !profile && loadProfile()
    },[profile, user])


    async function logout(){
        localStorage.removeItem('token')
        toast.success('logout feito com sucesso volte logo!')
        setLoading(true)
        navigate('/')
    }

    async function signIn(data:tLogin){
        try {
            const response = await api.post("/login", data)
            const { token } = response.data
      
            api.defaults.headers.common.authorization = `Bearer ${token}`
            localStorage.setItem("token", token)

            const {sub}= jwtDecode<iToken>(token)
            setUser(sub)
            setLoading(false)
            toast.success('login feito com sucesso')
            navigate('dashboard')
        } catch (error:any) {
            toast.error(error.response.data.message)
        }
    }

    return(
        <AuthContext.Provider value={{
            signIn,
            loading,
            user,
            logout,
            profile,
            setProfile,
            contacts,
            setContacts
        }}>
            {children}
        </AuthContext.Provider>
    )

}

export {AuthContext,AuthProvider}