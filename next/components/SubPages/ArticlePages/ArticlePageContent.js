import { ArticlePageContentStyling } from './Styling/ArticlePageContent.styled'
import { ArticlePageContainer } from './Styling/ArticlePageContainer.styled'
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
                <Image src={data.image} width={700} height={300} objectFit='contain' />
            </ArticlePageContentStyling>
            <article className='description' dangerouslySetInnerHTML={{ __html: data.description }} />
        </ArticlePageContainer >
    )
}

export default ArticlePageContent