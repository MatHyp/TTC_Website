import { HeaderStyles } from "./styles/Header.styled"
import { DownHeaderStyles } from "./styles/DownHeader.styled"
const Header = () => {

    return (
       
    <HeaderStyles>
        <img src='/images/main.png' />
        <p>Praktyki zagraniczne</p>
    
        <DownHeaderStyles>
            <h2>Witaj na strone</h2>
            <h1>Technikum Technologii Cyfrowych</h1>
            <div></div>
        </DownHeaderStyles>
    </HeaderStyles>
    )
}

export default Header