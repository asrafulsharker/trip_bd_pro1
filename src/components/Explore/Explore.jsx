import './Explore.scss'
import ExploreImg from '../../images/explore1.png'

export default function Explore() {
    return (
        <div className="explore" id="explore">
            <div className="left">
                <div className="imageContainer">
                    <img src={ExploreImg} alt="explore img"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>A new way to explore the world</h1>
                    <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect 
                    trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                    <a href="#" >Learn More</a>
                </div>
            </div>
        </div>
    )
}
