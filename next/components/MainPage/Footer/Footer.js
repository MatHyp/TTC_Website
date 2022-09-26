import Image from "next/image";
import { FooterStyling } from "./styles/Footer.styled";

const Footer = () => {
    return <FooterStyling >
        <div>
            <Image src='/images/companys/rm.png' width='300px' height='80px' objectFit='contain' alt="logo firmy R Malujda" />
            <Image src='/images/companys/gl.png' width='300px' height='80px' objectFit='contain' alt="logo firmy Global Logic" />
            <Image src='/images/companys/sagra.png' width='300px' height='80px' objectFit='contain' alt="logo firmy Sagra" />
            <Image src='/images/companys/softvig.png' width='300px' height='80px' objectFit='contain' alt="logo firmy Softvig" />
            <Image src='/images/companys/teo.png' width='300px' height='80px' objectFit='contain' alt="logo firmy Teonite" />
        </div>

    </FooterStyling>
}

export default Footer;