import { DropDownMenuStyling } from "./styles/DropDownMenu.styled"
import Link from 'next/link'
const DropDownMenu = ({ link }) => {

    return (
        <DropDownMenuStyling opacity={0}>
            <ul>
                <li key={100}>
                    <Link href={`/subpage/kadra`}>Kadra</Link>
                </li>
                {link.map(e => {

                    return (
                        <li key={e.id}>
                            <Link href={`/subpage/${e.attributes.slug}`}>{e.attributes.nazwa}</Link>
                        </li>
                    )
                })}
            </ul>
        </DropDownMenuStyling>
    )
}

export default DropDownMenu;