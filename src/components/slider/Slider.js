import { useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay  } from 'swiper';
import img from '../../assets/slider/1.jpg';
import img2 from '../../assets/slider/2.jpg';

import 'swiper/css';
import "./slider.scss";


const Slider = () => {
    const slides = [
        {img, descr:'Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»'},
        {img: img2, descr:'Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»'},
        {img, descr:'Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»'},
        {img, descr:'Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»'},
        {img, descr:'Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»'}
    ];

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className="slider">
            <div className="slider__inner">
                <Swiper
                    className="slider__items" 
                    navigation={{
                        prevEl: '.swiper-prev',
                        nextEl: '.swiper-next',
                      }}
                    modules={[Navigation, Thumbs, Autoplay ]}
                    autoplay={{ delay: 10000 }}
                    thumbs={{ swiper: thumbsSwiper }} 
                >
                    {slides.map(({img, descr}, i)=>(
                        <SwiperSlide className="slider__item" key={i}>
                            {({ isActive }) => {
                                if(isActive){
                                    document.querySelector('.slider__counter').innerHTML= `${i+1}/<span>${slides.length}</span>`;
                                }                               
                                return (
                                    <>
                                        <div className="slider__item-box">                               
                                            <div className="container">
                                                <a className="slider__item-text" href="#">{descr}</a>
                                            </div>                       
                                        </div>
                                            
                                        <img src={img} alt={descr.slice(0,30)+"..."} className="slider__item-img" />
                                    </>
                                )
                            }}                           
                        </SwiperSlide> 
                        )
                    )}
                      
                </Swiper>
                <div className="slider__counter-box">
                        <div className="container">
                            <div className="swiper-prev"></div>
                            <div className="slider__counter"></div>
                            <div className="swiper-next"></div>
                        </div>                   
                </div>  
            </div>
                
            <div className="subslider">
                <div className="container">
                    <Swiper
                        className="subslider__items"
                        modules={[Thumbs]}
                        watchSlidesProgress
                        onSwiper={setThumbsSwiper}
                        slidesPerView={4}
                        spaceBetween={30}
                    >   
                        {slides.map(({img, descr}, i)=>(
                            <SwiperSlide className="subslider__item" key={i}>
                                    <img className="subslider__item-img" src={img} alt={descr.slice(0,30)+"..."}  />
                                    <div className="subslider__item-text">
                                        {descr.slice(0,60)+"..."}
                                    </div>
                            </SwiperSlide> 
                            )
                        )}
                    </Swiper>
                </div>
            </div>              
                      
        </section>
    )
};

export default Slider;