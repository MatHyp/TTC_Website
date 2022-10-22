import styled from "styled-components";

export const MainFooterStyling = styled.footer`
    height: 20vh;
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
        left: 8%;
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

    @media (max-width: 1050px){
        height: 25vh;
        .copyright{
        position: absolute;
        left: 8%;
        top: 82%;
        transform: translateY(-90%);
        }
    

    .creator{
        position: absolute;
        left: 8%;
        top: 92%;
    }

}
    @media (max-width: 900px){
        height: 30vh;
        .copyright{
            width: 60%;
        }
    }

    @media (max-width: 721px){
        height: 52vh;
        .copyright{
            font-size:13px;
            width: 80%;
        }
        .creator{
            font-size: 13px;
        }
    }

    @media (max-height: 670px){
        height: 70vh;
    }
`