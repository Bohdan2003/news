import { useState } from 'react';

import NewsRegionsItem from './NewsRegionsItem';

import './newsRegions.scss';

export default () => {

    const [newsKyiv, setNewsKyiv] = useState([
        {type:`news`, classType:``, descr:`"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано` , time: '2022-08-05-11-00'},
        {type:`news`, classType:`photo`, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '2022-08-05-11-00'},
        {type:`news`, classType:``, descr:`Прем'єрка Швеції відвідала потрощені росіянами Бучу й Бородянку: реакція на побачене` , time: '2022-08-04-11-00'},
        {type:`news`, classType:`breaking`, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '2022-08-04-11-00'},
        {type:`news`, classType:``, descr:`Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф` , time: '2022-08-03-11-00'}
    ]);
    
    const [newsOdesa, setNewsOdesa] = useState([
        {type:`news`, classType:``, descr:`"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано` , time: '2022-08-05-11-00'},
        {type:`news`, classType:`photo`, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '2022-08-05-11-00'},
        {type:`news`, classType:``, descr:`Прем'єрка Швеції відвідала потрощені росіянами Бучу й Бородянку: реакція на побачене` , time: '2022-08-05-11-00'},
        {type:`news`, classType:`breaking`, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '2022-08-05-11-00'},
        {type:`news`, classType:``, descr:`Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф` , time: '2022-08-05-11-00'}
    ]);

    const [newsKharkiv, setNewsKharkiv] = useState([
        {type:`news`, classType:``, descr:`"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано` , time: '2022-08-05-11-00'},
        {type:`news`, classType:`photo`, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '2022-08-05-11-00'},
        {type:`news`, classType:``, descr:`Прем'єрка Швеції відвідала потрощені росіянами Бучу й Бородянку: реакція на побачене` , time: '2022-08-04-11-00'},
        {type:`news`, classType:`breaking`, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '2022-08-04-11-00'},
        {type:`news`, classType:``, descr:`Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф` , time: '2022-08-04-11-00'}
    ]);
    return (
        <section className="news-regions">
            <div className="news-regions__box">
                <h4 className="news-regions__title">Регіони</h4>
                <a  className="news-regions__link" href="#">Всі новини розділу</a>
            </div>
            <div className="news-regions__items">
                <NewsRegionsItem name={'Київ'} news={newsKyiv}/>     
                <NewsRegionsItem name={'Одеса'} news={newsOdesa}/>     
                <NewsRegionsItem name={'Харків'} news={newsKharkiv}/>     
            </div>

        </section>
    )
}