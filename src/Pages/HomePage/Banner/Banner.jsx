import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.png'
import img6 from '../../../assets/home/06.png'

const Banner = () => {
  return (
    <div className="h-[40vh] md:h-[80vh] m-0 p-0 ">
        <Carousel 
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        swipeable={true}
        dynamicHeight={false}
    >
    
        <div className="h-[40vh] md:h-[80vh] w-full object-contain md:object-cover">
            <img src={img1} alt=""  />
        </div>
        <div className="h-[40vh] md:h-[80vh] w-full object-contain md:object-cover">
            <img src={img2} alt="" />
        </div>
        <div className="h-[40vh] md:h-[80vh] w-full object-contain md:object-cover">
            <img src={img3} alt="" />
        </div>
        <div className="h-[40vh] md:h-[80vh] w-full object-contain md:object-cover">
            <img src={img4} alt="" />
        </div>
        <div className="h-[40vh] md:h-[80vh] w-full object-contain md:object-cover">
            <img src={img5} alt="" />
        </div>
        <div className="h-[40vh] md:h-[80vh] w-full object-contain md:object-cover">
            <img src={img6} alt="" />
        </div>
    
    </Carousel>
    </div>
  )
}

export default Banner