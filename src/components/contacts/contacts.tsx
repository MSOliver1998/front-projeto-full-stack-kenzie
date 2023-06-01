import { tContacts } from "../../interfaces/contacts/contactsinterface"
import { CardStyled } from "./contactsStyled"
import {BsFillTelephoneFill} from  'react-icons/bs'
import {MdAlternateEmail} from 'react-icons/md'
import {CgProfile} from "react-icons/cg"

function ContactsCards({contact}:tContacts){

    const ddd=contact.telefone.slice(0,2)
    const telefone=contact.telefone.slice(2)
    const tel=`(0${ddd}) ${telefone}`

    return (
        <CardStyled>
            <div>
                <h3><CgProfile/> : {contact.name.toUpperCase()}</h3>
                <p><BsFillTelephoneFill/> : {tel}</p>
                <p><MdAlternateEmail/> : {contact.email}</p>
            </div>
        </CardStyled>
    )
}

export{ContactsCards}
