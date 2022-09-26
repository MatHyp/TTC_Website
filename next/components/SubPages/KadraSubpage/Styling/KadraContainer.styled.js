import styled from "styled-components";
import Image from 'next/image'

export const KadraContainerStyling = styled.div`
    width: 80vw;
    margin: 60px auto 0 auto;
`


export const KadraAboutStyling = styled.div`
    /* width: 100%; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
        width: 58%;
    }
    .description{
        margin-top: 20px;
        font-size: 20px;
    }
    .kadra-title{
        font-size: 30px;
        color: #8fb73e;
    }
`

export const KadraElementStyling = styled.div`
    position: relative;
    margin-bottom: 60px;

    .border-bottom{
        position: absolute;
        width: 100%;
        left: 10%;
        transform: translateX(-10%);
        text-align: center;
        height: 2px;
        bottom: -50px;    
        background-color: #8fb73e;
    }
`

export const KadraElementDescription = styled.div`
    display: flex;
    /* justify-content: space-vb; */
    align-items: center;
    margin-top: 100px;
    margin-left: 40px;
    
    div{
        width: 68%;
    }
    img{
        margin-left: 50px;
    }
    .title{
        font-size: 30px;
    }
    .role{
        font-size: 25px;
        color: #8fb73e;
        margin: 10px 0;
    }
    .description{
        font-size: 20px;
    }
`

