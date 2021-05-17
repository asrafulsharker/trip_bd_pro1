import './Contact.scss'
import Footer from '../Footer/Footer';
import massageImg from '../../images/massageC.png'
export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="contactSm">
            <h2>HAVE SOME QUESTION?</h2>
            <p className="pC"><i class="fas fa-globe-europe"></i> <span> BANGLADESH </span> <a href="#">BD</a> : Dhaka, Bangladesh</p>
            <div className="contactDiv">
                <div className="leftC">
                    <div className="imageContainerC">
                        <img src={massageImg}/>
                    </div>
                </div>
                <div className="rightC">
                    <div className="wrapper">
                        <p>Your Name</p>
                        <input type="text" placeholder="Enter your name"/>
                        <p>Email</p>
                        <input type="email" placeholder="Enter your email address"/>
                        <p>Massage</p>
                        <textarea rows="4"name="Massage" >Your massage here</textarea>
                        <br/>
                        <a href="#">Submit</a>
                    </div>
                </div>
            </div>
            </div>

            <Footer/>
        </div>
    )
}
