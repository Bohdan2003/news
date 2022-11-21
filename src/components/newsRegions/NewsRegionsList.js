import { getTime, getDay, getMonth, transformMonth } from '../newsEditorial/NewsEditorial';

export default ({data, news}) => {
    return (
        <div className="news-list">
            <a className="news-list__data" href="#">
                {`${getDay(data)} ${transformMonth(getMonth(data)).toUpperCase()}`}
            </a>
            <ul className="news-list__items">
                {
                    news.map(({descr, time}, i) => 
                        <li className="news-list__item" key={i}>                           
                            <a 
                                className="news-list__item-descr" 
                                href="#"
                                onClick={e=>{
                                    e.preventDefault();
                                }}
                            >
                                <span className="news-list__item-time">
                                    {getTime(time)}
                                </span>
                                {descr}
                            </a>
                        </li>
                    )
                }
            </ul>
        </div>
    )  
}