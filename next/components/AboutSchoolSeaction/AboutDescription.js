import { AboutDescriptionStyling } from "./styles/AboutDescription.styled"

const AboutDescription = () => {
    return (       
    <AboutDescriptionStyling>
        <div>
            <div className="tr"></div>
            <h1>O szkole</h1>    
        </div>  
        <p>Historia szkoły rozpoczyna się 15 października 1948 r. kiedy to powołane 
            zostaje Gimnazjum Przemysłowe Telekomunikacyjne oraz Liceum 
            Przemysłu Telekomunikacyjnego z siedzibą na ul Stępińskiej 26 w 
            Warszawie. Naukę rozpoczyna wówczas 146 uczniów w 2 oddziałach 
            gimnazjum i 1 oddziale liceum.</p>
        
        <div className="btn-container">
            <button>Wiecej Informacji</button>
            <div className="border"></div>
        </div>
    </AboutDescriptionStyling>
    )
}

export default AboutDescription