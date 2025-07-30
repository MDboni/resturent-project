
import useAuth from "../Hooks/useAuth"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute = ({children }) => {
  const {user,loading} = useAuth()
  const location = useLocation()

  if(loading){
    return(
        <div className="flex justify-center items-center h-screen">
            <span className="loading loading-ring loading-xl"></span>
        </div>
    )
  }

  if(user){
    return children 
  }

  return <Navigate to={`/login`} state={{ from: location.pathname }} replace></Navigate>
}

export default PrivateRoute