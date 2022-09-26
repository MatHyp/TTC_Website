import axios from "axios";
import React from "react";
import Navigation from "../../components/MainPage/navigation/Navigation";
import KadraContainer from "../../components/SubPages/KadraSubpage/KadraContainer";
import Header from "../../components/SubPages/SubHeader/Header";

function KadraPage({ navRes }) {
    return (
        <>
            <Navigation navData={navRes.data} />
            <Header />
            <KadraContainer />
        </>
    )
}

export default KadraPage;

export async function getStaticProps() {

    const navRes = await axios.get('http://localhost:1337/api/strefies?fields=nazwaStrefy&populate=nawigacjas');

    return {
        props: {
            navRes: navRes.data
        },
    };
}

