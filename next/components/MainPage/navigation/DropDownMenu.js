import { DropDownMenuStyling } from "./styles/DropDownMenu.styled"
import Link from 'next/link'
const DropDownMenu = ({ link }) => {

    return (
        <DropDownMenuStyling opacity={0}>
            <ul>
                {link.map(e => {
                    console.log(e);
                    console.log(e);
                    return (
                        <li>
                            <Link href={`/subpage/${e.attributes.slug}`}>{e.attributes.nazwa}</Link>
                        </li>
                    )
                })}
            </ul>
        </DropDownMenuStyling>
    )
}

export default DropDownMenu;