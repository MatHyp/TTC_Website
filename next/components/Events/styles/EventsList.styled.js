import styled from "styled-components";

export const EventsListStyling = styled.div`
    width: 100%;
    padding: 20vh 5vw 0 5vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;
   
    @media (min-width: 1400px){
        width: 90%;
    }

    @media (max-width: 1200px){
        width: 100%;
    }

`