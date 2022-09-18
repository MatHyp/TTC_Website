import { MainAboutStyles } from './styles/MainAbout.styled'
import AboutDescription from './AboutDescription'
import Image from 'next/image'
const MainAbout = () => {
    return (
        <MainAboutStyles>
            <Image src='/images/TTC.png' width='700px' height='300px' objectFit='contain' />
            <AboutDescription />
        </MainAboutStyles>
    )
}

export default MainAbout