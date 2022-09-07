import { NavTopBarStyles } from './styles/NavTopBar.styled'
import { NavMainBarStyled } from './styles/NavMainBar.styled'

import NavigationList from './NavigationList'

const Navigation = () => {
    return <div >
        <NavTopBarStyles />

        <NavMainBarStyled>
            <NavigationList />
        </NavMainBarStyled>
    </div>
}

export default Navigation;