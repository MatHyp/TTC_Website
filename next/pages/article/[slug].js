import axios from "axios";
import React from "react";
import MarkdownIt from "markdown-it";
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
    const postRes = await axios.get(`http://localhost:1337/api/articles/${params.slug}`)
    const navRes = await axios.get('http://localhost:1337/api/strefies?fields=nazwaStrefy&populate=nawigacjas');

    return {
        props: {
            post: postRes.data.data,
            navRes: navRes.data
        }
    }
}


export async function getStaticPaths() {
    const get = await fetch('http://localhost:1337/api/articles')
    const data = await get.json()


    const paths = data.data.map(post => {
        return { params: { slug: post.attributes.slug.toString() } }
    })

    return {
        paths,
        fallback: false
    }
}
