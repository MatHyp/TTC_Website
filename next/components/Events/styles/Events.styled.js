import styled from "styled-components";

export const EventsStyling = styled.div`
    
    width: 100%;
    background-color: #323232;
    position: relative;

    border-top-right-radius: 400px;
    .title{
        font-family: 'rajdhani', sans-serif;
        position: absolute;
        left: 12%;
        top: 8%;
        font-size: 60px;
        color: #c8c8c8;
    }
    
    .title-span{
        font-family: 'rajdhani', sans-serif;
        color: #a5da15;

    }

    .border-bottom{
        width: 100%;
        height: 0.1px;
        margin-top: 30px;
        background-color: grey;
    }

    @media (max-width: 1400px){
        .title{
            top:5%;
            left: 8%;
        }
    }

    @media (max-width: 770px) {
        .title{
            font-size: 40px;
            top: 4%;
            left: 9%;
        }
    };

    .btn-all{
        position: relative;
        font-family: 'rajdhani', sans-serif;
        font-size: 20px;
        padding: 20px 30px;
        background-color: #a5da15;
        border: none;
        color: #323232;
        font-weight: 900;
        left: 50%;
        transform: translate(-50%);
        margin-bottom: 40px;
    }

    /* @media (max-width: 600px) {
        margin-top: 15%;
        width:70vw ;
    }; */


`