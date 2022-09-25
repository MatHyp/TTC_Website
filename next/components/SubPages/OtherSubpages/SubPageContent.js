import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

const SubPageContent = ({ data }) => {
    console.log(data.attributes.content);
    return (
        <>

            <ReactMarkdown className='description'>{data.attributes.content}</ReactMarkdown>
        </ >
    )
}

export default SubPageContent