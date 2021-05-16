import './Guides.scss'
import GuidesImg from '../../images/guides.png';

export default function Guides() {
    return (
        <div className="guides" id="guides">
            <div className="leftG">
                <div className="wrapper">
                <h1>Guides by Thousand <br/>
                    Sunny</h1>
                    <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect 
                    trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                    <a href="#" >Download</a>
                </div>
            </div>
            <div className="rightG">
                <div className="imageContainer">
                    <img src={GuidesImg} alt="heroimg"/>
                </div>
            </div>
        </div>
    )
}
