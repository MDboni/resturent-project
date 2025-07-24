import SectionTitle from "../../../Component/SectionTitle"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testmonial = () => {

    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then( data => setReviews(data))
    },[])

  return (
    <div className="w-3/5 mx-auto">
        <SectionTitle      
            subTitle='---What Our Client Sayes---'
            maintitle='TESTMONIALS'
        />
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">

            {
                reviews.map(item => <SwiperSlide
                key={reviews._id}
                >
                    <div className="px-6 md:px-20 text-center items-center py-8 mb-9 bg-white shadow rounded-lg space-y-4">
                {/* Rating */}
                <Rating
                    style={{ maxWidth: 180, margin: "0 auto" }}
                    value={item.rating}
                    readOnly
                />

                {/* Review Text */}
                <p className="text-gray-600 italic">{item.details}</p>

                {/* Name */}
                <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
                </div>

                </SwiperSlide>)
            }
            
            
           
      </Swiper>
    </div>
  )
}

export default Testmonial