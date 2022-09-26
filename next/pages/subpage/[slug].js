import axios from "axios";
import React from "react";
import Navigation from "../../components/MainPage/navigation/Navigation";

import Header from "../../components/SubPages/SubHeader/Header";
import SubPageContent from "../../components/SubPages/OtherSubpages/SubPageContent";
function SubPage({ navRes, navRess }) {

    return (
        <>
            <Navigation navData={navRess.data} />
            <Header />
            <SubPageContent data={navRes} />
        </>
    )
}

export default SubPage;

export async function getStaticProps({ params }) {
    const navRes = await axios.get(`http://localhost:1337/api/nawigacjas/${params.slug}?populate=media`)
    const navRess = await axios.get('http://localhost:1337/api/strefies?fields=nazwaStrefy&populate=nawigacjas');

    return {
        props: {
            navRes: navRes.data.data,
            navRess: navRess.data
        }
    }
}

export async function getStaticPaths() {
    const get = await fetch('http://localhost:1337/api/nawigacjas')
    const data = await get.json()

    const paths = data.data.map(post => {
        return { params: { slug: post.attributes.slug.toString() } }
    })

    return {
        paths,
        fallback: false
    }
}