import Header from "../header/Header";
import Footer from "../footer/Footer";
import Stat from "../stat/Stat";
import Slider from "../slider/Slider";
import NewsAll from '../newsAll/NewsAll';
import NewsEditorial from "../newsEditorial/NewsEditorial";
import NewsRegions from "../newsRegions/NewsRegions";
import NewsVideo from "../newsVideo/NewsVideo";
import NewsColumns from "../newsColumns/NewsColumns";
import NewsSection from "../newsSection/NewsSection";

import './app.scss';

import img from "../../assets/newsRegions/1.jpg"

export default () => {

    const firstNewsList = [
        {type:`news`, classType:`breaking`, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '14:59'},
        {type:`news`, classType:``, descr:`Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф` , time: '14:59'},
        {type:`news`, classType:`video`, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '14:59'},
        {type:`news`, classType:``, descr:`"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано` , time: '14:59'},
        {type:`news`, classType:``, descr:`"Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців` , time: '14:59'}
    ];

    const secondNewsList = [
        {type:`news`, classType:`breaking`, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '14:59'},
        {type:`news`, classType:`photo`, descr:`Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф` , time: '14:59'},
        {type:`news`, classType:`video`, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '14:59'},
        {type:`news`, classType:`online`, descr:`"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано` , time: '14:59'},
        {type:`news`, classType:`exclusive`, descr:`"Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців` , time: '14:59'}
    ];

    const firstNews = [
        {img, data: "2022-08-05-11-00", descr: "Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі."},
        {img, data: "2022-08-05-11-00", descr: "Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України."},
        {img, data: "2022-08-05-11-00", descr: "Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України."}
    ]; 

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
                                    <NewsSection newsList={firstNewsList} news={firstNews}/>
                                    <NewsSection newsList={firstNewsList} news={firstNews}/>
                                    <NewsSection newsList={firstNewsList} news={firstNews}/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            <Footer/>
        </>
    )
};