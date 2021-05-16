import './Featured.scss';
import {destination} from './DataFeatured';

export default function Featured() {
    return (
        <div className="featured" id="featured">
            <div className="topFeatured">
                <div className="left1">
                    <h1>Feature destinations</h1>
                </div>
                <div className="right1">
                    <a href="#">View all</a><i class="fas fa-chevron-right"></i>
                </div>
            </div>
            <div className="imgDIv">
                
                    {destination.map((f)=>(
                        <div className="featured_imgDiv">
                            <img className="featuredImg" src={f.img} alt="dwd"/>
                            <div className="featuredSmDiv">
                                <h1 className="featuredTitle">{f.title}</h1>
                                <p className="featuredCountry">{f.country}</p>
                            </div>
                        </div>
                    ))}
                
            </div>

        </div>
    )
}
