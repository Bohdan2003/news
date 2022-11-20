import './newsRegions.scss';
import img from "../../assets/newsRegions/1.jpg"
import { useState } from 'react';

export default () => {

    const [newsRegions, setNewsRegions] = useState([
        {img, data: "2022-08-05-11-00", descr: "Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі."},
        {img, data: "2022-08-05-11-00", descr: "Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України."},
        {img, data: "2022-08-05-11-00", descr: "Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України."},
        {img, data: "2022-08-05-11-00", descr: "У \"Слузі\" пояснили, чому в росії знову заговорили про переговори з Україною."},
        {img, data: "2022-08-05-11-00", descr: "ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи."},
        {img, data: "2022-08-05-11-00", descr: "Білорусь несподівано вирішила провести військові навчання з Казахстаном: що відомо."}
    ]);

    const transformMonth = (month) => {
        switch(month){
            case '01':
                return 'січень'
            case '02':
                return 'лютий'
            case '03':
                return 'березень'
            case '04':
                return 'квітень'
            case '05':
                return 'травень'
            case '06':
                return 'червень'
            case '07':
                return 'липень'
            case '08':
                return 'серпень'
            case '09':
                return 'вересень'
            case '10':
                return 'жовтень'
            case '11':
                return 'листопад'
            case '12':
                return 'грудень'
            default:
                return 'error'                   
        }      
    };

    const transformData = (data) => 
        `${data.slice(8,10)} ${transformMonth(data.slice(5,7)).toUpperCase()} ${data.slice(11).replace(/\-/g, ":")}`
    ;

    return (
        <section className="news-regions">
            <h4 className="news-regions__title">
                Вибір редакції
            </h4>
            <ul className="news-regions__list">
                {newsRegions.map(({img, data, descr}) => 
                    <li className="news-regions__item">
                        <img className="news-regions__item-img" src={img} alt=""  />
                        <a className="news-regions__item-data" href="#">{transformData(data)}</a>
                        <a className="news-regions__item-descr" href="#">{descr}</a>
                    </li>  
                )}     
            </ul>
        </section>
    )
}