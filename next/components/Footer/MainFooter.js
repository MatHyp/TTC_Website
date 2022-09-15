import { MainFooterStyling } from "./styles/MainFooter.styled";
import { MainFooterContainerStyling } from "./styles/MainFooterContainer.styled";

const MainFooter = () => {
    return <MainFooterStyling>
            <MainFooterContainerStyling>
                <img src='/images/logo_ttc.png' alt='Logo technikum technologii cyfrowych' />
                <div>
                    <h1 className="title">Technikum Technologii Cyfrowych</h1>
                    <p className="details">ul. Niemierzyńska 17</p>
                    <p className="details">tel. 91 421 2610</p>
                </div>
                <img src='/images/bip.png'  className="bip"/>
            </MainFooterContainerStyling>
            <div className="line"></div>
            <p className="copyright">© 2022 Technikum Technologii Cyfrowych. Wszelkie prawa zastrzeżone.</p>
    </MainFooterStyling>
}

export default MainFooter;