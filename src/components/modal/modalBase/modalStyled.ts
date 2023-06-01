import styled from "styled-components";


const ModalStyled=styled.section`

    background: rgba(0,0,0,0.6);
    display:flex;
    justify-content:center;
    align-items:center;
    position: fixed;
    top: 0px;
    left: 0px;
    height:100vh;
    width:100vw;
    
    .modal{
        background-color:white;
        width:50%;
        height:50%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;


        .title{
            display:flex;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:15%;
    
            h2{
                margin:25px;
                color:black;
            }
    
            .close{
                border-radius:50%;
                background-color:red;
                margin:25px;
                padding:10px;
                height:fit-content;
                color:yellow;
            }
        }

        .content{
            display:flex;
            width:80%;
            height:80%;
            justify-content:center;
            align-items:center;
            margin-bottom:30px;
        }
    }




`

export {ModalStyled}