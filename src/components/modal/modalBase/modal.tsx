import { ReactNode, useContext, useState } from "react"
import { ModalContext } from "../../../contexts/modalContext/modalContext"
import { ModalStyled } from "./modalStyled"


interface Modal{
    children:ReactNode,
    modalContent:ReactNode,
    title?:string,
}

function Modal({children,modalContent,title='modal'}:Modal){

    const [modal,setModal]=useState(false)
    const {modalIsOpen,setModalIsOpen}=useContext(ModalContext)

    function openModal(){
        setModalIsOpen(!modalIsOpen)
        setModal(!modal)
    }
    
    return(
        <>
            <button type='button' onClick={openModal}>{children}</button>
            {
                modal && 
                <ModalStyled>
                    <div className="modal">
                        <div className="title">
                            <h2>{title}</h2>
                            <button className="close" onClick={openModal}>X</button>
                        </div>
                        <div className="content">
                            {modalContent}
                        </div>
                    </div>
                </ModalStyled>
            }
        </>
    )
}

export {Modal}