import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

import DropDownMenu from './DropDownMenu'

const NavItemLi = ({ name }) => {

    return <li>
        <Link href='/'>{name}</Link>
        <DropDownMenu />
    </li>
}

export default NavItemLi;