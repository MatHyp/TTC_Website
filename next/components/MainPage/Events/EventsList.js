import { EventsListStyling } from "./styles/EventsList.styled"
import EventElement from "./EventElement"
import { EventsStyling } from "./styles/Events.styled"
import { useEffect, useState } from "react"
const EventList = ({ events }) => {

    const [latestPosts, setLatestPosts] = useState([]);
    useEffect(() => {
        setLatestPosts(events.slice(events.length - 6, events.length).reverse());
    }, [events])

    function renderEventPreviews() {
        return latestPosts.map((post) => {
            return <EventElement post={post.attributes} key={post.id} id={post.id} />
        })
    }

    return (
        <EventsStyling>
            <h1 className="title">co <span className="title-span">nowego?</span></h1>
            <div className="bgc"></div>
            <div className="bgc-2"></div>
            <EventsListStyling>
                {renderEventPreviews()}
            </EventsListStyling>
            <button className="btn-all">Zobacz wszystkie artykuly</button>
        </EventsStyling>
    )
}

export default EventList