import { ReactNode, createContext, useState } from "react";

interface iModalProvider{
    children:ReactNode
}

interface iModalContext{
    openModal:()=>void,
    modalIsOpen:boolean,
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContext=createContext({} as iModalContext)

function ModalProvider({children}:iModalProvider){

    const [modalIsOpen,setModalIsOpen]=useState(false)

    function openModal(){
        modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true)
    }

    return(
        <ModalContext.Provider value={{openModal,modalIsOpen,setModalIsOpen}}>
            {children}
        </ModalContext.Provider>
    )
}

export {ModalProvider,ModalContext}