import Footer from "../../Layout/Footer"
import Navbar from "../../Layout/Navbar"
import Banner from "./Banner/Banner"
import Featuerd from "./Feature/Featuerd"
import Menu from "./Menu/Menu"
import Recomended from "./Recomended/Recomended"
import SwiperContent from "./Swipper/Swipper"
import Testmonial from "./Teastmonial/Testmonial"
import { Helmet } from 'react-helmet-async'
const HomePage = () => {
  return (
    <>
      <Helmet>
         <title>Home</title>
         <meta name="description" content="Delicious food served daily." />
       </Helmet>
       <Navbar>
          <Banner/>
          <SwiperContent/>
          <Menu  />
          <Recomended/>
          <Featuerd/>
          <Testmonial/>
          <Footer/>      
       </Navbar>
    </>
    
  )
}

export default HomePage