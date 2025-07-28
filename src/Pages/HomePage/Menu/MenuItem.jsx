import { Link } from "react-router-dom"


const MenuItem = ({item}) => {
    const {image, price, name, recipe , category } = item
    return (
        <div className="flex justify-between  space-x-4 min-h-[150px] p-4 shadow-md rounded-lg bg-white">
            <img
                src={image}
                alt=""
                className="w-24 h-24 object-cover rounded-b-3xl rounded-tr-3xl"
            />
            <div className="flex-1">
                <h2 className="font-bold text-lg">{name}-------</h2>
                <p className="text-sm text-gray-600">{recipe}</p>
                <Link
                    to={`/shop/${category}`}  
                    className="btn mt-2 bg-amber-100 hover:bg-amber-200 transition-all"
                    >
                    Order
                </Link>
            </div>
            <p className="text-yellow-600 font-bold whitespace-nowrap">${price}</p>
            
        </div>
    )
}

export default MenuItem
