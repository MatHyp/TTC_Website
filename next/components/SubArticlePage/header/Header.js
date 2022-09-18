import { useEffect, useState } from "react"
import { HeaderStyles } from "./styles/Header.styled"
import styled from "styled-components";

import Image from "next/image"

// const ImageContainer = styled.div`
//     width: 100vw;
//     height: 20vh;
// `

const Header = () => {
    return (
        <HeaderStyles>
            <Image src="/images/sub.png" width={1920} height={300} />
            <p className="category">Aktualności</p>
        </HeaderStyles>
    )
}

export default Header