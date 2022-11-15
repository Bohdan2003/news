import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper';
import img from '../../assets/slider/1.jpg';
import img2 from '../../assets/slider/2.jpg';

import 'swiper/css';
import "./slider.scss";


const Slider = () => {
    const slides = [
        {img, descr:'Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»'},
        {img:img2, descr:'"Це не Джошуа": Усик розповів, кого вважає своїм головним суперником'},
        {img, descr:'Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»'},
        {img, descr:'Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»'},
        {img, descr:'Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»'}
    ];

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const length = slides.length;
    const [activeFrame, setFrame] = useState(1);

    const nextFrame = () => {
        setFrame(frame => {
            if(frame > length - 1){
                return 1; 
            } else {
                return frame + 1;
            }
        });        
    }
    const prevFrame = () => {
        setFrame(frame => {
            if(activeFrame <= 1){
                return length; 
            } else {
                return frame - 1;
            }
        });   
    }


    return (
        <section className="slider">
            <div className="slider__items-wrapper">
                <div className="slider__items" style={{transform: `translate(-${activeFrame*100-100}%,0)`}}>
                    {slides.map(({img, descr}, i)=>{
                        return (
                        <div className="slider__item" 
                             key={i}
                             style={{minWidth:`${document.documentElement.scrollWidth+1}px`}}
                             >
                                <img src={img} alt={descr.slice(0,30)+"..."} className="slider__item-img" />
                        </div> 
                        )
                    })}
                </div>
            </div>     
            <div className="slider__content">
                <div className="container">
                    <div className="slider__content-text">
                        {slides[activeFrame-1].descr}
                    </div>
                    <div className="slider__counter-box">
                        <button className="slider__btn-prev" onClick={prevFrame}></button>
                        <div className="slider__counter">{activeFrame} / <span>{length}</span></div>
                        <button className="slider__btn-next" onClick={nextFrame}></button>
                    </div>    
                </div>
            </div>  
            <main>
                <Swiper 
                    modules={[Thumbs]} 
                    thumbs={{ swiper: thumbsSwiper }} 
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>

                <Swiper
                    modules={[Thumbs]}
                    watchSlidesProgress
                    onSwiper={setThumbsSwiper}
                    slidesPerView={3}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </main>             
        </section>
    )
};

export default Slider;