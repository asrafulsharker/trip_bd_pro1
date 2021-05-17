import { useState } from 'react';
import './Testimonials.scss';
import { DataTestimonials } from './DataTestimonials';

export default function Testimonials() {
    const [currentSlide, stateCurrentSlide] = useState(0);

    const handleClick =(way) =>{
        way == "left"
        ? stateCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : stateCurrentSlide(currentSlide < DataTestimonials.length -1 ? currentSlide + 1 : 0);
        
    }
    return (
        <div className="testimonials" id="testimonials">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {DataTestimonials.map((d) => (
                <div className="container">
                    <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                        <div className="imgContainer">
                            {/* <img src={d.icon} alt="" /> */}
                        </div>
                        <p>{d.description}</p>
                        <h2>{d.name}</h2>
                        <p>{d.position}</p>
                        <span>Projects</span>
                        </div>
                    </div>
                    <div className="right">
                        <img style={{height:"200px"}}
                        src={d.image}
                        alt=""
                        />
                      
                    </div>
                    </div>
                </div>
                ))}
            </div>
                <i onClick={() => handleClick("left")}  class="fas fa-chevron-left arrow left"></i>
                <i class="fas fa-chevron-right arrow right" onClick={() => handleClick()}></i>
               
        </div>
    )
}
