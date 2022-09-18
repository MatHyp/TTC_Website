import { MainFooterStyling } from "./styles/MainFooter.styled";
import { MainFooterContainerStyling } from "./styles/MainFooterContainer.styled";

const MainFooter = () => {
    return <MainFooterStyling>
        <MainFooterContainerStyling>
            <img src="images/logo_ttc.png" />
            <div>
                <p className="title">TECHNIKUM TECHNOLOGII CYFROWYCH</p>
                <p className="details">ul. Niemierzynska 20/1</p>
                <p className="details">71-441 Szczecin </p>
                <p className="details">tel. 91 421 2610</p>
            </div>
            <img src="images/bip.png" className="bip" />
        </MainFooterContainerStyling>
        <p className="copyright">© 2022 Technikum Technologii Cyfrowych. Wszelkie prawa zastrzeżone.</p>
        <p className="creator">Pomysl i realizacja: <span> Mateusz Hyps </span></p>
    </MainFooterStyling>
}

export default MainFooter;