import { HeaderStyles } from "./styles/Header.styled"
const Header = () => {

    return (

        <HeaderStyles>
            <img src='/images/test.png' />

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