import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

import DropDownMenu from './DropDownMenu'

const NavItemLi = ({ name, links }) => {
    const [show, setShow] = useState(false)

    return <li onMouseEnter={e => setShow(true)} onMouseLeave={e => setShow(false)}>
        <Link href='/' >{name}</Link>
        {show && <DropDownMenu link={links} />}

    </li>
}

export default NavItemLi;