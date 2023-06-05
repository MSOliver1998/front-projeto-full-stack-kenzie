import { ThemeProvider } from "styled-components"
import { ContentStyle, ModalStyled } from "./modalStyled"
import { FormModal } from "../../../styles/themes"
import { ReactNode, useContext, useEffect, useRef } from "react"
import { ModalContext } from "./modalContext/modalContext"


interface modalDeps{
    modalContent:ReactNode,
    setModal:React.Dispatch<React.SetStateAction<boolean>>,
    modal:boolean,
    title:string,
    style?:{
        background?:string,
        buttonSize?:string,
        color?:string,
    }
}

function ModalBody({modalContent,setModal,modal,title,style}:modalDeps){

    const refModal=useRef(null as unknown as HTMLDivElement)
    const {setModalOpen,modalIsOpen}=useContext(ModalContext)
    const {closeModal}=useContext(ModalContext)
    
    
    useEffect(()=>{
        function modalOutClick(event: { target: any }) {
            const {target} = event
            const {current} = refModal
            
            current && !current.contains(target) && setModal(false)
        }
        window.addEventListener("mousedown", modalOutClick)
     
        return ()=>{
            window.removeEventListener("mousedown", modalOutClick)
        };
    },[]);


    useEffect(()=>{
        modal && setModalOpen(true)  
        !modal && setModalOpen(false)  
    },[modal])


    useEffect(()=>{
        !modalIsOpen && setModal(false)
        modalIsOpen && setModal(true)
    },[modalIsOpen])

   
    return  modalIsOpen?
    (
        <ModalStyled $background={style?.background} > 
            <div className="modal" ref={refModal}>
                <div className="title">
                    <h2>{title}</h2>
                    <button className="close" onClick={()=>{closeModal()}}>X</button>
                </div>
                <ThemeProvider theme={FormModal}>
                    <ContentStyle>
                        {modalContent}
                    </ContentStyle>
                </ThemeProvider>
            </div>
        </ModalStyled>
    )
    :
    <></>
    
}

export default ModalBody