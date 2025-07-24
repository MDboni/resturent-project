import { useEffect, useState } from "react"
import SectionTitle from "../../../Component/SectionTitle"
import MenuItem from "./MenuItem"

const Menu = () => {
    const [pitem,setPItem] = useState([])
    useEffect(()=>{
        fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            const PopulerItem = data.filter( item => item.category === 'pizza' )
            setPItem( PopulerItem )
        })
    },[])
  return (
    <div className="w-5/6 mx-auto ">
        <SectionTitle
        subTitle='---Check it Out---'
        maintitle='FROM OUR MENU'
        />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {
                pitem.map( item => <MenuItem 
                    key={item._id}
                    item={item}
                    
                />)
            }
        </div>
    </div>
  )
}

export default Menu