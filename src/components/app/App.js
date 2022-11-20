import Header from "../header/Header";
import Footer from "../footer/Footer";
import Stat from "../stat/Stat";
import Slider from "../slider/Slider";
import NewsAll from '../newsAll/NewsAll';
import NewsEditorial from "../newsEditorial/NewsEditorial";
import NewsRegions from "../newsRegions/NewsRegions";

import './app.scss';

export default () => {
    return (
        <>
            <Header/>
                <div className="main">
                    <Stat/>
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
                </div>
            <Footer/>
        </>
    )
};