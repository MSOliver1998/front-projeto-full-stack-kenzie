import { tContacts } from "../../../interfaces/contacts/contactsinterface"
import { CardStyled } from "./contactsStyled"
import {BsFillTelephoneFill} from  'react-icons/bs'
import {MdAlternateEmail} from 'react-icons/md'
import {CgProfile} from "react-icons/cg"
import {FaTrash,FaPencilAlt} from "react-icons/fa"
import { Modal } from "../../modal/modalBase/modal"
import { ModalEditar } from "../../modal/modalEdit/modalEditar"
import { ModalDelete } from "../../modal/modalDelete/modalDelete"


interface cardsSchema{
    cont: tContacts
}

function ContactsCards({cont}:cardsSchema){

    const {contact}=cont

    const ddd=contact.telefone.slice(0,2)
    const telefone=contact.telefone.slice(2)
    const tel=`(0${ddd}) ${telefone}`

    return (
        <CardStyled>
            <h3><CgProfile size="25px"/> : {contact.name.toUpperCase()}</h3>
            <p><BsFillTelephoneFill size="25px"/> : {tel}</p>
            <p><MdAlternateEmail size="25px"/> : {contact.email}</p>
            <nav>
                <Modal modalContent={<ModalEditar user={'contact'} userInfo={contact} id={cont.id}/>} style={{background:'orange'}}>
                    <FaPencilAlt size={"28px"} color={"white"}/>
                </Modal>
                <Modal style={{background:'orange'}} modalContent={<ModalDelete contact={contact} id={cont.id}/>}>
                    <FaTrash size={"28px"} color={'white'}/>
                </Modal>
            </nav>
        </CardStyled>
    )
}

export{ContactsCards}
