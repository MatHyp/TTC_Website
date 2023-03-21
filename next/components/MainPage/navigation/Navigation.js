import { NavTopBarStyles } from './styles/NavTopBar.styled'
import { NavMainBarStyled } from './styles/NavMainBar.styled'
import { NavWrapperStyles } from './styles/NavWrapper.styled'
import NavigationList from './NavigationList'

const Navigation = ({ navData }) => {

    return <NavWrapperStyles >
        <NavTopBarStyles />

        <NavMainBarStyled>
            <NavigationList navData={navData} />
        </NavMainBarStyled>
    </NavWrapperStyles>
}

export default Navigation;