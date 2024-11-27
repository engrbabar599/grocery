import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';
import '../../components/swiper.css';
import Button from '../Elements/Button';
const Zaika = () => {
    return (
        <section className='taste_section lg:block hidden'>
            <div className="w-full px-10 h-[28.125rem] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'linear-gradient( rgba(0,0,0,.8), rgba(0,0,0,.8)), url(../../table_book_bg_img.png)' }}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    loop={true}

                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="flex items-start gap-20 w-full h-full">
                            <div className="flex-[2] flex-col flex items-center gap-10 pl-10">
                                <img src="../../zaika.png" alt="" />
                                <Button text={'Book your table Now'} className={'px-5 p-2'} />
                            </div>
                            <div className="flex-[4] flex items-center justify-center h-full">
                                <h2 className="text-5xl text-white leading-[1.5]">"Zaika: Embark on a Culinary Journey with the Taste of India!"</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-start gap-20 w-full h-full">
                            <div className="flex-[2] flex-col flex items-center gap-10">
                                <img src="../../zaika.png" alt="" />
                                
                            </div>
                            <div className="flex-[4] flex flex-col gap-y-4  justify-center h-full">
                                <h2 className="text-5xl text-white leading-[1.5]">"Zaika: Embark on a Culinary Journey with the Taste of India!"</h2>
                                <Button text={'Book your table Now'} className={'px-5 p-2'} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-start gap-20 w-full h-full">
                            <div className="flex-[2] flex-col flex items-center gap-10">
                                <img src="../../zaika.png" alt="" />
                                
                            </div>
                            <div className="flex-[4] flex flex-col gap-y-4 justify-center h-full">
                                <h2 className="text-5xl text-white leading-[1.5]">"Zaika: Embark on a Culinary Journey with the Taste of India!"</h2>
                                <Button text={'Book your table Now'} className={'px-5 p-2'} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-start gap-20 w-full h-full">
                            <div className="flex-[2] flex-col flex items-center gap-10">
                                <img src="../../zaika.png" alt="" />
                                
                            </div>
                            <div className="flex-[4] flex flex-col gap-y-4 justify-center h-full">
                                <h2 className="text-5xl text-white leading-[1.5]">"Zaika: Embark on a Culinary Journey with the Taste of India!"</h2>
                                <Button text={'Book your table Now'} className={'px-5 p-2'} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-start gap-20 w-full h-full">
                            <div className="flex-[2] flex-col flex items-center gap-10">
                                <img src="../../zaika.png" alt="" />
                               
                            </div>
                            <div className="flex-[4] flex flex-col justify-center h-full gap-y-4">
                                <h2 className="text-5xl text-white leading-[1.5]">"Zaika: Embark on a Culinary Journey with the Taste of India!"</h2>
                                <Button text={'Book your table Now'} className={'px-5 p-2'} />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    )
}

export default Zaika