import { EventElementStyling } from "./styles/EventElement.styled";
import Link from "next/link";
import Image from "next/image";

const EventElement = ({ post, id }) => {
    let content = post.description.replace(/<img[^>]*>/g, "").trim()
    console.log(post.img.data.attributes.url);

    return (
        <EventElementStyling>
            <div>
                <Image src={`http://s2.ttc.ovh:81${post.img.data.attributes.url}`} className='img' width={450} height={250} objectFit='contain' alt="zdjecie" />
            </div>

            <p className="data">15 CZERWCA 2022</p>
            <p className="event-title">{post.title}</p>
            <div className="description" >
                {
                    <article className="text" dangerouslySetInnerHTML={{ __html: content.split(' ').slice(0, 10).join(' ') }} />
                }
                <Link href={`article/${post.slug}`}>
                    <span className="read-more">czytaj wiecej</span>
                </Link>
            </div>
            <div className="border-bottom"></div>
        </EventElementStyling>
    )
}

export default EventElement;