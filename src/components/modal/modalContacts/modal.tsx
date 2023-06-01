import { useForm } from "react-hook-form"
import { ModalContactsStyled } from "./modalContactsStyled"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema } from "../../../schemas/contacts/contactsSchema"
import { tContact} from "../../../interfaces/contacts/contactsinterface"
import { api } from "../../../services/api"

function ModalContacts(){

    const { register, handleSubmit ,formState:{errors}} = useForm<tContact>({
        resolver: zodResolver(contactSchema)
    })

    function createContact(data:tContact){

        data.telefone=data.telefone.split(" ").join("")
        api.post('/contacts',data)
    }

    return(
        <ModalContactsStyled>
            <form onSubmit={handleSubmit(createContact)}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" {...register('name')} placeholder="Name" />
                {errors.name && <p>{errors.name?.message}</p>}

                <label htmlFor="email" >Email</label>
                <input type="email" id="email" {...register('email')} placeholder="Email"/>
                {errors.email && <p>{errors.email?.message}</p>}

                <label htmlFor="telefone" >Telefone</label>
                <input type="text" id="telefone" {...register('telefone')} placeholder="Telefone" />
                {errors.telefone && <p>{errors.telefone?.message}</p>}

                <button type="submit">Cadastrar</button>
            </form>
        </ModalContactsStyled>
    )
}

export {ModalContacts}