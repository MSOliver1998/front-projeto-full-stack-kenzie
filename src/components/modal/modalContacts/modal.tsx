import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema } from "../../../schemas/contacts/contactsSchema"
import { tContact} from "../../../interfaces/contacts/contactsinterface"
import { api } from "../../../services/api"
import { useContext } from "react"
import { AuthContext } from "../../../contexts/authContexts/authContext"

function ModalContacts(){

    const {setContacts,user}=useContext(AuthContext)

    const { register, handleSubmit ,formState:{errors}} = useForm<tContact>({
        resolver: zodResolver(contactSchema)
    })

    async function createContact(data:tContact){

        data.telefone=data.telefone.split(" ").join("")
        await api.post('/contacts',data)
        const response= await api.get(`contacts/${user}`)
        setContacts(response.data.contacts)

    }

    return(
            <form onSubmit={handleSubmit(createContact)}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" {...register('name')} placeholder="Name"/>
                {errors.name && <p>{errors.name?.message}</p>}

                <label htmlFor="email" >Email</label>
                <input type="email" id="email" {...register('email')} placeholder="Email"/>
                {errors.email && <p>{errors.email?.message}</p>}

                <label htmlFor="telefone" >Telefone</label>
                <input type="text" id="telefone" {...register('telefone')} placeholder="Telefone" />
                {errors.telefone && <p>{errors.telefone?.message}</p>}

                <button type="submit">Cadastrar</button>
            </form>
    )
}

export {ModalContacts}