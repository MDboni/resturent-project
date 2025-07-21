
import Footer from "../../Layout/Footer"
import Navbar from "../../Layout/Navbar"
import Banner from "./Banner/Banner"
import SwiperContent from "./Swipper/Swipper"



const HomePage = () => {
  return (
    <Navbar>
       <Banner/>
        <SwiperContent/>
       <Footer/>      
    </Navbar>
  )
}

export default HomePage