import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { transformData } from '../newsEditorial/NewsEditorial';

import 'swiper/css';
import './promotion.scss';

export default ({img, date, descr, items}) => { 
    return(
        <section className="promotion">
            <div className="promotion__top">
                <div className="promotion__title">
                    Промо
                </div>
                <a className="promotion__morelink" href="#">
                    Всі матеріали
                </a>    
            </div>
            <div className="promotion__content ">
                <a className="promotion__imglink" href='#'>
                    <img src={img} alt="Фото для реклами"/>
                </a>
                <div className="promotion__box">
                    <div className="promotion__date">
                        {transformData(date)}
                    </div>
                    <a className="promotion__textlink" href='#'>
                        {descr}
                    </a>
                </div>
            </div>
            <Swiper className="promotion__items " 
                modules={[Navigation]}
                // navigation
                navigation={{
                    prevEl: '.swiper-prev',
                    nextEl: '.swiper-next',
                  }}
                spaceBetween={30}
                slidesPerView={3}
                // // onSlideNextTransitionStart={() => {
                // //     document.querySelector('.promotion__items').classList.remove('hiden-before');
                // // }}
                // // onSlidePrevTransitionStart={() => {
                // //     document.querySelector('.promotion__items').classList.add('hiden-before');
                // // }}
                // onSliderMove={()=>{  
                //     if(document.querySelector('.promotion__items > button').classList.contains('swiper-button-disabled')){                       
                //         document.querySelector('.promotion__items').classList.add('hiden-after');
                //     } else {
                //         document.querySelector('.promotion__items').classList.remove('hiden-after');
                //     }         
                // }}
            >
                {
                    items.map(({date, descr}, i) => 
                        <SwiperSlide key={i} className="promotion__item">
                            <div className="promotion__item-date">
                                {transformData(date)}
                            </div>
                            <a className="promotion__descrlink" href="#" >
                                {descr.length > 50 ? descr.slice(0, 50) + "..." : descr}
                            </a>
                        </SwiperSlide>
                    )
                }
                <button className="swiper-next"><span></span></button>
                <button className="swiper-prev"><span></span></button>

            </Swiper>
        </section>
    )
}