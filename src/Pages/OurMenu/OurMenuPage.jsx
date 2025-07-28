import Navbar from "../../Layout/Navbar";
import { Helmet } from 'react-helmet-async';
import CoverImg from "../../Shared/CoverImg/CoverImg";
import covermg from '../../assets/menu/banner3.jpg'; 
import MenuCommoncober from "./MenuCommonCoberimg/MenuCommoncober";
import imgg from '../../assets/menu/dessert-bg.jpeg'
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Component/SectionTitle";
import MenuItemMap from "./MenuCommonCoberimg/MenuItemMap";
import FavFoodHeading from "./MenuCommonCoberimg/FavFoodHeading";
import imgo from '../../assets/menu/pizza-bg.jpg'
import imgs from '../../assets/menu/salad-bg.jpg'
import imgd from '../../assets/menu/soup-bg.jpg'
import Footer from "../../Layout/Footer";


const OurMenuPage = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
  return (
    <>
      <Helmet>
        <title>Bistro | Our Menu</title>
        <meta name="description" content="Check out our delicious menu items." />
      </Helmet>
      <Navbar>
        <CoverImg img={covermg} Heading='our menu' pragraph='would u like to tey a dish'/> 
        <SectionTitle subTitle="don't miss" maintitle="Todays Offer" />
        <MenuItemMap item={offered}/>
        <FavFoodHeading/>
        <MenuCommoncober img={imgg} Heading='dessert' pragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ad?' />
        <MenuItemMap item={dessert}/>
        <FavFoodHeading/>
        <MenuCommoncober img={imgo} Heading='PIZZA'/>
        <MenuItemMap item={pizza}/>
        <MenuCommoncober img={imgs} Heading='SAlad'/>
        <MenuItemMap item={salad}/>
        <MenuCommoncober img={imgd} Heading='DEINKS'/>
        <MenuItemMap item={drinks}/>
        <Footer/>
      </Navbar>
    </>
  );
};

export default OurMenuPage;
