import { useEffect, useState } from "react"
import { HeaderStyles } from "./styles/Header.styled"
import Image from "next/image"
const Header = () => {
    const [img_one, setImg_one] = useState(-200)
    const [img_two, setImg_two] = useState(-100)
    const [img_three, setImg_three] = useState(0)

    const [counter, setCounter] = useState(0)
    const [way, setWay] = useState(1)

    const changeSlider = () => {

        if (way === 1) {
            setImg_one(img_one + 100)
            setImg_two(img_two + 100)
            setImg_three(img_three + 100)
            // console.log(img_one);
            // console.log(img_three);
            // console.log('przód');
        }
        else if (way === 0) {
            setImg_one(img_one - 100)
            setImg_two(img_two - 100)
            setImg_three(img_three - 100)
            // console.log(img_one);
            // console.log(img_three);
            // console.log('tył');

        }
    }


    // useEffect(() => {
    //     console.log(img_one);
    //     console.log(img_two);
    //     console.log(img_three);
    //     if(img_one === -200 && img_two === -100 && img_three === 0){
    //         setWay(0)
    //     }else if(img_three === -100 && img_two === 0 && img_one === -100){
    //         setWay(1)
    //     }
    //     setTimeout(() =>{
    //         changeSlider();
    //     }, 2000)

    // },[img_one])

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