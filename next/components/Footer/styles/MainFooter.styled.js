import styled from "styled-components";

export const MainFooterStyling = styled.footer`
    height: 30vh;
    width: 100%;
    background-color: #A5DA15;
    position: relative;
    display: flex;

    .line{
        position: absolute;
        width: 900px;
        height: 2px;
        background-color: #fff;
        top: 70%;
        left: 10%;
    }
    .copyright{
        position: absolute;
        left: 6%;
        top: 90%;
        transform: translateY(-90%);
    }

    .creator{
        position: absolute;
        left: 69.5%;
        top: 90%;
        transform: translateY(-90%);
    }

    span{
        font-weight: 700;
    }
`