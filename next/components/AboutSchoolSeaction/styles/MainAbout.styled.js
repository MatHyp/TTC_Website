import styled from "styled-components";

export const MainAboutStyles = styled.section`
    width: 70vw;
    
    display: flex;
    margin: 10vh auto;
    img{
        width: 50%;
        height: 30%;
        filter: brightness(60%);
    }
    @media (max-width: 1400px){
        width: 90vw;

        img{
            width: 45%;
        }
    }

    @media (max-width: 1200px){
        img{
            width: 55%;
        }}

    @media (max-width: 1000px){
        flex-direction: column;
        align-items: center;
        
        img{
            width: 80%;
            margin-bottom: 5vh;
        }
    }
`