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
        top: 5%;
        font-size: 80px;
        color: #c8c8c8;
    }
    
    .title-span{
        font-family: 'rajdhani', sans-serif;
        color: #a5da15;

    }


    .partners{
        width: 40%;
        height: 140px;
        background-color: #a5da15;
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
        /* color: #323232; */
        font-weight: 900;
        left: 50%;
        transform: translate(-50%);
        margin: 40px 0;
    }

    /* @media (max-width: 600px) {
        margin-top: 15%;
        width:70vw ;
    }; */


`