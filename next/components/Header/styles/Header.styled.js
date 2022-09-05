import styled from "styled-components";

export const HeaderStyles = styled.header`
    /* width: 100vw; */
    height: calc(80vh -  138px);
    /* background-image: url('/images/pracownia1.jpg');     */
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: -1;
    img{
        object-fit: cover;
        filter: brightness(80%);
        width: 100%;
        height: 90%;
      
    }
    p{
        text-align: center;
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%);
        font-size: 49px;
        border: 4px solid white;
        color: white;
        padding: 2% 6%;
    }

    @media (max-width: 1400px){
        p{
            font-size: 40px;
        }
        img{
        
            height: 80%;
        }
    }
    @media (max-width: 1100px){
        p{
            font-size: 30px;
            /* padding: 5% 10%; */
        
        }
    }
`