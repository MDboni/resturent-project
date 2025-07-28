
import MenuItem from "../../HomePage/Menu/MenuItem"

const MenuItemMap = ({item }) => {
  return (
    <div className="my-10 w-5/6 mx-auto">
       
         <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {
                item.map( item => <MenuItem 
                    key={item._id}
                    item={item} 
                />)
            } 
        </div>
    </div>
  )
}

export default MenuItemMap