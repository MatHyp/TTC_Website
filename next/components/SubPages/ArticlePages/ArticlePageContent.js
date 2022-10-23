import { ArticlePageContentStyling } from './Styling/ArticlePageContent.styled'
import { ArticlePageContainer } from './Styling/ArticlePageContainer.styled'

import Image from 'next/image'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const ArticlePageContent = ({ data, galeria }) => {
    return (
        <ArticlePageContainer>
            <ArticlePageContentStyling>
                <div>
                    <p className='data'>{data.createdAt.slice(0, 10)}</p>
                    <p className='title'>{data.title}</p>
                </div>
                <Image src={`http://s2.ttc.ovh:81${data.img.data.attributes.url}`} width={500} height={300} objectFit='contain' />
            </ArticlePageContentStyling>
            <article className='description' dangerouslySetInnerHTML={{ __html: data.description }} />

            {galeria ? <ImageGallery items={galeria} /> : null}
        </ArticlePageContainer >
    )
}

export default ArticlePageContent