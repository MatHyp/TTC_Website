import styled from "styled-components";

export const NavListUlStyles = styled.ul`
    // flex
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    width: 80%;

    li{
        list-style: none;
        text-align: center;
    }
    
    a{
        color: black;
        font-size: 20px;
        font-weight: 500;
        text-decoration: none;
    }

    img{
        height: 50%;
    }

`