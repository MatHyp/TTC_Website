import Image from 'next/image'
import { NavListUlStyles } from './styles/NavListUl.styled'
import NavItemLi from './NavItemLi'
import { useState } from 'react'


const NavigationList = ({ navData }) => {
    const [open, setOpen] = useState(false)


    return (
        <>
            <img src='/images/logo_ttc.png' alt='Logo technikum technologii cyfrowych' />
            <img src='/images/nav-open.png' onClick={(e) => setOpen(!open)} />
            <NavListUlStyles open={open}>
                {/* <NavItemLi name='Aktulaności' />
                <NavItemLi name='O szkole' />
                <NavItemLi name='Strefa ucznia' />
                <NavItemLi name='Strefa rodzica' />
                <NavItemLi name='Strefa nauczyciela' />
                <NavItemLi name='Strefa kandydata' /> */}
                {navData.map(e => {

                    return <NavItemLi name={e.attributes.nazwaStrefy} links={e.attributes.nawigacjas.data} />
                })}
            </NavListUlStyles>
        </>
    )
}

export default NavigationList;