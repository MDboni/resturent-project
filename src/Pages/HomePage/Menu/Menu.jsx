import { useEffect, useState } from "react"
import SectionTitle from "../../../Component/SectionTitle"
import MenuItem from "./MenuItem"
import useMenu from "../../../Hooks/useMenu"

const Menu = () => {
 
    const [ menu ] = useMenu() 
    const populer = menu.filter(item => item.category === 'salad')
    // const [pitem,setPItem] = useState([])

    // useEffect(()=>{
    //     fetch("menu.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         const PopulerItem = data.filter( item => item.category === 'pizza' )
    //         setPItem( PopulerItem )
    //     })
    // },[])
  return (
    <div className="w-5/6 mx-auto ">
        <SectionTitle
           subTitle='---Check it Out---'
           maintitle='FROM OUR MENU'
        />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {
                populer
                .map( item => <MenuItem 
                    key={item._id}
                    item={item}
                    
                />)
            } 
        
       
        </div>
    </div>
  )
}

export default Menu