import { transformData } from "../newsEditorial/NewsEditorial";

import "./newsItem.scss";

export default ({img, data, descr, i}) => {
    return (
        <div className="news-item" key={i}>
            <a className="news-item__imglink" href="#">
                <img  src={img} alt="Фото для статті"  />
            </a>           
            <div className="news-item__data" >{transformData(data)}</div>
            <a className="news-item__descrlink" href="#">{descr}</a>
        </div>  
    )
}