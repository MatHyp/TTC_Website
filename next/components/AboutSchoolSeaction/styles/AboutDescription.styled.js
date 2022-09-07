import styled from "styled-components";

export const AboutDescriptionStyling = styled.div`
    width: 40vw;
    padding: 50px 0px 0px 60px;
    p{
        font-size: 22px;
        font-weight: 300;
    }
    div{
        width: 140px;
        height: 40px;
        position: relative;
    }
    div h1{
        z-index: 2;
        
    }
    .tr {
    z-index: -1;
    position: absolute;
    width: 0;
	height: 0;
    top: -30px;
    left: -35px;
	border-left: 70px solid transparent;
	border-right: 0px solid transparent;
	border-bottom: 70px solid #8FB73E;
    
    }


`