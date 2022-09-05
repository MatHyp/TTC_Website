import styled from "styled-components";

export const DownHeaderStyles = styled.div`
    /* margin: 0; */
    /* width: 100vw; */
    height: calc(26vh);
    text-align: center;
    background-color: #EEEEEE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2{
        font-size: 44px;
        font-weight: 900;
    }
    h1{
        font-size: 47px;
        color: #8FB73E;
    }
    div{
        margin: 0 auto;
        width: 180px;
        height: 8px;
        background-color:  #8FB73E;
    }

    @media (max-width: 1400px){
        h2{
            font-size: 35px;
        }
        h1{
            font-size: 37px;
            color: #8FB73E;
        }
    }
    @media (max-width: 840px){
        h2{
            font-size: 26px;
            font-weight: 900;
        }
        h1{
            font-size: 30px;
            color: #8FB73E;
        }
    }
`