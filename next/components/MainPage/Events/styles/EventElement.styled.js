import styled from "styled-components";

export const EventElementStyling = styled.div`
    width: 30%;
    margin-bottom: 50px;
    position: relative;
    .data{
        font-family: 'Mullish';
        font-size: 14px;
        padding-top: 10px;
        font-weight: 100;
        color: #a5da15;
    }

    .event-title{
        font-family: 'rajdhani', sans-serif;
        font-size: 40px;
        color: #FFFFFF;
        font-weight: 900;
        padding-top: 40px;
        margin-bottom: 20px;
        height: 160px;
    }
    
    .img{
        padding-bottom: 20px;
        width: 100%;
        object-fit: contain;
        border-radius: 10px;
    }
    .description{
        font-family: 'rajdhani' ;
        font-size: 20px ;
        color: #c8c8c8;
        font-weight: 100;
        margin-bottom: 50px;
    }
    .text *{
        font-family: 'Poppins' !important;
        font-weight: 400 !important;
        font-size: 22px !important;
        color: #c8c8c8  !important;
        height: 130px;
        background-color: transparent !important;
    }
    .border-bottom{
        position: absolute;
        width: 100%;
        height: 0.1px;
        bottom: 0;
        background-color: grey;
    }
    .read-more{
        font-family: 'Mullish';
        font-size: 20px;
        color: #a5da15;
        font-weight: 100;
    }

    @media (max-width: 1400px) {
        margin-top: 6%;
        width  :40vw ;
    };

    @media (max-width: 770px) {
        margin-top: 15%;
        width:80vw ;
    };

    @media (max-width: 600px) {
        
        width:75vw ;
    };
`