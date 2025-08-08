import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../Hooks/useAxiosSecure"
import { MdDeleteSweep, MdOutlineDriveFileRenameOutline } from "react-icons/md"
import Swal from "sweetalert2"

const Allusers = () => {
 
  const AxiosSecure = useAxiosSecure()


  const {data: users=[] ,refetch} = useQuery({
    queryKey: ['users'],
    queryFn : async() =>{
      const res = await AxiosSecure.get('/users',{
        headers:{
          authorization:`Bearer ${localStorage.getItem('access-token')}`
        }
      })
      return res.data
    }
  })


  const AdminHandel = (id) => {
    console.log(id);
    AxiosSecure.patch(`/users/admin/${id}`)
    .then(res => {
      console.log(res.data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
      });
      refetch(4)
    })

  }
 const DeleteHandel = (id) => {
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
      AxiosSecure.delete(`/users/${id}`)
        .then(res => {
            refetch()
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success"
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
      <h2>Total Users : {users.length}</h2>

       <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                users.map((item,index) => (
                  <tr>
                    <th>{index+1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                     <td>
                      {
                        item.role === 'admin' ? 'Admin' :
                         <button onClick={()=>AdminHandel(item._id)} className="btn btn-ghost btn-xs text-2xl py-4 text-white bg-amber-600 "><MdOutlineDriveFileRenameOutline/></button>
                      }
                        
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

export default Allusers ; 