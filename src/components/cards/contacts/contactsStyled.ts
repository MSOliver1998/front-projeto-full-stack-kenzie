import styled from 'styled-components'

const CardStyled=styled.li`
    
    list-style:none;
    height:250px;
    width: 250px;
    padding:9px;
    background-color: orange;


    h1,h2,h3,p{
        color:black;
    }

    nav{
        display:flex;
        align-items:center;
        justify-content: space-around;
    }

`


export {CardStyled}