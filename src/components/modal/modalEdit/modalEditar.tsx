import { tContactPartial } from "../../../interfaces/contacts/contactsinterface";
import {tRegisterPartial } from "../../../interfaces/register/registerInterface";
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUpdateSchema } from "../../../schemas/register/registerSchema";
import { api } from "../../../services/api";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/authContexts/authContext";
import { ModalContext } from "../modalBase/modalContext/modalContext";
import { contactUpdateSchema } from "../../../schemas/contacts/contactsSchema";

interface iModalProps{
    user: 'user'| 'contact'
    userInfo: tContactPartial | tRegisterPartial
    id?:number
}

function ModalEditar({user,userInfo,id}:iModalProps){

    const {setContacts,user:userId,setProfile}=useContext(AuthContext)
    const {closeModal}=useContext(ModalContext)

    const schema= user=='user' ? registerUpdateSchema :  contactUpdateSchema
    
    const {
        register,
        handleSubmit,
    } = useForm({
        resolver: zodResolver(schema),
    });

    function removeEmptyProperties(obj:any) {
        return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null && v !=''));  
    }

    async function updateContact(data:tContactPartial){
        if(data.email==userInfo.email || data.email==''){
            delete userInfo.email
            delete data.email
        }

        const newData:any=removeEmptyProperties(data)
        const newUser:tContactPartial={...userInfo,...newData}
        try{
            await api.patch(`contacts/${id}`,newUser)
            const response= await api.get(`/contacts/${userId}`) 
            setContacts(response.data.contacts)
            closeModal()
        }catch(err:any){
            console.log(err.response.data)
        }
    }

    async function updateUser(data:tRegisterPartial){
        if(data.email==userInfo.email || data.email==''){
            delete userInfo.email
            delete data.email
        }
        const newData:any=removeEmptyProperties(data)
        const newUser:tRegisterPartial={...userInfo,...newData}
        try{
            await api.patch(`users/${userId}`,newUser)
            setProfile(newUser)
            closeModal()
        }catch(err:any){
            console.log(err.response.data)
        }
    }

    return (user=='contact' ?
        (
            <form onSubmit={handleSubmit(updateContact)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"  defaultValue={userInfo.email} {...register('email')}/>

                <label htmlFor="name">Name</label>
                <input type="name" id="name" defaultValue={userInfo.name} {...register('name')}/>

                <label htmlFor="telefone">Telefone</label>
                <input type="tel" id="telefone" defaultValue={userInfo.telefone} {...register('telefone')}/>

                <button type="submit">Editar</button>
            </form>
        )
        :
        (
            <form onSubmit={handleSubmit(updateUser)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"  defaultValue={userInfo.email} {...register('email')} />

                <label htmlFor="name">Name</label>
                <input type="name" id="name" defaultValue={userInfo.name} {...register('name')} />

                <label htmlFor="telefone">Telefone</label>
                <input type="tel" id="telefone" defaultValue={userInfo.telefone} {...register('telefone')}/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register('password')}/>

                <button type="submit">Editar</button>
            </form>
        )
    )
}

export {ModalEditar}