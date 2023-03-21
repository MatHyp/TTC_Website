import styled from "styled-components";

export const MainFooterContainerStyling = styled.div`
    display: flex;
    height: 33%;
    margin: 40px 0 0 6%;
    
    .title{
        padding-left: 20px;
        
        font-family: 'Rajdhani';
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        color: white;
    }
    .details{
        padding-left: 20px;
        font-family: 'Mulish';
        font-weight: 700;
        color: white;
        font-size: 16px;
    }
 
    .bip{
        position: absolute;
        left: 74%;
    }
    .logo{
        width: 280px;
    }
 

    @media (max-width: 900px){
        .bip{
        
            left: 66%;
            top: 66%;
            width: 200px;
        }

    }

    @media (max-width: 670px){
        flex-direction: column;
        .logo{
            width: 80vw;
        }
        .bip{
            width: 120px;
            left: 6%;
            top: 54%;
        }
        .details{
            font-size: 13px;
        }
        .title{
            padding-top: 15px;
            font-size:18px;
        }
    }
`