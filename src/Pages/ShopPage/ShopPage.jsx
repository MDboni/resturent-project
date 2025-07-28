
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Layout/Navbar'
import CoverImg from '../../Shared/CoverImg/CoverImg'
import img from '../../assets/shop/banner2.jpg'
import ShopTabs from './Tabs/ShopTabs'
import Footer from '../../Layout/Footer'

const ShopPage = () => {
  
  return (
    <div>
      <Helmet>
        <title>Bistro | Shop</title>
        <meta name="description" content="Check out our delicious menu items." />
      </Helmet>
      <Navbar>
        <CoverImg img={img} Heading='Shop' pragraph='Shop your Best item'/>
        <ShopTabs/>
        <Footer/>
      </Navbar>
    </div>
    
  )
}

export default ShopPage