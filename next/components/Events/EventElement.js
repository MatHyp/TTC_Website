import { EventElementStyling } from "./styles/EventElement.styled";

const EventElement = () => {
    return (
        <EventElementStyling>
            <img src="images/TTC.png" />
            <p className="data">10.12.2003 r</p>
            <p className="event-title">Rozpoczecie Roku</p>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </EventElementStyling>
    )
}

export default EventElement;