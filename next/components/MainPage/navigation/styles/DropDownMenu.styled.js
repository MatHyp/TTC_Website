import styled from "styled-components";

export const DropDownMenuStyling = styled.div`
    position: absolute;
    left: 0px;    
    z-index: 10;
    width: 300px;
   
    ul{
        display: flex;
        flex-direction: column;
        width: 300px;
        transition: 1s ease;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        border-top-right-radius: 6px;
        background-color:#323232;
        max-height: 400px;
        overflow: scroll;
        ::-webkit-scrollbar {
            display: none;
        }
    }
    
    
    
    li{
        padding: 14px 20px;
       
        a{
            color: white;
            font-size: 18px;
        }
    }
    li:hover{
        background-color: #a5da15;     
    }

    @media (max-width: 1150px){
        position: relative;
        width: 200px;
        margin: 0 auto;
        background-color: transparent;
        
        ul{
            background-color: #323232;
            width: 200px;
        }

        ul li a{
            padding: 0;
            text-align: center;
        }
        ul:hover{
        
        }
    }


`