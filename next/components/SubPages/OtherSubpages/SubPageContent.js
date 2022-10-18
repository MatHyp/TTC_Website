import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { SubPageContentStyling } from './Styling/SubPageContent.styled';

import MarkDown from 'markdown-to-jsx';

const SubPageContent = ({ data }) => {
    console.log(data.attributes.content);
    console.log(data);
    return (
        <SubPageContentStyling>
            <div>
                <MarkDown>
                    {data.attributes.content}
                </MarkDown>

            </div>
        </ SubPageContentStyling>
    )
}

export default SubPageContent