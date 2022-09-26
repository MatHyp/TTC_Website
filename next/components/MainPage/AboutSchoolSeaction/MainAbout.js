import { MainAboutStyles } from './styles/MainAbout.styled'
import AboutDescription from './AboutDescription'
import Image from 'next/image'
const MainAbout = () => {
    return (
        <MainAboutStyles>
            <Image src='/images/TTC.png' width='700px' height='300px' objectFit='contain' alt='Zdjecie przedstawiające budynek TTC' />
            <AboutDescription />
        </MainAboutStyles>
    )
}

export default MainAbout