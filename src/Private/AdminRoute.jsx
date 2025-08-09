import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../Hooks/useAuth"
import useAdmin from "../Hooks/useAdmin"


const AdminRoute = ({children}) => {
  const {user,loading} = useAuth()
  const location = useLocation()
  const [isAdmin,isAdminLoading] = useAdmin()
  

  if(loading || isAdminLoading){
    return(
        <div className="flex justify-center items-center h-screen">
            <span className="loading loading-ring loading-xl"></span>
        </div>
    )
  }

  if(user && isAdmin){
    return children 
  }

  return <Navigate to={`/login`} state={{ from: location.pathname }} replace></Navigate>

}

export default AdminRoute