import styled from "styled-components";

export const HeaderStyles = styled.header`
    width: 100vw;
    height: calc(80vh -  138px);
    /* background-image: url('/images/pracownia1.jpg');     */
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: -1;
    img{
        object-fit: cover;
        filter: brightness(50%);
        width: 100%;
        height: 100%;
      
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
`