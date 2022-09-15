import styled from "styled-components";

export const FooterStyling = styled.footer`
    width: 100%;
    height: 16vh;
    background-color: #EEEEEE;
    text-align: center;
    div{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    img{
        /* height: 70%; */
        width: calc(70% / 6);
    }
`