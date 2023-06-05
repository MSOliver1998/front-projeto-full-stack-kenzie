import { useContext} from "react"
import { ContactsCards } from "../../components/cards/contacts/contacts"
import {  tContacts } from "../../interfaces/contacts/contactsinterface"
import { AuthContext } from "../../contexts/authContexts/authContext"
import { DashboardStyled } from "./dashboardStyle"
import { Modal } from "../../components/modal/modalBase/modal"
import { ModalContacts } from "../../components/modal/modalContacts/modalContacts"
import {BsFillPersonPlusFill} from "react-icons/bs"
import {FiLogOut} from "react-icons/fi"
import {IoMdContact} from "react-icons/io"
import { ModalEditar } from "../../components/modal/modalEdit/modalEditar"


function Dashboard(){

    const {logout,profile,contacts}=useContext(AuthContext)
    
    return(
        <DashboardStyled>
            <header>
                <h1>Book Contacts</h1>
                <nav className='menu'>

                    <Modal modalContent={<ModalContacts/>} title="contatos" style={{background:'orange',color:'white'}}>
                        <BsFillPersonPlusFill/>
                    </Modal>

                    <Modal modalContent={<ModalEditar user={'user'} userInfo={profile}/>} title="Profile" style={{background:'orange',color:'white'}}>
                        <IoMdContact color={'white'} size={'50px'} />
                    </Modal>


                    <button type='button' onClick={() => logout()}><FiLogOut size={'25px'} /></button>
                </nav>
            </header>
            <ul>
                {contacts.length>0 &&(
                     contacts.map((contact:tContacts)=> <ContactsCards key={contact.id} cont={contact}/>)
                )}

                {contacts.length==0 && 
                    <>
                        <h2>nenhum contato encontrado</h2>
                        <Modal style={{background:'orange'}}
                        modalContent={
                            <ModalContacts/>
                        } title="contatos"
                        >criar contatos</Modal>
                    </>
                }
            </ul>
        </DashboardStyled>
    )
}

export {Dashboard}