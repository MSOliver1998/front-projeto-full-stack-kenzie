import styled from "styled-components";


const ModalContactsStyled=styled.div`

    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;


    form{
        background-color:orange;
        display:flex;
        flex-direction:column;
        height:100%;
        width:100%;
        justify-content:center;
        align-items:center;

        input{
            margin-top: 5px;
            max-width:400px;
        }

        button{
            margin-top:15px;
            background-color:blue;
            color:white
        }

        P{
            color:red;
            font-size:15px;
        }
    }
`

export {ModalContactsStyled}