import Navbar from "../../Layout/Navbar"
import CoverImg from "../../Shared/CoverImg/CoverImg"
import img from '../../assets/shop/banner2.jpg'
import Tabs from "./Tabe/TabsShop"
const OurShopePage = () => {
  return (
    <Navbar>
        <CoverImg img={img} Heading='our shope' pragraph='would u like try dish!'/>
        <Tabs/>
    </Navbar>
  )
}

export default OurShopePage