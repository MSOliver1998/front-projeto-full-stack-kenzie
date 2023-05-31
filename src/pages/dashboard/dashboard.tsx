import { useContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { ContactsCards } from "../../components/contacts/contacts"
import { tContacts } from "../../interfaces/contacts/contactsinterface"
import { AuthContext } from "../../contexts/authContexts/authContext"
import { DashboardStyled } from "./dashboardStyle"

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
                <h1>Books Contacts</h1>
                <nav className='menu'>
                    <button type='button'>+</button>
                    <button type='button' onClick={()=>logout()}>logout</button>

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
                        <button>criar contato</button>
                    </>
                }
            </ul>
        </DashboardStyled>
    )
}

export {Dashboard}