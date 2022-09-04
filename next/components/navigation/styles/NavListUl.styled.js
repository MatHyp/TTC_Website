import styled from "styled-components";

export const NavListUlStyles = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 25%;
    width: 65%;
    
    transition: all 0.3s ease;
    li{
        position: relative;
        list-style: none;
    }
    
    a{
        color: black;
        font-size: 20px;
        font-weight: 500;
        text-decoration: none;
    }
    

    @media (max-width: 1400px){
        margin-left: 30%;
 
        a{
            font-size: 16px;
        }

    }

    @media (max-width: 1150px){
        display: block;
        position: fixed;
        top: 138px;
        height: 100vh;
        width:100vw;
        text-align: center;
        background-color: grey;
        overflow: scroll;
        left: ${(props) => props.open ? '0' : '-100%'};
        margin: 0 auto;
        
        li:nth-child(1){
            margin-top: 20px;
        }
        li {
            padding: 20px 0;
        }
        li a{
            font-size: 24px;
            color: white;
        }
    };


    

`