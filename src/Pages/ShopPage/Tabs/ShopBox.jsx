import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCarts from "../../../Hooks/useCarts";


const ShopBox = ({ item }) => {
const { user } = useAuth() ;
const location = useLocation()
const navigate = useNavigate()
const { image, recipe, name , price , _id } = item;
const axiosSecure = useAxiosSecure()
const [ , refetch ] = useCarts()

const CardHandel = (food) => {
 
  if(user && user.email){
    // data send server
    console.log(user.email , food);
    const createItem = {
      menuId : _id ,
      email : user.email ,
      image , name, price 
    }

    axiosSecure.post(`/carts`, createItem)
    .then( res => {
      console.log(res.data);
      if(res.data.insertedId){
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Order has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      refetch()
      }
    })
  }
  else{
      Swal.fire({
      title: "Please Loggin first",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Create Account"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login', {state : { from: location.pathname }} )
        
      }
    });
  }
}

  return (
    <div className="card bg-white shadow-md hover:shadow-xl rounded-xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
      <figure className="h-60 overflow-hidden rounded-t-xl relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
        <h2 className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-bold rounded shadow">
          ${price}
        </h2>
      </figure>
      <div className="card-body text-center items-center">
        <h2 className="card-title text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 mb-4">{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={() => CardHandel(item)} className="btn btn-primary px-6 py-2 hover:scale-105 transition-all duration-300">
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopBox;
