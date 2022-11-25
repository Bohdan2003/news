import { transformData } from '../newsEditorial/NewsEditorial';
import { Fancybox } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";
import './newsVideo.scss';

import img1 from "../../assets/newsVideo/1.jpg";
import img2 from "../../assets/newsVideo/2.jpg";
import img3 from "../../assets/newsVideo/3.jpg";
import img4 from "../../assets/newsVideo/4.jpg";
import img5 from "../../assets/newsVideo/5.jpg";

export default () => {

    const slides = [
        {img: img1, data: "2022-08-05-11-00", descr:'"Це не Джошуа": Усик розповів, кого вважає своїм головним суперником', videoLink: "https://www.youtube.com/watch?v=6E6uyr9nNZs&t=6s"},
        {img: img2, data: "2022-08-05-11-00", descr:'Ватажок "ДНР" підтвердив підготовку самосуду над полоненими українськими військовими. Відео', videoLink: "https://www.youtube.com/watch?v=6E6uyr9nNZs&t=6s"},
        {img: img3, data: "2022-08-05-11-00", descr:'"Спекотні літні канікули": Міноборони України попередило росіян про наслідки відвідування Криму (відео)', videoLink: "https://www.youtube.com/watch?v=6E6uyr9nNZs&t=6s"},
        {img: img4, data: "2022-08-05-11-00", descr:'Під москвою палала військова частина, де проходять службу строковики (відео)', videoLink: "https://www.youtube.com/watch?v=6E6uyr9nNZs&t=6s"},
        {img: img5, data: "2022-08-05-11-00", descr:'СБУ затримала в Києві "військового експерта", який працював на росію (фото)', videoLink: "https://www.youtube.com/watch?v=6E6uyr9nNZs&t=6s"}
    ];
    
    const renderDescription = (descr, i) => {
        if(i === 0){
            return descr.length > 90 && i === 0  ? descr.slice(0, 90) + "..." : descr;
        } else {
            return descr.length > 50 && i !== 0  ? descr.slice(0, 50) + "..." : descr;
        }
    }

    return (
        <section className="newsVideo">
            <div className="container">
                <div className="newsVideo__inner">
                    <div className="newsVideo__box">
                        <h5 className="newsVideo__title">
                            Відео
                        </h5>
                        <button className="newsVideo__btn">
                            Більше новин
                        </button>
                    </div>
                    <div className="newsVideo__content">
                        <ul className="newsVideo__list">
                            {
                                slides.map(({img, data, descr, videoLink}, i) => (
                                    <li className="newsVideo__item" key={i}>
                                        <a className="newsVideo__item-box" data-fancybox
                                           href={videoLink}>
                                            <img className="newsVideo__item-img" src={img} alt={descr.slice(0, 10)}/>                                            
                                        </a>
                                        <a className="newsVideo__item-data" href="#">
                                            {transformData(data)}
                                        </a>
                                        <a className="newsVideo__item-descr" href="#">
                                            {renderDescription(descr, i)}
                                        </a>

                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}