import { useState, useEffect, useRef } from 'react';

import './newsAll.scss';

export default () => {
    const listRef = useRef(null);

    const [activeFilter, setFilter] = useState('all');

    const filtersBtn = [
        {name: "all", label: "Всі"},
        {name: "news", label: "Новини"},
        {name: "arcticles", label: "Статті"}
    ];

    useEffect(()=>{
       
    },[]);
    const [news, setNews] = useState([
        {type:`news`, classType:``, descr:`"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано` , time: '14:59'},
        {type:`news`, classType:`photo`, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '14:59'},
        {type:`news`, classType:``, descr:`Прем'єрка Швеції відвідала потрощені росіянами Бучу й Бородянку: реакція на побачене` , time: '14:59'},
        {type:`news`, classType:`breaking`, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '14:59'},
        {type:`news`, classType:``, descr:`Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф` , time: '14:59'},
        {type:`arcticles`, classType:``, descr:`До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини` , time: '14:59'},
        {type:`arcticles`, classType:``, descr:`"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано` , time: '14:59'},
        {type:`arcticles`, classType:``, descr:`Дружина Зеленського чесно зізналася, чи боїться смерті` , time: '14:59'},
        {type:`arcticles`, classType:``, descr:`"Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців` , time: '14:59'},
        {type:`arcticles`, classType:``, descr:`Жданов назвав три питання, які обговорять путін і Ердоган` , time: '14:59'}
    ]);

    return (
        <section className="news-all">
            <div className="news-all__box">
                <h5 className="news-all__title">
                    Всі новини
                </h5>
                <div className="news-all__state">
                    Архів
                </div>
            </div>
            <div className="news-all__filters">
                {
                    filtersBtn.map(({name, label}, i) => 
                        <button 
                            className={`news-all__filters-btn ${activeFilter == name ? 'news-all__filters-btn--active' : null}`}
                            key={i}
                            onClick={()=>{
                                setFilter(name); 
                            }}
                        >{label}</button>
                    )
                }
            </div>
            <ul className="news-list__items"
                ref={listRef}>
                {
                    news.filter(item => {
                        if(activeFilter==='all'){
                            return item
                        } else if(item.type === activeFilter) {
                            return item
                        }
                    }).map(({classType, descr, time}, i) => 
                        <li className={`news-list__item 
                                        ${classType === `photo` ? 'news-with-photo' : null}
                                        ${classType === `breaking` ? 'breaking-news' : null}`
                                      } 
                            key={i}
                        >                           
                            <a 
                                className="news-list__item-descr" 
                                href="#"
                                onClick={e=>{
                                    e.preventDefault();
                                }}
                            >
                                <span className="news-list__item-time">
                                    {time}
                                </span>
                                {descr}
                            </a>
                        </li>
                    )
                }
            </ul>
            <button 
                className="news-all__btn"
                onClick={(e)=>{
                    listRef.current.style.maxHeight = `${listRef.current.clientHeight-15}px`;
                    listRef.current.style.overflow = `auto`;
                    listRef.current.style.paddingRight = `15px`;
                    listRef.current.style.marginBottom = `15px`;
                    setNews(news=> [...news, ...news]);
                    e.target.disabled = true;
                }}
            >Завантажити ще</button>
        </section>
    )
}