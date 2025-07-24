import Footer from "../../Layout/Footer"
import Navbar from "../../Layout/Navbar"
import Banner from "./Banner/Banner"
import Featuerd from "./Feature/Featuerd"
import Menu from "./Menu/Menu"
import SwiperContent from "./Swipper/Swipper"
import Testmonial from "./Teastmonial/Testmonial"

const HomePage = () => {
  return (
    <Navbar>
       <Banner/>
       <SwiperContent/>
       <Menu  />
       <Featuerd/>
       <Testmonial/>
       <Footer/>      
    </Navbar>
  )
}

export default HomePage