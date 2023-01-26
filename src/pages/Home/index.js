import styles from './Home.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";
function Home() {
    const [heightHeader, setHeightHeader] = useState(0);
    useEffect(() => {
        if (document.getElementById('header').offsetHeight) {
            setHeightHeader(document.getElementById('header').offsetHeight);
            console.log('render');
        }
    }, [heightHeader]);

    return (
        <div
            style={{ paddingTop: heightHeader + 'px' }}
            className={clsx(styles.slider, 'container')}
        >
            <div className="row">
                <div className="col-lg-5">
                    <div className={clsx(styles.contentTitle)}>
                        <div className={clsx(styles.imgCricle)}>
                            <img src={require('~/assets/img/wlop-45se.jpg')} alt="" />
                            <img src={require('~/assets/img/wlop-61se.jpg')} alt="" />
                            <img src={require('~/assets/img/wlop-15se.jpg')} alt="" />
                            <img className={clsx(styles.eggCricle)} src={require('~/assets/img/wlop-46se.jpg')} alt="" />
                        </div>
                        <i class="fas fa-snowflake"></i>
                    </div>
                    <div className={clsx(styles.title)}>
                        <h1>100k Art Collection</h1>
                        <p>The best artwork collection created by famous artists around the world</p>
                        <div className={clsx(styles.yulia)}>
                            <h2>Yulia</h2>
                            <div className={clsx(styles.line)}></div>
                        </div>
                        <h2>The Little</h2>
                        <h2>Princess</h2>
                    </div>
                </div>
                <div className="col-lg-7">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                          clickable: true
                        }}
                        modules={[FreeMode, Pagination]}
                        className={clsx(styles.swiper)}
                    >
                        <SwiperSlide className={clsx(styles.swiperSlide)}>
                            <img src={require('~/assets/img/slider1.jpg')} alt='Cô gái tóc trắng'/>
                        </SwiperSlide>
                        <SwiperSlide className={clsx(styles.swiperSlide)}>
                            <img src={require('~/assets/img/slider2.jpg')} alt='Cô gái tóc đen'/>
                        </SwiperSlide>
                        <SwiperSlide className={clsx(styles.swiperSlide)}>
                            <img src={require('~/assets/img/slider3.jpg')} alt='Cô gái đang ngồi với 1 con mèo' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Home;
