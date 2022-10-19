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
                <div style={{ width: '140px', height: '50px' }} className='img'>
                    <Image src={"/images/logo_ttc.png"} layout='fill' alt='logo technikum technologi cyfrowych' />
                </div>
            </Link>
            <NavListUlStyles open={open}>
                {navData.map(e => {

                    return <NavItemLi name={e.attributes.nazwaStrefy} links={e.attributes.nawigacjas.data} key={e.id} />
                })}
            </NavListUlStyles>
        </>
    )
}

export default NavigationList;