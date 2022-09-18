import { ArticlePageContentStyling } from './Styling/ArticlePageContent.styled'
import Image from 'next/image'
const ArticlePageContent = ({ data }) => {
    console.log(data);
    return (
        <ArticlePageContentStyling>
            <div>
                <p className='data'>{data.createdAt}</p>
                <p className='title'>{data.title}</p>
            </div>
            <Image src='/images/news1.png' width={600} height={300} objectFit='contain' />
        </ArticlePageContentStyling>
    )
}

export default ArticlePageContent