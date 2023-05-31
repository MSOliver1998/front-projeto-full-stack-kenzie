import styled from "styled-components";


const DashboardStyled=styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
    width:100vw;

    h1{
        color:orange;
    }
    
    nav{
        display:flex;
        padding:15px;
        gap:15px
    }

    header{
        padding: 0px 25px;
        margin: 0px;
        background-color: blue;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    ul{
        display:flex;
        gap:15px;
        padding: 10px 120px;
    }

`

export { DashboardStyled }