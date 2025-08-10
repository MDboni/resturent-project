
import useCarts from "../../Hooks/useCarts"
import { MdDeleteSweep } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const CartPage = () => {
  const [cart,refetch] = useCarts()
  const totalPrice = cart.reduce((accml , curnt)=> accml + curnt.price , 0)
  const AxiosSecure = useAxiosSecure()

 const DeleteHandel = (id) => {
  console.log(id);
  Swal.fire({
    title: "Are you sure?",
    text: "You want Delete this Item!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      AxiosSecure.delete(`/carts/${id}`)
        .then(res => {
            refetch()
          if (res.data.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
        .catch(error => {
          console.error("Delete failed:", error);
        });
    }
  });
};

  return (
    <div>
       <div className="flex justify-evenly">
          <h2 className="text-3xl font-bold">Total Item : {cart.length}</h2>
          <h2 className="text-3xl font-bold">Total Price : {totalPrice.toFixed(2)}$</h2>
          <Link to='/dashboard/payment'>
             {
               ( cart.length ) ? 
                <button className="text-xl bg-amber-500 text-white px-4 rounded-2xl py-2 cursor-pointer">Pay</button>
              : 
                
                <button disabled={!cart.length} className="text-xl disabled:opacity-50 disabled:cursor-not-allowed bg-amber-500 text-white px-4 rounded-2xl py-2">Pay</button> 
             }
             
          </Link>
          
       </div>


            <div className="overflow-x-auto">
               <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                <label>
                                    <p>Serial</p>
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
                            cart.map((item,i) => (
                               <tr key={i}>
                                    <th>
                                        {i + 1}
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
                                        <button className="btn btn-ghost btn-xs text-2xl py-4 text-white bg-amber-600 "><MdOutlineDriveFileRenameOutline/></button>
                                    </td>
                                    <td>
                                        <button onClick={()=> DeleteHandel(item._id)} className="btn btn-ghost btn-xs text-2xl py-4 bg-red-800 text-white"><MdDeleteSweep/></button>
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

export default CartPage