import './Trending.scss'
import {DataTrending} from './DataTrending';
export default function Trending() {
    return (
        <div className="trending" id="trending">
            <div className="topTrending">
                <div className="leftT">
                    <h1>Feature destinations</h1>
                </div>
                <div className="rightT">
                    <a href="#">View all</a><i class="fas fa-chevron-right"></i>
                </div>
            </div>
            <div className="TImgDiv">
                {DataTrending.map((f)=>(
                        <div className="TrendingImgDiv">
                            <img className="TrendingImg" src={f.image} alt="dwd"/>
                            <div className="TrendingDec">
                                <h4 className="">{f.title}</h4>
                                <p className="">{f.description}</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
}
