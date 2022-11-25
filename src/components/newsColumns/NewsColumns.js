import { transformData } from "../newsEditorial/NewsEditorial";

import img1 from "../../assets/newsColumns/1.png"
import img2 from "../../assets/newsColumns/2.png"
import img3 from "../../assets/newsColumns/3.png"
import img4 from "../../assets/newsColumns/4.png"

import './newsColumns.scss'

export default () => {

    const news = [
        {personName:"Юлія Стахівська", personVocation:"письменниця", img: img1, data: "2022-08-05-11-00", descr: "Жінок в часи небезпеки приваблюють сильні чоловіки"},
        {personName:"Юрій Андрухович", personVocation:"письменник", img: img2, data: "2022-08-05-11-00", descr: "Штайнмаєр - людина-формула"},
        {personName:"Анна Прокопенко", personVocation:"журналістка", img: img3, data: "2022-08-05-11-00", descr: "Щоденник війни. П'ятий тиждень довгого лютого"},
        {personName:"Ірена Карпа", personVocation:"журналістка", img: img4, data: "2022-08-05-11-00", descr: "Не пощастило з географією. Небезпечний сусід"}
    ];

    return (
        <section className="news-columns">
            <div className="news-columns__box">
                <h5 className="news-columns__title">
                    Колонки
                </h5>
                <a className="news-columns__link" href="#">
                    Всі колонки
                </a>
            </div>
            
            <ul className="news-columns__items">
                {
                    news.map(({personName, personVocation, descr, img, data}, i) => 
                        <li className="news-columns__item" key={i}>    
                            <div className="news-columns__item-box">
                                <a className="news-columns__img-link" href="#">
                                    <img className="news-columns__img" src={img} alt="фото нащих кориспондентів" />
                                </a>
                                <div className="news-columns__person-box">                                    
                                    <div className="news-columns__person-name">
                                        <a className="news-columns__person-link" href="#">{personName}</a>    
                                    </div>
                                    <div className="news-columns__person-vocation"> 
                                        {personVocation.toUpperCase()}
                                    </div>
                                </div>
                            </div>  
                            <div className="news-columns__descr">
                                <a className="news-columns__descr-link" href="#">
                                    {descr}
                                </a>
                            </div>                                             
                            <div className="news-columns__data">
                                <a className="news-columns__data-link" href="#">
                                    {transformData(data)}
                                </a>                               
                            </div>
                        </li>
                    )
                }
            </ul> 
            <button 
                className="news-columns__btn"
            >Всі колонки</button>
        </section>
    )
}