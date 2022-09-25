import { EventElementStyling } from "./styles/EventElement.styled";
import Link from "next/link";
import Image from "next/image";

const EventElement = ({ post, id }) => {
    console.log(post);
    return (
        <EventElementStyling>
            <div>
                <Image src='/images/news1.png' width='800px'
                    height='500px'
                    objectFit='contain'
                    alt='Brand logo' />
            </div>

            <p className="data">15 CZERWCA 2022</p>
            <p className="event-title">{post.title}</p>
            <p className="description">
                {post.description.slice(0, 200)}
                <Link href={`article/${post.slug}`}>
                    <span className="read-more">czytaj wiecej</span>
                </Link>
            </p>
            <div className="border-bottom"></div>
        </EventElementStyling>
    )
}

export default EventElement;