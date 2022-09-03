import Image from 'next/image'
import { NavListUlStyles } from './styles/NavListUl.styled'
import NavItemLi from './NavItemLi'

const NavigationList = () => {
    return (
        <NavListUlStyles>
            <img src='/images/logo_ttc.png' alt='Logo technikum technologii cyfrowych' />

            <NavItemLi name='Aktulaności' />
            <NavItemLi name='O szkole' />
            <NavItemLi name='Strefa ucznia' />
            <NavItemLi name='Strefa rodzica' />
            <NavItemLi name='Strefa nauczyciela' />
            <NavItemLi name='Strefa kandydata' />
        </NavListUlStyles>)
}

export default NavigationList;