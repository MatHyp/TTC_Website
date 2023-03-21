import { useEffect, useState } from "react"
import { HeaderStyles } from "./styles/Header.styled"
import Image from "next/image"
const Header = () => {



    return (
        <HeaderStyles>
            {/* <img src="images/test.png" style={{transform: `translateX(${img_one}%)`}}/> */}
            {/* <img src="images/main.png" style={{transform: `translateX(${img_two}%)`}}/> */}
            {/* <img src="images/news1.png" style={{transform: `translateX(${img_three}%)`}}/> */}

            <div>
                <Image src={"/images/test.png"} layout='fill' alt="Zdjęcie przedstawiające technikum technologii cyfrowych z lotu ptaka" />
            </div>
            <div className="header-description">
                <p>pasja</p>
                <span className="green">
                    <p>innowacje</p>
                </span>
                <p>rozwój</p>
            </div>
            <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </HeaderStyles>
    )
}

export default Header