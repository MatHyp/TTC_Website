import { MainAboutStyles } from './styles/MainAbout.styled'
import AboutDescription from './AboutDescription'

const MainAbout = () => {
    return (
        <MainAboutStyles>
            <img src='/images/TTC.png' />
            <AboutDescription />
        </MainAboutStyles>
    )
}

export default MainAbout