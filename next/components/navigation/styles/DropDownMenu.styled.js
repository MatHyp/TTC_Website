import styled from "styled-components";

export const DropDownMenuStyling = styled.div`
    position: absolute;
    left: -2px;    
    
    ul{
        background-color: #fff;     
        display: flex;
        flex-direction: column;
        width: 200px;
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
        a{
            font-size: 16px;
        }
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