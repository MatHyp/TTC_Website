import styled from "styled-components";

export const ArticlePageContainer = styled.div`
    width: 80vw;
    margin: 0 auto;

    .data{
        font-family: 'Rajdhani';
        color: #A5DA15;
        font-size: 30px;
        font-weight: 500;
        margin-top: 20px;
    }

    .title{
        font-size: 25px;
        text-transform: uppercase;
        width: 500px;
    }

    .description{
        font-family: 'Mulish';
        
        margin: 100px 0;
        font-size: 18px;
    }

    @media(min-width: 1400px){
        width: 66vw;
        .title{
            font-size: 35px;
        }
    }
`