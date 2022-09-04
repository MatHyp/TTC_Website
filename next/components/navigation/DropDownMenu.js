import { DropDownMenuStyling } from "./styles/DropDownMenu.styled"
import Link from 'next/link'
const DropDownMenu = () => {
    return (
        <DropDownMenuStyling opacity={0}>
            <ul>
                <li>
                    <Link href="/">Podanie w sprawie praktyk</Link>
                </li>
                <li>
                    <Link href="/">Regulamin odbywania praktyki</Link>
                </li>
                <li>
                    <Link href="/">Harmongram Praktyk</Link>
                </li>
                <li>
                    <Link href="/">Zgoda zakładu pracy na odbycie praktyki</Link>
                </li>

            </ul>
        </DropDownMenuStyling>
    )
}

export default DropDownMenu;