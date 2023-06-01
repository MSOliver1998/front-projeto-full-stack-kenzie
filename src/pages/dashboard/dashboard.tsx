import { useContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { ContactsCards } from "../../components/contacts/contacts"
import { tContacts } from "../../interfaces/contacts/contactsinterface"
import { AuthContext } from "../../contexts/authContexts/authContext"
import { DashboardStyled } from "./dashboardStyle"
import { Modal } from "../../components/modal/modalBase/modal"
import { ModalContacts } from "../../components/modal/modalContacts/modal"
import {BsFillPersonPlusFill} from "react-icons/bs"
import {FiLogOut} from "react-icons/fi"
import {IoMdContact} from "react-icons/io"


function Dashboard(){

    const [contacts,setContacts]=useState<tContacts[]>(null as unknown as tContacts[])
    const {user,logout}=useContext(AuthContext)

    useEffect(()=>{

        async function getContacts(){
            const response=await api.get(`/contacts/${user}`)
            if(response){
                setContacts(response.data.contacts)
            }
        }
        getContacts()

    },[])


    return(
        <DashboardStyled>
            <header>
                <h1>Book Contacts</h1>
                <nav className='menu'>
                    <Modal modalContent={
                        <ModalContacts/>
                    } title="contatos"><BsFillPersonPlusFill size={'25px'}/></Modal>
                    <IoMdContact color={'white'} size={'50px'}/>
                    <button type='button' onClick={()=>logout()}><FiLogOut size={'25px'}/></button>
                </nav>
            </header>
            <ul>
                {contacts &&(
                     contacts.map((contact:tContacts)=>{
                        return(
                            <ContactsCards key={contact.id} contact={contact.contact} id={0} CreatedAt={""} ></ContactsCards>
                        )
                    })
                )}

                {!contacts && 
                    <>
                        <h2>nenhum contato encontrado</h2>
                        <Modal 
                        modalContent={
                            <ModalContacts/>
                        } title="contatos"
                        >criar contactos</Modal>
                    </>
                }
            </ul>
        </DashboardStyled>
    )
}

export {Dashboard}