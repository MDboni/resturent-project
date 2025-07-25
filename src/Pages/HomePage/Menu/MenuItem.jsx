const MenuItem = ({item}) => {
    const {image, price, name, recipe} = item
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
                <button className="btn mt-2 bg-amber-100">Order</button>
            </div>
            <p className="text-yellow-600 font-bold whitespace-nowrap">${price}</p>
        </div>
    )
}

export default MenuItem
