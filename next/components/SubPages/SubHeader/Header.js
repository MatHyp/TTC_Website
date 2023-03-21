import { HeaderStyles } from "./styles/Header.styled"
import Image from "next/image"

const Header = () => {
    return (
        <HeaderStyles>
            <Image src="/images/sub.png" width={1920} height={300} />
            <p className="category">Aktualnosci</p>
        </HeaderStyles>
    )
}

export default Header