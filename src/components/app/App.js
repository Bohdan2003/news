import Header from "../header/Header";
import Footer from "../footer/Footer";
import Stat from "../stat/Stat";
import Slider from "../slider/Slider";
import NewsAll from '../newsAll/NewsAll';
import NewsEditorial from "../newsEditorial/NewsEditorial";
import NewsRegions from "../newsRegions/NewsRegions";
import NewsVideo from "../newsVideo/NewsVideo";
import NewsColumns from "../newsColumns/NewsColumns";

import './app.scss';

export default () => {
    return (
        <>
            <Header/>
            <Stat/>
                <div className="main">
                    <Slider/>
                    <section className="news">
                        <div className="container">
                            <div className="news__inner">
                                <NewsAll/>
                                <div className="news__box">
                                    <NewsEditorial/>
                                    <NewsRegions/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <NewsVideo/>
                    <section className="news-bottom">
                        <div className="container">
                            <div className="news-bottom__inner">
                                <NewsColumns/>
                                <div className="news-bottom__box">
                                    {/* <NewsEditorial/> */}
                                    {/* <NewsRegions/> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            <Footer/>
        </>
    )
};