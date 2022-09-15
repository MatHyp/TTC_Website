import styled from "styled-components";

export const HeaderStyles = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500&display=swap');
    height: 60vh;
    position: relative;


    img{
        z-index: -1;
        object-fit: cover;
        filter: brightness(80%);
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 1s ease;
    }

    .header-description{
        position: absolute;
        left: 15%;
        top: 50%;
        transform: translateY(-50%);
    }

    p{
        font-size: 86px;
        font-family: 'rajdhani', sans-serif;
        font-weight: 700;
        font-style: normal;
        color: white;
    }
    .green p{
        color: #A5DA15;
    }


    .dot{
        width: 20px;
        height: 20px;
        border-radius: 10px;
        padding: 0 10px;
        background-color: white;
    }

    .dots{
        position: absolute;
        display: flex;
        width: 80px;
        justify-content: space-around;
        left: 50%;
        top: 96%;
        transform: translate(-50%,-100%);

    }
    @media (max-width: 1400px){
    height: 50vh;
        p{
            /* font-size: 40px; */
        }
    
    }

    @media (max-width: 1300px){
        p{
            font-size: 60px;
        }
    }
    @media (max-width: 1100px){
        p{
            /* text-align: center; */
        }
    }
    
    .slider{
        height: 100%;
    }
    `