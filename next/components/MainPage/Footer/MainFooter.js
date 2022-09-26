import { MainFooterStyling } from "./styles/MainFooter.styled";
import { MainFooterContainerStyling } from "./styles/MainFooterContainer.styled";
import Image from "next/image";
const MainFooter = () => {
    return <MainFooterStyling>
        <MainFooterContainerStyling>
            <Image src="/images/logo_ttc.png" alt="Logo technikum technologii cyfrowych" width={300} height={80} objectFit="contain" />
            <div>
                <p className="title">TECHNIKUM TECHNOLOGII CYFROWYCH</p>
                <p className="details">ul. Niemierzynska 20/1</p>
                <p className="details">71-441 Szczecin </p>
                <p className="details">tel. 91 421 2610</p>
            </div>
            <Image src="/images/bip.png" className="bip" width={200} height={40} alt="Logo bip" objectFit="contain" />
        </MainFooterContainerStyling>
        <p className="copyright">© 2022 Technikum Technologii Cyfrowych. Wszelkie prawa zastrzeżone.</p>
        <p className="creator">Pomysl i realizacja: <span> Mateusz Hyps </span></p>
    </MainFooterStyling>
}

export default MainFooter;