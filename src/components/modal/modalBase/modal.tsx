import {ReactNode,useState } from "react"
import { ModalBase} from "./modalStyled"
import ModalBody from "./modalBody"
import { ModalProvider } from "./modalContext/modalContext"



interface Modal{
    children:ReactNode,
    modalContent:ReactNode,
    title?:string,
    style?:{
        background?:string,
        buttonSize?:string,
        color?:string,
    },
}

function Modal({children,modalContent,title='',style}:Modal){

    const [modal,setModal]=useState(false)    
    
    return(
        <ModalProvider>
            <ModalBase $buttonSize={style?.buttonSize} $color={style?.color}>
                {
                    typeof(children)!='object' 
                    ? 
                    <button type='button' onClick={()=>{setModal(!modal)}}>{children}</button> 
                    : 
                    <button type='button' className="transparent" onClick={()=>{setModal(!modal)}}>{children}</button>
                }
                <ModalBody modalContent={modalContent} title={title} style={style} setModal={setModal} modal={modal}/>
            </ModalBase>
        </ModalProvider>
    )
}

export {Modal}