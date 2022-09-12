import { EventElementStyling } from "./styles/EventElement.styled";

const EventElement = ({img}) => {
    return (
        <EventElementStyling>
            <img src={img} />
            <p className="data">15 CZERWCA 2022</p>
            <p className="event-title">Rozpoczecie Roku</p>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... <span className="read-more">czytaj wiecej</span> 
            </p>
            <div className="border-bottom"></div>
        </EventElementStyling>
    )
}

export default EventElement;