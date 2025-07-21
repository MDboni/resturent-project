import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
const SwiperContent = () => {
  return (
      <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="Slide 1" />
            <h2 className='text-center md:-mt-25 -mt-10 text-white text-2xl'>Veg</h2>
        </SwiperSlide>
            <SwiperSlide><img src={slide2} alt="Slide 1" />
            <h2 className='text-center lg:-mt-25 -mt-10 text-white text-2xl'>Salad</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="Slide 1" />
            <h2 className='text-center md:-mt-25  -mt-10 text-white text-2xl'>Panir</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="Slide 1" />
            <h2 className='text-center md:-mt-25 -mt-10 text-white text-2xl'>Cake</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="Slide 1" />
            <h2 className='text-center md:-mt-25  -mt-10 text-white text-2xl'>Salad</h2>
        </SwiperSlide>
        
        
      </Swiper>
    </>
  )
}

export default SwiperContent