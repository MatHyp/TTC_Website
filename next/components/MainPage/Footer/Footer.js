import Image from "next/image";
import { FooterStyling } from "./styles/Footer.styled";

const Footer = () => {
    return <FooterStyling >
        <div>
            <Image src='/images/companys/rm.png' width='300px' height='80px' objectFit='contain' />
            <Image src='/images/companys/gl.png' width='300px' height='80px' objectFit='contain' />
            <Image src='/images/companys/sagra.png' width='300px' height='80px' objectFit='contain' />
            <Image src='/images/companys/softvig.png' width='300px' height='80px' objectFit='contain' />
            <Image src='/images/companys/teo.png' width='300px' height='80px' objectFit='contain' />
        </div>

    </FooterStyling>
}

export default Footer;