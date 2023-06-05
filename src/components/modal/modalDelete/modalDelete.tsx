import { useContext, useRef, useState } from "react"
import { OptionsModal } from "./modalDeleteStyled"
import { ModalContext } from "../modalBase/modalContext/modalContext"
import { api } from "../../../services/api"
import { tContact } from "../../../interfaces/contacts/contactsinterface"
import { AuthContext } from "../../../contexts/authContexts/authContext"

interface modalDelete{
    contact:tContact,
    id:number
}


function ModalDelete({contact,id}:modalDelete){

    const {closeModal}=useContext(ModalContext)
    const {user,setContacts}=useContext(AuthContext)
    const [button,setButton]=useState(true)
    const inputRef=useRef(HTMLInputElement)

    const deleteText=`Delete${contact.name.toLocaleUpperCase()}`.split(' ').join('')

    async function confirm(){
        await api.delete(`/contacts/${user}/${id}`)
        setContacts((oldContacts)=>{
            const newContacts=oldContacts.filter(el=>el.id!=id)
            return newContacts
        })
    }

    function cancel(){
        closeModal()
    }

    function changed(){
        const value=inputRef.current.value
        setButton(value!=deleteText)
    }


    return(
        <OptionsModal>
            <label htmlFor="confirm">type "<strong>{deleteText}</strong>" confirm delete</label>
            <input onInput={changed} type='text' id='confirm' ref={inputRef}/>
            <div >
                <button className="confirm" disabled={button} onClick={confirm}>Confirm</button>
                <button className="cancel" onClick={cancel}>Cancel</button>
            </div>
        </OptionsModal>
    )
}

export {ModalDelete}