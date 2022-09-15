import { EventsListStyling } from "./styles/EventsList.styled"
import EventElement from "./EventElement"
import { EventsStyling } from "./styles/Events.styled"
const EventList = () => {
    return (
        <EventsStyling>
            <h1 className="title">co <span className="title-span">nowego?</span></h1>
            <div className="bgc"></div>
            <div className="bgc-2"></div>
            <EventsListStyling>
                <EventElement img='images/news1.png' />
                <EventElement img='images/news4.png' />
                <EventElement img='images/news2.png' />
                <EventElement img='images/news3.png' />
                <EventElement img='images/news3.png' />
                <EventElement img='images/news3.png' />
            </EventsListStyling>
            <button className="btn-all">Zobacz wszystkie artykuly</button>

        </EventsStyling>
    )
}

export default EventList