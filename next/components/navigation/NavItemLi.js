import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';


const NavItemLi = ({ name }) => {
    const [open, setOpen] = useState(false)

    return <li>
        <Link href='/'>{name}</Link>

    </li>
}

export default NavItemLi;