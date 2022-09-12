import { EventsListStyling } from "./styles/EventsList.styled"
import EventElement from "./EventElement"
const EventList = () => {
    return (
        <EventsListStyling>
            <h1 className="title">Aktualnosci</h1>
            <EventElement />
            <EventElement />
            <EventElement />
            <EventElement />
        </EventsListStyling>
    )
}

export default EventList