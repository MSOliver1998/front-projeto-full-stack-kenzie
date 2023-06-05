import styled from "styled-components";


const OptionsModal=styled.div`

    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    gap:15px;

    label{
        color:red;
    }

    div{
        display:flex;
        justify-content:space-between
    }


    button{
        padding:8px;
        width:100px;
        &:hover{
            color:white
        }
    }

    button.confirm{
        background-color:green;
    }


    button.confirm[disabled]{
        background-color:gray;
        color:white
    }

    button.confirm[disabled]:hover{
        background-color:gray;
        color:white
    }

    button.cancel{
        background-color:red
    }

`


export {OptionsModal}