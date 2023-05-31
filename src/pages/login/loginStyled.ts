import styled from "styled-components";


const LoginStyled=styled.section`

    display:flex;
    width:100vw;
    height:100vh;
    justify-content:center;
    align-content: space-around;
    flex-wrap: wrap;
    color:orange;

    a{
        font-size:18px;
        color:white;
        text-decoration:none
    }

    h1{
        color:orange;
    }

    div{
        display:flex;
        align-items:center;
        width:45vw;
        height:50vh;
        justify-content:center;
        font-size:30px;
        display:flex;
        flex-direction:column;

        form{
            display:flex;
            flex-direction:column;
            font-size:20px;
            p{
                color: red;
                font-size:15px;
            }

            button{
                margin-top:15px
            }
        }
    }

`

export {LoginStyled}