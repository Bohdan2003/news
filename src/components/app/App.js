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
import Promotion from "../promotion/Promotion";

import './app.scss';

import img from "../../assets/newsRegions/1.jpg"
import img1 from "../../assets/promotion/1.jpg"
import img2 from "../../assets/newsSection/1.jpg"

export default () => {

    const firstNewsList = [
        {type:`news`, classType:`breaking`, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '14:59'},
        {type:`news`, classType:``, descr:`Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф` , time: '14:59'},
        {type:`news`, classType:`video`, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '14:59'},
        {type:`news`, classType:``, descr:`"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано` , time: '14:59'},
        {type:`news`, classType:``, descr:`"Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців` , time: '14:59'}
    ];

    const secondNewsList = [
        {type:`news`, classType:``, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '14:59'},
        {type:`news`, classType:`online`, descr:`Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф` , time: '14:59'},
        {type:`news`, classType:``, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '14:59'},
        {type:`news`, classType:``, descr:`"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано` , time: '14:59'},
        {type:`news`, classType:``, descr:`"Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців` , time: '14:59'}
    ];
    const thirdNewsList = [
        {type:`news`, classType:``, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '14:59'},
        {type:`news`, classType:`exclusive`, descr:`Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф` , time: '14:59'},
        {type:`news`, classType:`video`, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '14:59'},
        {type:`news`, classType:``, descr:`"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано` , time: '14:59'},
        {type:`news`, classType:``, descr:`"Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців` , time: '14:59'}
    ];

    const firstNews = [
        {img, date: "2022-08-05-11-00", descr: "Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі."},
        {img, date: "2022-08-05-11-00", descr: "Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України."},
        {img, date: "2022-08-05-11-00", descr: "Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України."}
    ]; 
    const thirdNews = [
        {img: img2, date: "2022-08-05-11-00", descr: "Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі."},
        {img, date: "2022-08-05-11-00", descr: "Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України."},
        {img, date: "2022-08-05-11-00", descr: "Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України."}
    ]; 

    const dataPromotion = {img: img1, date: "2022-08-05-11-00", descr: "Акція! Телевізори Samsung з вигодою та в оплату частинами до 12 платежів", items:[
        {date: "2022-08-05-11-00", descr:"Замовте нові флагмани Samsung Galaxy Fold4|Flip4 і отримуйте подарунки"},
        {date: "2022-08-05-11-00", descr:"Зустрічай нову серію смартфонів та навушників від Samsung"},
        {date: "2022-08-05-11-00", descr:"Зустрічай нову серію смартфонів та навушників від Samsung"},
        {date: "2022-08-05-11-00", descr:"Зустрічай нову серію смартфонів та навушників від Samsung"},
        {date: "2022-08-05-11-00", descr:"Мобільний телефон Xiaomi Redmi 9C 3/64GB"}
    ]}

    return (
        <>
            <Header/>
            {/* <Stat/> */}
                <div className="main">
                    {/* <Slider/> */}
                    {/* <section className="news">
                        <div className="container">
                            <div className="news__inner">
                                <NewsAll/>
                                <div className="news__box">
                                    <NewsEditorial/>
                                    <NewsRegions/>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* <NewsVideo/> */}
                    {/* <section className="news-bottom">
                        <div className="container">
                            <div className="news-bottom__inner">
                                <NewsColumns/>
                                <div className="news-bottom__box">
                                    <NewsSection newsList={firstNewsList} news={firstNews}/>
                                    <Promotion {...dataPromotion}/>
                                    <NewsSection newsList={secondNewsList} news={firstNews}/>
                                    <NewsSection newsList={thirdNewsList} news={thirdNews}/>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </div>
            {/* <Footer/> */}
        </>
    )
};