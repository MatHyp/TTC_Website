import { ArticlePageContentStyling } from './Styling/ArticlePageContent.styled'
import { ArticlePageContainer } from './Styling/ArticlePageContainer.styled'

import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
const ArticlePageContent = ({ data }) => {
    console.log(data);
    return (
        <ArticlePageContainer>

            <ArticlePageContentStyling>
                <div>
                    <p className='data'>{data.createdAt.slice(0, 10)}</p>
                    <p className='title'>{data.title}</p>
                </div>
                <Image src='/images/news1.png' width={700} height={300} objectFit='contain' />
            </ArticlePageContentStyling>
            <article dangerouslySetInnerHTML={{ __html: data.description }} />
            {/* <ReactMarkdown className='description'>{data.description}</ReactMarkdown> */}
        </ArticlePageContainer >
    )
}

export default ArticlePageContent