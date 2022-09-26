import { KadraElementStyling } from './Styling/KadraContainer.styled'
import { KadraElementDescription } from './Styling/KadraContainer.styled'
import Image from 'next/image'
const KadraElement = () => {
    return (
        <KadraElementStyling>
            <KadraElementDescription>
                <div>
                    <p className='title'>mgr inż. Ewa Dobrzycka</p>
                    <p className='role'>Dyrektor szkoły</p>
                    <p className='description'>Dyrektor szkoły i wieloletni nauczyciel biologii w szkołach gimnazjalnych  oraz ponadgimnazjalnych. Doświadczony pedagog i wychowawca młodzieży. Egzaminator OKE. Inicjatorka wielu projektów edukacyjnych i współpracy międzynarodowej. Lubi podejmować trudne wyzwania, które z konsekwencją realizuje. Ceni pracę zespołową nauczycieli, ich kreatywność oraz innowacyjność.</p>
                </div>
                <img src='/images/dyrektorka.png' width="13%" />
            </KadraElementDescription>
            <div className='border-bottom'></div>
        </KadraElementStyling>
    )
}

export default KadraElement;