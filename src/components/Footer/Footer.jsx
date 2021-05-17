import './Footer.scss'
import Logo from '../../images/logo.png';
export default function Footer() {
    return (
        <div  className="footer" id="footer">
            <div className="footerTop">
                <div className="leftFo">
                    <img src={Logo} alt="logo"/>
                    <p className="palanF">Plan and book your perfect trip with 
                    expert advice, travel tips destination
                    information from us</p>
                    <p className="footerCredit">©2020 Thousand Sunny. All rights reserved</p>
                </div>
                <div className="rightFo">
                <div className="mid1F">
                    
                    <ul>
                        <li className="midH1">Destinations</li>
                        <li>Africa</li>
                        <li>Antarctica</li>
                        <li>Asia</li>
                        <li>Europe</li>
                        <li>America</li>
                    </ul>
                </div>
                <div className="mid2F">
                    <ul>
                        <li className="midH1">Shop</li>
                        <li>Destination Guides</li>
                        <li>Pictorial & Gifts</li>
                        <li>Special Offers</li>
                        <li>Delivery Times</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className="mid3F">
                    <ul>
                        <li className="midH1">Interests</li>
                        <li>Adventure Travel</li>
                        <li>Art And Culture</li>
                        <li>Wildlife And Nature</li>
                        <li>Family Holidays</li>
                        <li>Food And Drink</li>
                    </ul>
                </div>
                </div>
            </div>
            <hr/>
            <div className="footerDown">
                <a href="#"><i class="fab fa-twitter"/></a>
                <a href="#"><i class="fab fa-facebook-f"/></a>
                <a href="#"><i class="fab fa-linkedin-in"/></a>
                <a href="#"><i class="fab fa-instagram"/></a>
                <a href="#"><i class="fab fa-youtube"/></a>
            </div>
        </div>
    )
}
