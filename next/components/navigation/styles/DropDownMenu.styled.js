import styled from "styled-components";

export const DropDownMenuStyling = styled.div`
    position: absolute;
    left: -2px;    
    
    ul{
        background-color: #a5da15;     
        display: flex;
        flex-direction: column;
        width: 240px;
        border-radius: 0 0 25px 25px;
        box-shadow: 0 2px 15px 0 rgba(0,0,0, .1);
        opacity: 0;
        transform: translateY(-10px);
        transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
    }
    
    ul:hover{
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
    }
    
    li{
        padding: 14px 20px;
        a{
            color: white;
            font-size: 18px;
        }
    }
    li:hover{
        background-color:#323232;
    }
    @media (max-width: 1000px){
        position: relative;
        
        left: 0;
        ul:nth-child(1){
            display: none;
            border-radius: 0;
            transform: translateY(0);
            opacity: 1;
            margin: 5px auto;
            box-shadow: none;
            /* background-color: #5D5A5A; */
            background-color: transparent;
            width:100%;
        }
    }
`