import styled from "styled-components";

export const NavMainBarStyled = styled.nav`
    display: flex;
    width: 100vw;
    max-width: 100%;
    height: 100px;
    background-color: #EEEEEE;
    position: relative;
    
    img{
        position: absolute;
        transform: translateY(-50%);
        top: 50%;

    }
    img:nth-child(1){
        height: 50%;
        left: 10%;
    }

    img:nth-child(2){
        display: none;
        right: 10%;
        height: 50%;
    }

    @media (max-width: 1150px) {

        img:nth-child(2){
            display: block;
        }
    }

    @media (max-width: 500px) {
        img:nth-child(1){
            height: 35%;
        }
        img:nth-child(2){
            display: block;
            height: 35%;
            
        }
    }
    
`