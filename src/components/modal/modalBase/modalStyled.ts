import styled from "styled-components";

const ModalBase=styled.div<{ $buttonSize?:string, $color?:string}>`

    svg{
        height:${props => props.$buttonSize};
        width: ${props => props.$buttonSize};     
        fill: ${props=> props.$color};   
    }

    button.transparent{
        padding:0px;
        font-size: ${props => props.$buttonSize || "50px"};
        background:transparent;
        color: ${props=>props.$color || 'black'};
    }

    button{
        padding:9px;
        font-size:${props => props.$buttonSize || "25px"};;
        color: color: ${props=>props.$color || 'black'};
    }
`
const ModalStyled=styled.section<{$background?:string}>`

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
        background-color:${props=>props.$background || 'white'};
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
    }
`

const ContentStyle=styled.div`

    display:flex;
    width:80;
    height:80%;
    justify-content:center;
    align-items:center;
    margin-bottom:30px;


    form{
        display:${props=>props.theme.display};
        flex-direction:${props=>props.theme.direction};
        background-color:${props=>props.theme.background};
        height:100%;
        width:100%;
        justify-content:${props=>props.theme.justify};
        align-items:${props=>props.theme.align};

        input{
            margin-top: 5px;
            width:200px;
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

export {ModalStyled,ModalBase,ContentStyle}