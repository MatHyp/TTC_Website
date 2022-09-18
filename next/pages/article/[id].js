import axios from "axios";
import React from "react";
import MarkdownIt from "markdown-it";
import Header from "../../components/SubArticlePage/header/Header";
import ArticlePageContent from "../../components/SubArticlePage/ArticlePageContent/ArticlePageContent";
function ArticlePage({ post }) {
    const md = new MarkdownIt();
    const htmlContent = md.render(post.attributes.description);


    return (
        <>
            <Header />
            <ArticlePageContent data={post.attributes} />
        </>
    )
}

export default ArticlePage;

export async function getStaticProps({ params }) {
    const postRes = await axios.get(`http://localhost:1337/api/articles/${params.id}`)

    return {
        props: {
            post: postRes.data.data
        }
    }
}

export async function getStaticPaths() {
    const get = await fetch('http://localhost:1337/api/articles')
    const data = await get.json()


    const paths = data.data.map(post => {
        return { params: { id: post.id.toString() } }
    })

    return {
        paths,
        fallback: false
    }
}