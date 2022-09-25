import { NavTopBarStyles } from './styles/NavTopBar.styled'
import { NavMainBarStyled } from './styles/NavMainBar.styled'

import NavigationList from './NavigationList'

const Navigation = ({ navData }) => {

    return <div >
        <NavTopBarStyles />

        <NavMainBarStyled>
            <NavigationList navData={navData} />
        </NavMainBarStyled>
    </div>
}

export default Navigation;