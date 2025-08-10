import { MdDeleteSweep, MdOutlineDriveFileRenameOutline } from "react-icons/md"
import SectionTitle from "../../Component/SectionTitle"
import useMenu from "../../Hooks/useMenu"
import Swal from "sweetalert2"
import useAxiosSecure from "../../Hooks/useAxiosSecure"

const ManageItem = () => {
    const [menu] = useMenu()
    const AxiosSecure = useAxiosSecure()

    const DeleteHandel =  (id) => {
        console.log(id); 
        Swal.fire({
            title: "Are you sure?",
            text: "You want Delete this Item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
            if (result.isConfirmed) {
                
               const ress = await AxiosSecure.delete(`/menu/${id}`)
                console.log(ress.data);
                
                if(ress.data.deletedCount > 0){
                     Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                }
               
               
            }
        });
    }

  return (
    <div>
        <SectionTitle      
            subTitle='---Hurri Up ---'
            maintitle='MANAGE ALL ITEM'
        />

        <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                        
                        </th>
                        <th>Iteme Img</th>
                        <th>Iteme Name</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                        {
                            menu.map((item,i)=>(
                        <tr key={item._id}>
                            <th>
                               {i+1}
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
                               
                              <span className="badge badge-ghost badge-sm">{item.name}</span>
                            </td>
                            <td>
                                {item.price}$
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
  )
}

export default ManageItem