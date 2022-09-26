import Image from 'next/image'
import { NavListUlStyles } from './styles/NavListUl.styled'
import NavItemLi from './NavItemLi'
import { useState } from 'react'
import Link from 'next/link'


const NavigationList = ({ navData }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Link href='/'>
                <Image src='/images/logo_ttc.png' alt='Logo technikum technologii cyfrowych' width={100} height={40} />
            </Link>
            {/* <img src='/images/nav-open.png' onClick={(e) => setOpen(!open)} /> */}
            <NavListUlStyles open={open}>
                {navData.map(e => {
                    return <NavItemLi name={e.attributes.nazwaStrefy} links={e.attributes.nawigacjas.data} key={e.id} />
                })}
            </NavListUlStyles>
        </>
    )
}

export default NavigationList;