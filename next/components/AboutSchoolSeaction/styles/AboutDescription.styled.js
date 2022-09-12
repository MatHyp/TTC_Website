import styled from "styled-components";

export const AboutDescriptionStyling = styled.div`
    width: 40vw;
    padding: 5% 0px 0px 60px;
    
    p{
        font-family: 'poppins';
        font-size: 22px;
        font-weight: 400;
        width: 100%;
        padding: 20px 0 10px 0;
    }
    div{
        width: 140px;
        height: 40px;
        position: relative;
    }
    div h1{
        z-index: 2;
        
    }
    .tr {
        z-index: -1;
        position: absolute;
        width: 0;
        height: 0;
        top: -30px;
        left: -35px;
        border-left: 70px solid transparent;
        border-right: 0px solid transparent;
        border-bottom: 70px solid #8FB73E; 
    }

    .btn-container{
        position: relative;
        margin-top: 3%;
        left: 90%;
        transform: translateX(-100%);
    }
    button{
        width: 140px;
        height: 40px;
        background-color: #8FB73E;
        border: none;
        padding: 0px 0px 6px 8px;
        transition: 0.1s;
    }

    button:hover{
        padding: 0
            
    }
    
    .border{
        position: absolute;
        width: 100%;
        height: 100%;
        top: -6px;
        left: 6px;
        border: 2px black solid;
    }

    @media (max-width: 1600px){
        
        padding: 30px 0px 0px 60px;
        p{
            font-size: 18px;
        }
    }

    @media (max-width: 1400px){
        padding: 30px 0px 0px 60px;

        p{
            font-size: 18px;
        }
    }

    @media (max-width: 1100px){
        
        padding: 20px 0px 0px 60px;
        p{
            font-size: 16px;
        }
    }

    @media (max-width: 1000px){
        width: 80vw;
        padding: 20px 0px 0px 50px;
        p{
            width: 93%;
            font-size: 24px;
        }
    }


    @media (max-width: 700px){
        p{
            font-size: 20px;
        }
    }

`