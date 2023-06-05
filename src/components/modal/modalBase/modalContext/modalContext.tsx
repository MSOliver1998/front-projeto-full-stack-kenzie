import { ReactNode, createContext, useState } from "react";


interface iModalContext{
    modalIsOpen:boolean,
    setModalOpen:React.Dispatch<React.SetStateAction<boolean>>,
    closeModal:()=>void
}

interface iModalProvider{
    children:ReactNode
}

const ModalContext=createContext<iModalContext>({} as iModalContext)

function ModalProvider({children}:iModalProvider){

    const [modalIsOpen,setModalOpen]=useState(false)

    const closeModal=()=>{
        setModalOpen(false)
    }

    return(
        <ModalContext.Provider value={{modalIsOpen,setModalOpen,closeModal}}>
            {children}
        </ModalContext.Provider>
    )

}

export {ModalContext,ModalProvider}