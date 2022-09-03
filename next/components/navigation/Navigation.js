import { NavTopBarStyles } from './styles/NavTopBar.styled'
import { NavMainBarStyled } from './styles/NavMainBar.styled'

import NavigationList from './NavigationList'

const Navigation = () => {
    return <>
        <NavTopBarStyles />
        <NavMainBarStyled>
            <NavigationList />
        </NavMainBarStyled>
    </>
}

export default Navigation;