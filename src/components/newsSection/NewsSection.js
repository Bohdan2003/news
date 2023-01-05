import NewsList from '../newsList/NewsList';
import NewsItem from '../newsItem/NewsItem';

import './newsSection.scss'

export default ({news, newsList}) => {
    return (
        <section className="news-section">          
            <div className="news-section__box">
                <h5 className="news-section__title">
                    Політика
                </h5>
                <a className="news-section__link" href="#" >
                    Всі новини розділу
                </a>
            </div>    
            <div className="news-section__content">
                <div className="news-section__content-box">
                    <div className="news-section__items">
                        {
                            news.map(({img, date, descr}, i) => 
                                <NewsItem img={img} data={date} descr={descr} i={i}/>
                            )}
                    </div>
                </div>
                <div className="news-list">
                    <div className="news-list__title">
                        Новини розділу
                    </div>
                    <NewsList news={newsList}/>
                    <button className="news-list__btn">
                        Більше
                    </button>
                </div>
            </div>       
        </section>
    )
}