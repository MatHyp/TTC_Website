import axios from "axios";
import React from "react";
import Header from "../../components/SubPages/SubHeader/Header";
import Navigation from "../../components/MainPage/navigation/Navigation";
import ArticlePageContent from "../../components/SubPages/ArticlePages/ArticlePageContent";
function ArticlePage({ navRes, post }) {

    return (
        <>
            <Navigation navData={navRes.data} />
            <Header />
            <ArticlePageContent data={post.attributes} />
        </>
    )
}

export default ArticlePage;

export async function getStaticProps({ params }) {
    const postRes = await axios.get(`http://s2.ttc.ovh:81/api/articles/${params.slug}`)
    const navRes = await axios.get('http://s2.ttc.ovh:81/api/strefies?fields=nazwaStrefy&populate=nawigacjas');

    return {
        props: {
            post: postRes.data.data,
            navRes: navRes.data
        }
    }
}


export async function getStaticPaths() {
    const get = await fetch('http://s2.ttc.ovh:81/api/articles')
    const data = await get.json()


    const paths = data.data.map(post => {
        return { params: { slug: post.attributes.slug.toString() } }
    })

    return {
        paths,
        fallback: false
    }
}
