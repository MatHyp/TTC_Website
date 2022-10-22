import { DropDownMenuStyling } from "./styles/DropDownMenu.styled"
import Link from 'next/link'
const DropDownMenu = ({ link }) => {

    return (
        <DropDownMenuStyling >
            <ul>

                {link.map(e => {
                    return (
                        <Link href={`/subpage/${e.attributes.slug}`} key={e.id}>
                            <li key={e.id}>
                                <Link href={`/subpage/${e.attributes.slug}`}>{e.attributes.nazwa}</Link>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </DropDownMenuStyling>
    )
}

export default DropDownMenu;