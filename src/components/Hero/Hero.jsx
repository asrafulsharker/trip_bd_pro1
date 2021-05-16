import './Hero.scss'
import {init} from 'ityped';
import { useEffect,useRef } from 'react';


import HeroImg1 from '../../images/hero1.png';
import DownImg from '../../images/down.png';


export default function Hero() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Travel','Book Hotel', 'Enjoy Vacation'],
        });

    },[])
    return (
        <div className="hero" id="home">
            <div className="search">
                <input className="search-input" type="text" placeholder="Where to?"/>
                <i class="fas fa-search-location search-btn"></i>
            </div>
            <div className="home1">
            <div className="left">
                <div className="wrapper">
                    <h1>Keep Planning</h1>
                    <h2>Explore and <span ref={textRef}></span></h2>
                </div>
            </div>
            <div className="right">
                <div className="imageContainer">
                    <img src={HeroImg1} alt="heroimg"/>
                </div>
                <a href="#explore">
                    <img src={DownImg} alt="down"/>
                </a>
            </div>
            </div>

        </div>
    )
}
