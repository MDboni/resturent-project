import useCarts from "../../Hooks/useCarts"

const AddItemPage = () => {
  const [cart] = useCarts()
  const totalPrice = cart.reduce((accml , curnt)=> accml + curnt.price , 0)
  return (
    <div>
       <div className="flex justify-evenly">
          <h2 className="text-3xl font-bold">Total Item : {cart.length}</h2>
          <h2 className="text-3xl font-bold">Total Price : {totalPrice.toFixed(2)}$</h2>
          <h2 className="text-xl bg-amber-500 text-white px-4 rounded-2xl py-2">Pay</h2>
       </div>


            <div className="overflow-x-auto">
               <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                </th>
                                <th>Item img</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            cart.map(item => (
                               <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                       {item.name}
                                    <br />
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </td>
                            
                               </tr>
                            ))
                        }
                            
                        </tbody>
                    </table>
               </div>
            </div>
    </div>
  )
}

export default AddItemPage