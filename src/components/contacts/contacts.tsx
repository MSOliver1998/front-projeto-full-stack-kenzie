import { tContacts } from "../../interfaces/contacts/contactsinterface"
import { CardStyled } from "./contactsStyled"

function ContactsCards({contact}:tContacts){

    return (
        <CardStyled>
            <div>
                <h3>Name: {contact.name}</h3>
                <p>Telefone: {contact.telefone}</p>
                <p>Email: {contact.email}</p>
            </div>
        </CardStyled>
    )
}

export{ContactsCards}
