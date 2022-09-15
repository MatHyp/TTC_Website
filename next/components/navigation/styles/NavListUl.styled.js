import styled from "styled-components";

export const NavListUlStyles = styled.ul`
    @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,700;1,800;1,900&display=swap');
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 34%;
    width: 60%;
    
    
    li{
        position: relative;
        list-style: none;
        /* background-color: #a5da15;      */
        padding: 10px;
        transition: 0.3s ease;
    }
    
    a{
        font-family: 'Mulish', sans-serif;
        color: black;
        font-size: 22px;
        font-weight: 700;
        text-decoration: none;
    }
    

    @media (max-width: 1600px){
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
        left: ${(props) => props.open ? '0' : '-130%'};
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