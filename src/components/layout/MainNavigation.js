import { Link } from "react-router-dom";

function MainNavigate(){
return(
    <>
    <h1>React Linking</h1>
    <nav>
        <ul>
            <li>
                <Link to= '/'>AllMeetup</Link>
            </li>
            <li>
                <Link to= '/new-meetup'>NewMeetup</Link>
            </li>
            <li>
                <Link to= '/favourites'>Favourites Meetup</Link>
            </li>
        </ul>
    </nav>
    </>
)

}
export default MainNavigate;