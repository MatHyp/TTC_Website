import { KadraContainerStyling } from './Styling/KadraContainer.styled'
import { KadraAboutStyling } from './Styling/KadraContainer.styled'
import { MainImageWrapper } from './Styling/KadraContainer.styled'

import KadraElement from './KadraElement'
import Image from 'next/image'
const KadraContainer = () => {
    return (
        <KadraContainerStyling>
            <KadraAboutStyling>
                <div>
                    <h1 className='kadra-title'>KADRA TTC – JAKIM JESTEŚMY ZESPOŁEM?</h1>
                    <p className='description'>Kadra Technikum Technologii Cyfrowych to zespół bardzo dobrze wykształconych, wciąż podnoszących swoje kwalifikacje pedagogów, wśród których znajdują się egzaminatorzy Okręgowej Komisji Egzaminacyjnej. Nasi nauczyciele to przede wszystkim pasjonaci zawodu. Twórczo i ambitnie realizując zamierzone cele, potrafią nie tylko wymagać, ale również wspierać uczniów w rozwoju, a także inspirować ich do kreatywnego działania, o czym świadczą m.in. wielokrotni laureaci i finaliści konkursów przedmiotowych i tematycznych na szczeblu ogólnopolskim oraz wojewódzkim. Efektem ciągłego poszukiwania nowych rozwiązań stały się liczne autorskie programy nauczania i projekty współpracy międzynarodowej szkół w ramach Unii Europejskiej. Dbając o wszechstronny rozwój uczniów, nasi nauczyciele stwarzają możliwość rozwijania pasji i zainteresowań oraz aktywnego uczestniczenia w życiu kulturalnym i naukowym miasta.</p>
                </div>
                <img src='/images/kadra.png' width="30%" height="30%" />
            </KadraAboutStyling>

            <KadraElement />
            <KadraElement />
            <KadraElement />
        </KadraContainerStyling>
    )
}

export default KadraContainer;